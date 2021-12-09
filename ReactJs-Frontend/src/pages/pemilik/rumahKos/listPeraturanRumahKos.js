import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie';

import DataTable from 'react-data-table-component';
import { useQuery } from '@apollo/client';
import { GET_RUMAH_KOS_USER } from '../../../graphql/queries';
import AddRumahKos from './addRumahKos';
import EditRumahKos from './editRumahKos';



export default function ListRumahKos() {
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
    const {loading, data: dataGetAll, error} = useQuery(GET_RUMAH_KOS_USER, {variables: {id_user:value}});

    console.log(dataGetAll);
    if(loading){
        return "Loading..."
    }
    if(error){
        return "Error..."
    }

    const columns = [
        {
            name: 'Id Peraturan',
            selector: row => row.nama,
            sortable: true
        },
        {
            name: 'Peraturan ',
            selector: row => row.alamat,
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
                <button className="btnOwnerRed p-2">X</button>
            </div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    
    
    

    return (
        <div>
            <h4>Peraturan Rumah Kos</h4>
            <hr />
            <div className="row">
                <div className="col-12">
                    <AddRumahKos />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                        <DataTable
                            columns={columns}
                            data={dataGetAll.getAllRumahKosUser}
                            pagination
                           
                        />
                </div>
            </div>
        </div>
    )
}