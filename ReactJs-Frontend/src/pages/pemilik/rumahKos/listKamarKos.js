import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie';

import DataTable from 'react-data-table-component';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_LISTING_OWNER, GET_RUMAH_KOS_USER } from '../../../graphql/queries';
import AddRumahKos from './addRumahKos';
import EditRumahKos from './editRumahKos';
import AddKamarKos from './addKamarKos';
import EditsKamarKos from './editKamarKos';
import { DELRES_LISTING } from '../../../graphql/mutation';



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
    const {loading, data: dataGetAllListing, error} = useQuery(GET_ALL_LISTING_OWNER, {variables: {id_user:value}});

    //deklarasi delete kos
    const [delete_kamar_kos, data] = useMutation(DELRES_LISTING);

    console.log(dataGetAllListing);
    if(loading){
        return "Loading..."
    }
    if(error){
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
            name: 'status',
            cell: row => row.status == 1 ? <span className="badge badge-info">Available</span> : <span className="badge badge-danger">Non Available</span>  
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
            </div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    
    
    

    return (
        <div>
            <h4>Kamar Rumah Kos</h4>
            <hr />
            <div className="row">
                <div className="col-12">
                   <AddKamarKos />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                        <DataTable
                            columns={columns}
                            data={dataGetAllListing.getAllListingUserOwner}
                            pagination
                           
                        />
                </div>
            </div>
        </div>
    )
}