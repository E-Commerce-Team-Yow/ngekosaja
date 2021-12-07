import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { ADD_MEDIA } from '../../graphql/mutation';
import { GET_ALL_MEDIA,GET_ONE_MEDIA } from '../../graphql/queries';
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
let banyakMedia;
const AddMedia = () => {
    const [formState, setFormState] = useState({
        path: '',
    });
    const [creMed, data] = useMutation(ADD_MEDIA);
    const script = document.createElement("script");
    script.src = `../../js/validation.js`;
    script.async = true;
    document.body.appendChild(script);
    
    const [uploadedFile, setUploadedImage] = useState(null);
    
    //banyakMedia = dataGetAll.getAllMedia.length;

    const onUploadImage = (e) =>  {  
        setUploadedImage(e.target.files[0]);
        // let date = new Date();
        // let temp = date.getDate() + '' + (date.getMonth()+1) + '' + (date.getFullYear()-1) + '' + date.getHours() + '' + String(date.getMinutes()).padStart(2, '0') + '' + String(date.getSeconds()).padStart(2, '0');
        console.log(banyakMedia);
        let kode = "M"+String(banyakMedia+1).padStart(4, '0');
        namafoto = kode;
        console.log(namafoto);
        
    }
    
    const doUploadImage = () => {    
        
        const formData = generateFormData({
            foto: uploadedFile,
          });
          console.log(namafoto);
          axios
            .post(
              "https://uploadgambar-ngekosaja.herokuapp.com/upload/"+ namafoto,
              formData,
              {
                headers: { "Content-Type": "multipart/form-data" },
              }
            )
            .then((res) => {
              //success
              console.log(res.data);
              creMed({
                variables: { path: ''+res.data },
                refetchQueries:[{query: GET_ALL_MEDIA}]
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

   
    useEffect(() => {
        if(!data.loading && data.data?.addMedia){
            console.log(data.data?.addMedia.id);
          NotificationManager.success('', data.data?.addMedia.message, 2000);
          setTimeout(() => {
              window.location.replace("/admin/mediaTable")
          }, 2000);
        }
      }, [!data.loading])
    const {loading, data: dataGetAll, error} = useQuery(GET_ALL_MEDIA);
    if(loading){
        return "Loading..."
    }
    if(error){
        console.log(error);
    return "Error..."
    }
    console.log(dataGetAll.getAllMedia);
    banyakMedia = dataGetAll.getAllMedia.length;
    // const {loading, error, data: dataGetOne} = useQuery(GET_ONE_MEDIA,
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
                    <h1>Add Media</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Add Media</li>
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
                        <h3 className="card-title">Profil Media</h3>
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        
                        <form id="quickForm" 
                            onSubmit={ e =>{
                                e.preventDefault();
                                doUploadImage();
                                
                            }}
                            >
                        <div className="card-body">
                            <div className="form-group">
                            <label>Foto</label>
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
                            <button type="submit" className="btn btn-primary" >Submit</button>
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

export default AddMedia;