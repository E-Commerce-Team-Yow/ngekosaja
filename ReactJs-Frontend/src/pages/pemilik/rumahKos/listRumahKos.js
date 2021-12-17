import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import DataTable from 'react-data-table-component';
import { useQuery, useMutation } from '@apollo/client';
import { GET_RUMAH_KOS_USER } from '../../../graphql/queries';
import AddRumahKos from './addRumahKos';
import EditRumahKos from './editRumahKos';
import { DELRES_RUMAH_KOS } from '../../../graphql/mutation';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import {CSVLink, CSVDownload} from 'react-csv';


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
    const {loading, data: dataGetAll, error} = useQuery(GET_RUMAH_KOS_USER, {variables: {id_user:value, type : 0}});


     //deklarasi delete kos
    const [delete_rumah_kos, data] = useMutation(DELRES_RUMAH_KOS);

    useEffect(() => {
        if(!data.loading && data.data?.delresRumah){
          NotificationManager.success('', data.data?.delresRumah.message, 2000);
        }
      }, [!data.loading])

    console.log(dataGetAll);
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
            <div className="row">
                <div className="col-12">
                <CSVLink data={dataGetAll.getAllRumahKosUser} className='btnOwner'>Download(CSV)</CSVLink>
                        <DataTable
                            columns={columns}
                            data={dataGetAll.getAllRumahKosUser}
                            pagination
                           
                        />
                </div>
            </div>
        <NotificationContainer/>
        </div>
    )
}