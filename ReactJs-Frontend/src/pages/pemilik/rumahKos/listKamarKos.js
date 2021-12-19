import React, { useEffect, useState } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie';

import DataTable from 'react-data-table-component';

import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_LISTING_OWNER, GET_RUMAH_KOS_USER } from '../../../graphql/queries';
import AddRumahKos from './addRumahKos';
import EditRumahKos from './editRumahKos';
import AddKamarKos from './addKamarKos';
import EditsKamarKos from './editKamarKos';
import { DELRES_LISTING } from '../../../graphql/mutation';
import { Button } from 'react-bootstrap';
import {CSVLink, CSVDownload} from 'react-csv';


export default function ListKamarKos() {
	let history = useHistory();
	const [cookies, setCookie, removeCookie] = useCookies(['userLogin']);
	const [dataUser,setdataUser] = useState(null);
    const [value,setValue] = useState(null);
	//check data user
	useEffect(()=>{
        if(cookies.userLogin){
            setdataUser(cookies.userLogin);
            setValue(cookies.userLogin.id);
		} 
	},[value]);
    console.log(value);
    const {loading: loadAllListing, data: dataGetAllListing, error: errorAllListing} = useQuery(GET_ALL_LISTING_OWNER, {variables: {id_user:value}});
    const {loading:loadAllRumahKos, data:getAllRumahKosUser, error:errorAllRumahKos} = useQuery(GET_RUMAH_KOS_USER, {variables : {id_user:value, type : 1}});
    
    const [filteredItem,setFilteredItem] = useState([])
	
	useEffect(()=>{
        if(dataGetAllListing){
            setFilteredItem(dataGetAllListing?.getAllListingUserOwner)
        }
    },[!loadAllListing]);

    
    //deklarasi delete kos
    const [delete_kamar_kos, data] = useMutation(DELRES_LISTING);

    console.log(dataGetAllListing);
    if(loadAllListing){
        return "Loading..."
    }
    if(errorAllListing){
        return "Error..."
    }



    const columns = [
        {
            name: 'Nama',
            selector: row => row.nama,
            sortable: true
        },
        {
            name: 'Panjang ',
            selector: row => row.panjang,
            sortable:true
        },
        {
            name: 'Lebar',
            selector: row => row.lebar,
            sortable:true
        },
        {
            name: 'Rumah Kos',
            selector: row => row.rumah_kos.nama,
            sortable:true
        },
        {
            name: 'Harga Bulanan',
            selector: row => row.harga_bulanan,
            sortable:true
        },
        {
            name: 'status',
            cell: row => row.status == 1 ? <span className="badge badge-info">Available</span> :<span className="badge badge-danger">Non Available</span>  
        },
        {
			name: 'Actions',
            cell: row => <div className="col-12">  
                <EditsKamarKos kamar_kos={row}/>
                {
                    row.status == 1 ?  <button className="btnOwnerRed p-2"  onClick={
                       function(){
                        delete_kamar_kos({variables: {id: row.id}, refetchQueries:[{query: GET_ALL_LISTING_OWNER, variables: {id_user:value}}]});
                       }
                    }> <i className="fas fa-times" /></button> :
                    <button className="btnOwnerGreen p-2"  onClick={
                        function(){
                         delete_kamar_kos({variables: {id: row.id},  refetchQueries:[{query: GET_ALL_LISTING_OWNER, variables: {id_user:value}}]});
                        }
                     }> <i className="fas fa-check" /></button>
                }
                <NavLink to={"/DetailKamar?id="+ row.id} ><i className='fas fa-eye'></i></NavLink>
            </div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    
    //const actionsMemo = React.useMemo(() => <Button onExport={() => downloadCSV(dataGetAllListing.getAllListingUserOwner)} />, []);
    

    return (
        <div>
            <h4>Kamar Rumah Kos</h4>
            <hr />
            <div className="row">
                <div className="col-12">
                   <AddKamarKos />
                </div>
            </div>
            <div className='row mb-5'>
                <div className='col-3'>
                    <input type="text" 
                        className='w-100' 
                        placeholder='Search By Name...'
                        onChange={(e)=>{
                            if(e.target.value != ''){
                               setFilteredItem( filteredItem.filter(
                                item => item.nama && item.nama.toLowerCase().includes(e.target.value.toLowerCase()),
                            ))
                            }else{
                                setFilteredItem( dataGetAllListing.getAllListingUserOwner)
                            }
                        }}
                    />
                </div>
                <div className='col-3'>
                    <select className='form-control w-100'
                        onChange={(e)=>{
                            if(e.target.value != ''){
                               setFilteredItem( filteredItem.filter(
                                item => item.nama && item.rumah_kos.id.toLowerCase().includes(e.target.value.toLowerCase()),
                            ))
                            }else{
                                setFilteredItem( dataGetAllListing.getAllListingUserOwner)
                            }
                        }}
                    
                    >
                                <option value="" key="0">Filter By Rumah Kos</option>
                                                {
                                                    getAllRumahKosUser && (
                                                        getAllRumahKosUser.getAllRumahKosUser.map(rmh_kos => 
                                                            <option value={rmh_kos.id} key={rmh_kos.id}>{rmh_kos.nama}</option>
                                                        )
                                                    )
                                                }
                    </select>
                </div>
                <div className='col-3'>
                    <select className='form-control w-100'
                        onChange={
                            (e) => {
                                if(e.target.value != ''){          
                                    setFilteredItem( filteredItem.filter(
                                        item => item.status == parseInt(e.target.value),
                                    ))
                                 }
                                 else{
                                     setFilteredItem( dataGetAllListing.getAllListingUserOwner)
                                 }
                            }
                        }
                    
                    >
                        <option value={''}>Filter By Status</option>
                        <option value={1}>Aktif</option>
                        <option value={0}>Non Aktif</option>
                        <option value={2}>terisi</option>
                    </select>
                </div>
            </div>
            <div className="row">
             
                <div className="col-12">
                <CSVLink data={filteredItem} className='btnOwner'>Download(CSV)</CSVLink>
                        <DataTable
                            columns={columns}
                           // data={dataGetAllListing.getAllListingUserOwner}
                           data = {filteredItem}
                           // action = {actionsMemo}
                            pagination
                          
                        />
                </div>
            </div>
        </div>
    )
}