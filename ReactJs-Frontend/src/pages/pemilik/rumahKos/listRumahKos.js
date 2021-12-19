import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import DataTable from 'react-data-table-component';
import { useQuery, useMutation } from '@apollo/client';
import { GET_RUMAH_KOS_USER, GET_ALL_KOTA } from '../../../graphql/queries';
import AddRumahKos from './addRumahKos';
import EditRumahKos from './editRumahKos';
import { DELRES_RUMAH_KOS } from '../../../graphql/mutation';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import {CSVLink, CSVDownload} from 'react-csv';
import { Link, NavLink, useHistory } from 'react-router-dom'

export default function ListRumahKos() {
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
    const {loading:loadRumahKos, data: dataGetAll, error:errorRumahKos} = useQuery(GET_RUMAH_KOS_USER, {variables: {id_user:value, type : 0}});
    const {loading:loadKota, data: getAllKota, error:errorKota} = useQuery(GET_ALL_KOTA);

     //deklarasi delete kos
    const [delete_rumah_kos, data] = useMutation(DELRES_RUMAH_KOS);

    const [filteredItem,setFilteredItem] = useState([])

	
	useEffect(()=>{
        if(dataGetAll){
            setFilteredItem(dataGetAll?.getAllRumahKosUser)
        }
    },[!loadRumahKos]);



    useEffect(() => {
        if(!data.loading && data.data?.delresRumah){
          NotificationManager.success('', data.data?.delresRumah.message, 2000);
        }
      }, [!data.loading])

    console.log(dataGetAll);
    if(loadRumahKos){
        return "Loading..."
    }
    if(errorRumahKos){
    return "Error..."
    }

   

    const columns = [
        {
            name: 'Nama',
            selector: row => row.nama,
            sortable: true
        },
        {
            name: 'Alamat',
            selector: row => row.alamat,
            sortable:true
        },
        {
            name: 'Kota',
            selector: row => row.kota? row.kota.nama : console.log("gagal nge load kota"),
            sortable:true
        },
        {
            name: "Total Kamar",
            selector: row => row.total_kamar,
            sortable:true
        },
        {
            name: "Sisa Kamar",
            selector: row => row.sisa_kamar,
            sortable:true
        },
        {
            name: 'Status',
            cell: row => row.status == 1 ? <span className="badge badge-info">Available</span> : <span className="badge badge-danger">Non Available</span>  
        },
        {
			name: 'Actions',
            cell: row => <div className="col-12">  
                <EditRumahKos rumah_kos={row} />
                {
                    row.status == 1 ?  <button className="btnOwnerRed p-2"  onClick={
                       function(){
                        delete_rumah_kos({variables: {id: row.id}, refetchQueries:[{query: GET_RUMAH_KOS_USER, variables: {id_user:value, type : 0}}]});
                       }
                    }> <i className="fas fa-times" /></button> :
                    <button className="btnOwnerGreen p-2"  onClick={
                        function(){
                         delete_rumah_kos({variables: {id: row.id},  refetchQueries:[{query: GET_RUMAH_KOS_USER, variables: {id_user:value, type : 0}}]});
                        }
                     }> <i className="fas fa-check" /></button>
                }
                 <NavLink to={"/DetailRumahKos?id="+ row.id} ><i className='fas fa-eye'></i></NavLink>
            </div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    
    
    

    return (
        <div>
            <h4> Rumah Kos</h4>
            <hr />
            <div className="row">
                <div className="col-12">
                    <AddRumahKos />
                </div>
            </div>
            <div className='row mb-5 mt-5'>
                <div className='col-3 '>
                    <input type="text"  
                    className='w-100'
                        placeholder='Search By Name...'
                        onChange={(e)=>{
                            if(e.target.value != ''){
                               setFilteredItem( filteredItem.filter(
                                item => item.nama && item.nama.toLowerCase().includes(e.target.value.toLowerCase()),

                                
                            ))
                            } 
                            else{
                                setFilteredItem( dataGetAll.getAllRumahKosUser)
                            }
                        }}
                    />
                </div>
                <div className='col-3'>
                    <input type="text" 
                        className='w-100' 
                        placeholder='Search By Address...'
                        onChange={(e)=>{
                            if(e.target.value != ''){
                               setFilteredItem( filteredItem.filter(
                                item => item.alamat && item.alamat.toLowerCase().includes(e.target.value.toLowerCase()),
                            ))
                            }
                            else{
                                setFilteredItem( dataGetAll.getAllRumahKosUser)
                            }
                        }}
                    />
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
                                     setFilteredItem( dataGetAll.getAllRumahKosUser)
                                 }
                            }
                        }
                    
                    >
                        <option value={''}>Filter By Status</option>
                        <option value={1}>Aktif</option>
                        <option value={0}>Non Aktif</option>
                    </select>
                </div>
                <div className='col-3'>
                            <select name="kota_kos" id="kota_kos" className=" form-control w-100" 
                                            
                                            onChange={(e) =>
                                               {
                                                if(e.target.value != ''){

                                                   
                                                    setFilteredItem( filteredItem.filter(
                                                        item => item.kota && item.kota.id == parseInt(e.target.value),
                                                    ))
                                                 }
                                                 else{
                                                     setFilteredItem( dataGetAll.getAllRumahKosUser)
                                                 }
                                               }
                                            }
                                            >
                                                 <option value={''} key={'aaaa'}>Filter By Kota</option>
                                                {
                                                    getAllKota && (
                                                        getAllKota.getAllKota.map(kota => 
                                                            <option value={kota.id} key={kota.id}>{kota.nama}</option>
                                                        )
                                                    )
                                                }
                                            </select>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <CSVLink data={filteredItem} className='btnOwner'>Download(CSV)</CSVLink>
                        <DataTable
                            columns={columns}
                            data={filteredItem}
                            pagination
                           
                        />
                </div>
            </div>
        <NotificationContainer/>
        </div>
    )
}