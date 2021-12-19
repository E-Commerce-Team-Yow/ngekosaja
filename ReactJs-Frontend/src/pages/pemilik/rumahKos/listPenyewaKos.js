import React, { useEffect, useState } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie';

import DataTable from 'react-data-table-component';

import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_LISTING_OWNER, GET_ALL_PENYEWAAN_kos, GET_RUMAH_KOS_USER } from '../../../graphql/queries';
import AddRumahKos from './addRumahKos';
import EditRumahKos from './editRumahKos';
import AddKamarKos from './addKamarKos';
import EditsKamarKos from './editKamarKos';
import { DELRES_LISTING } from '../../../graphql/mutation';
import { Button } from 'react-bootstrap';
import {CSVLink, CSVDownload} from 'react-csv';


export default function ListPenyewaKos() {
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
    const {loading:loadPenyewa, data:getPenyewa, error : errorPenyewa} = useQuery(GET_ALL_PENYEWAAN_kos, {variables : {id_pemilik : value}})


    const [filteredItem,setFilteredItem] = useState([])
	
	useEffect(()=>{
        if(getPenyewa){
            setFilteredItem(getPenyewa?.getPenyewaanPemilik)
        }
    },[!loadPenyewa]);

    
    //deklarasi delete kos
    const [delete_kamar_kos, data] = useMutation(DELRES_LISTING);

    console.log(dataGetAllListing);
    if(loadPenyewa){
        return "Loading..."
    }
    if(errorPenyewa){
        return "Error..."
    }



    const columns = [
        {
            name: 'Id',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'Nama',
            selector: row => row.user.nama_depan,
            sortable: true
        },
        {
            name:'bulan',
            selector: row => row.bulan
        },
        {
            name: 'Telepon ',
            selector: row => row.user.no_tlp,
            sortable:true
        },
        {
            name: 'tanggal transaksi',
            selector: row => row.tanggal_transaksi,
            sortable:true
        },
        {
            name: 'total',
            selector: row => row.total,
            sortable:true
        },
      
        {
            name: 'status',
            cell: row => row.status == 1 ? <span className="badge badge-info">Available</span> : row.status == 2 ? <span className="badge badge-warning">Terisi</span> :<span className="badge badge-danger">Non Available</span>  
        },
        
    ];

    
    //const actionsMemo = React.useMemo(() => <Button onExport={() => downloadCSV(dataGetAllListing.getAllListingUserOwner)} />, []);
    console.log(getPenyewa)
    console.log(filteredItem)

    return (
        <div>
            <h4>Penyewa Kos</h4>
            <hr />
            <div className="row">
               
            </div>
            <div className='row mb-5'>
                <div className='col-3'>
                    <input type="text" 
                        className='w-100' 
                        placeholder='Search By Name...'
                        onChange={(e)=>{
                            if(e.target.value != ''){
                               setFilteredItem( filteredItem.filter(
                                item => item.user.nama_depan && item.user.nama_depan.toLowerCase().includes(e.target.value.toLowerCase()),
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
                                item => item.listing && item.listing.id.toLowerCase().includes(e.target.value.toLowerCase()),
                            ))
                            }else{
                                setFilteredItem( getPenyewa.getPenyewaanPemilik)
                            }
                        }}
                    
                    >
                                <option value="" key="0">Filter By Kamar Kos</option>
                                                {
                                                    dataGetAllListing && (
                                                        dataGetAllListing.getAllListingUserOwner.map(rmh_kos => 
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
                                     setFilteredItem( getPenyewa.getPenyewaanPemilik)
                                 }
                            }
                        }
                    
                    >
                        <option value={''}>Filter By Status</option>
                        <option value={1}>Aktif</option>
                        <option value={0}>Non Aktif</option>

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