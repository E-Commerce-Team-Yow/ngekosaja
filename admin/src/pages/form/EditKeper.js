import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { UPDATE_KEPER } from '../../graphql/mutation';
import { GET_ONE_KEPER, GET_ALL_KEPER } from '../../graphql/queries';
import Footer from '../Footer';
import Header from '../Header';
import SideNav from '../SideNav';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const EditKeper = () => {
    const [formState, setFormState] = useState({
        isi: '',
        tipe: 1,
    });
    
    const script = document.createElement("script");
    script.src = `../../js/validation.js`;
    script.async = true;
    document.body.appendChild(script);
    
    const search = useLocation().search;
    const act = new URLSearchParams(search).get('act');
    const id = new URLSearchParams(search).get('id');
    const obj = new URLSearchParams(search).get('obj');
    const tipe = new URLSearchParams(search).get('tipe');
    const [updKep, data] = useMutation(UPDATE_KEPER);
    const {loading, error, data: dataGetOne} = useQuery(GET_ONE_KEPER,
        { variables: {  id: id }}
    )
    useEffect(() => {
        if(!data.loading && data.data?.updateKeper){
            NotificationManager.success('', data.data?.updateKeper.message, 2000);
            setTimeout(() => {
                window.location.replace("/admin/keperTable")
            }, 1000);
        }
      }, [!data.loading])
    
    
    useEffect(() =>{
        if(loading){
            console.log("loading")
            return "Loading..."
        }
        if(error){
            console.log("eror")
            return "Error..."
        }
        if(act == "edit"){
            setFormState({
                isi: dataGetOne.getOneKeper.isi,
                tipe: dataGetOne.getOneKeper.tipe
            })
            console.log(dataGetOne.getOneKeper.tipe);
            console.log(formState.tipe);
        }
    },[loading])

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
                    <h1>{act} {obj}</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">{act} {obj}</li>
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
                        <h3 className="card-title">Profil {obj}</h3>
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        
                        <form id="quickForm" 
                            onSubmit={ e =>{
                                e.preventDefault();
                                if (act != null && id != null) {
                                    console.log(parseInt(formState.tipe));
                                    updKep({
                                        variables: { id: id, isi: formState.isi, tipe: parseInt(formState.tipe) },
                                        refetchQueries:[{query: GET_ALL_KEPER}]
                                    });
                                    
                                }
                            }}
                            >
                        <div className="card-body">
                            <div className="form-group">
                            <label>Isi</label>
                                <input type="text" name="nama" className="form-control" placeholder="Masukkan isi Ketentuan dan Peraturan" 
                                defaultValue={formState.isi}
                                onChange={(e) =>
                                    setFormState({
                                    ...formState,
                                    isi: e.target.value 
                                    })
                                }
                                />
                            </div>
                            <div className="form-group">
                            <label>Tipe</label>
                                <select id="tipe" className="form-control"
                                    defaultValue={formState.tipe}
                                    onChange={(e) => 
                                        setFormState({
                                            ...formState,
                                            tipe: e.target.value 
                                            })
                                    }
                                >
                                    <option value="1">1 - Ketentuan</option>
                                    <option value="2">2 - Peraturan</option>
                                </select>
                                
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

export default EditKeper;