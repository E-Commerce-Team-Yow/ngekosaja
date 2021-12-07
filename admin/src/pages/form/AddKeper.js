import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { ADD_KEPER, UPDATE_KEPERS } from '../../graphql/mutation';
import { GET_ONE_KEPER, GET_ALL_KEPER, GET_ALL_LISTING } from '../../graphql/queries';
import Footer from '../Footer';
import Header from '../Header';
import SideNav from '../SideNav';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

// const temp;
const Add = () => {
    const [formState, setFormState] = useState({
        isi: '',
        tipe: '', 
        listingId: ''
    });

    const script = document.createElement("script");
    script.src = `../../js/validation.js`;
    script.async = true;
    document.body.appendChild(script);
   


    const [creFas, data] = useMutation(ADD_KEPER);
    useEffect(() => {
        if(!data.loading && data.data?.addKeper){
          NotificationManager.success('', data.data?.addKepers.message, 2000);
        }
      }, [!data.loading])
      const {loading, data: dataGetAll, error} = useQuery(GET_ALL_LISTING);
      if(loading){
          return "Loading..."
      }
      if(error){
          console.log(error);
      return "Error..."
      }
    //   temp = data.getAllListing;
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
                    <h1>Add Ketentuan Peraturan</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Add Ketentuan Peraturan</li>
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
                                    variables: { isi: formState.isi, tipe: formState.tipe, listingId: formState.listingId },
                                    refetchQueries:[{query: GET_ALL_KEPER}]
                                });
                                console.log(formState.listingId);
                                // setTimeout(() => {
                                //     window.location.replace("/admin/fasilitasTable")
                                // }, 1000);
                            }}
                            >
                        <div className="card-body">
                            <div className="form-group">
                            <label>Isi</label>
                                <input type="text" name="isi" className="form-control" placeholder="Masukkan isi ketentuan peraturan" 
                                defaultValue={formState.nama}
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
                                <input type="text" name="tipe" className="form-control" placeholder="Masukkan tipe ketentuan peraturan" 
                                defaultValue={formState.nama}
                                onChange={(e) =>
                                    setFormState({
                                    ...formState,
                                    tipe: e.target.value 
                                    })
                                }
                                />
                            </div>
                            <div className="form-group">
                            <label>Listing </label>
                                    <select name="fasilitas" className="form-control" placeholder="Pilih Listing" 
                                        onChange={(e) =>
                                            setFormState({
                                                ...formState,
                                                listingId: e.target.value
                                            })
                                        }
                                    >
                                    { 
                                        
                                        // dataGetAll && (
                                        //     dataGetAll.getAllKeper.map(keper => 
                                        //         <option value={keper.id}>{keper.id} - {keper.nama}</option>                                               
                                        //     )
                                        // )
                                    }
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

export default Add;