import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { UPDATE_KOTA } from '../../graphql/mutation';
import { GET_ONE_KOTA, GET_ALL_KOTA } from '../../graphql/queries';
import Footer from '../Footer';
import Header from '../Header';
import SideNav from '../SideNav';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from 'axios';

function generateFormData(data) {
    const formData = new FormData();
    const dataValue = Object.values(data);
    const dataKeys = Object.keys(data);
  
    for (let i = 0; i < dataValue.length; i++) {
      if (dataValue[i]) {
        formData.append(dataKeys[i], dataValue[i] || "");
      }
    }
  
    return formData;
  }
let namafoto;
const EditKota = () => {
    const [formState, setFormState] = useState({
        path: '',
    });
    
    const script = document.createElement("script");
    script.src = `../../js/validation.js`;
    script.async = true;
    document.body.appendChild(script);
    
    const search = useLocation().search;
    const act = new URLSearchParams(search).get('act');
    const id = new URLSearchParams(search).get('id');
    const obj = new URLSearchParams(search).get('obj');
    const [updKot, data] = useMutation(UPDATE_KOTA);
    console.log(parseInt(id));
    useEffect(() => {
      if(!data.loading && data.data?.updateKota){
        NotificationManager.success('', data.data?.updateKota.message, 2000);
        setTimeout(() => {
          window.location.replace("/admin/kotaTable")
      }, 1000);
      }
    }, [!data.loading])
    const {loading, error, data: dataGetOne} = useQuery(GET_ONE_KOTA,
        { variables: {  id: parseInt(id) }}
    )
    const [uploadedFile, setUploadedImage] = useState(null);
    
    const onUploadImage = (e) =>  {  
        setUploadedImage(e.target.files[0]);
    }
    
    const doUploadImage = () => {    
        const formData = generateFormData({
            foto: uploadedFile,
          });
          
          axios
            .post(
              "https://uploadgambar-ngekosaja.herokuapp.com/upload/"+ id,
              formData,
              {
                headers: { "Content-Type": "multipart/form-data" },
              }
            )
            .then((res) => {
              //success
              console.log(res.data);
              updKot({
                variables: { id: parseInt(id), gambar: res.data+'' },
                refetchQueries:[{query: GET_ALL_KOTA}]
              });
            })
            .catch((err) => {
              //error
              if (err.response) {
                console.log("res error", err.response.data);
              } else if (err.request) {
                console.log("req error", err.request.data);
              } else {
                console.log("Error", err.message);
              }
            });
    }

    
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
                path: dataGetOne.getOneKota.gambar,
            })
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
                            }}
                        />
                        <div className="card-body">
                        <div className="form-group">
                            <label>Gambar</label>
                            <input  type="file"
                                    id="upload"
                                    name="upload"
                                    onChange={(e) => onUploadImage(e)}
                                    type="file"
                            />
                            </div>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary" onClick={()=> doUploadImage()}>Submit</button>
                        </div>
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

export default EditKota;
