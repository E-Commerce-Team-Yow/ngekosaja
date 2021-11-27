import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { ADD_FASILITAS_KOS, UPDATE_FASILITAS_KOS } from '../../graphql/mutation';
import { GET_ONE_FASILITAS_KOS, GET_ALL_FASILITAS_KOS } from '../../graphql/queries';
import Footer from '../Footer';
import Header from '../Header';
import SideNav from '../SideNav';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const Add = () => {
    const [formState, setFormState] = useState({
        nama: '',
        keterangan: ''
    });

    const script = document.createElement("script");
    script.src = `../../js/validation.js`;
    script.async = true;
    document.body.appendChild(script);
    
    const [creFas, data] = useMutation(ADD_FASILITAS_KOS);
    useEffect(() => {
        if(!data.loading && data.data?.addFasilitasKos){
          NotificationManager.success('', data.data?.addFasilitasKos.message, 2000);
        }
      }, [!data.loading])
    // const {loading, error, data: dataGetOne} = useQuery(GET_ONE_FASILITAS_KOS,
    //     { variables: {  id: id }}
    // )
    
    // useEffect(() =>{
    //     if(loading){
    //         console.log("loading")
    //         return "Loading..."
    //     }
    //     if(error){
    //         console.log("eror")
    //         return "Error..."
    //     }
    //     if(act == "edit"){
    //         setFormState({
    //             nama: dataGetOne.getOneFasilitasKos.nama,
    //             keterangan: dataGetOne.getOneFasilitasKos.keterangan,
    //         })
    //     }
    // },[loading])

    return (
        <div>
            <Header/>
            <SideNav/>
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Add Fasilitas</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Add Fasilitas</li>
                    </ol>
                    </div>
                </div>
                </div>{/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                <div className="row">
                    {/* left column */}
                    <div className="col-md-12">
                    {/* jquery validation */}
                    <div className="card card-primary">
                        <div className="card-header">
                        <h3 className="card-title">Profil Fasilitas</h3>
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        
                        <form id="quickForm" 
                            onSubmit={ e =>{
                                e.preventDefault();
                                creFas({
                                    variables: { nama: formState.nama, keterangan: formState.keterangan },
                                    refetchQueries:[{query: GET_ALL_FASILITAS_KOS}]
                                });
                                setTimeout(() => {
                                    window.location.replace("/admin/fasilitasTable")
                                }, 1000);
                            }}
                            >
                        <div className="card-body">
                            <div className="form-group">
                            <label>Nama</label>
                                <input type="text" name="nama" className="form-control" placeholder="Masukkan nama fasilitas" 
                                defaultValue={formState.nama}
                                onChange={(e) =>
                                    setFormState({
                                    ...formState,
                                    nama: e.target.value 
                                    })
                                }
                                />
                            </div>
                            <div className="form-group">
                            <label>Keterangan</label>
                                <textarea name="keterangan" className="form-control" rows={3} placeholder="Masukkan keterangan fasilitas" 
                                defaultValue={formState.keterangan}
                                onChange={(e) =>
                                    setFormState({
                                    ...formState,
                                    keterangan: e.target.value
                                    })
                                }
                                />
                            </div>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        </form>
                    </div>
                    {/* /.card */}
                    </div>
                    {/*/.col (left) */}
                    {/* right column */}
                    <div className="col-md-6">
                    </div>
                    {/*/.col (right) */}
                </div>
                {/* /.row */}
                </div>{/* /.container-fluid */}
            </section>
            {/* /.content */}
            </div>
            <NotificationContainer/>
            <Footer/>
        </div>
    )
}

export default Add;