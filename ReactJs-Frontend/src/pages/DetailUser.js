import React, {useEffect, useState} from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useHistory, useLocation } from 'react-router';
import { GET_ALL_PENYEWAAN } from '../graphql/queries';
import { LOGIN_USER } from '../graphql/queries';
import { useCookies } from 'react-cookie';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Header from './Header';
import Footer from './Footer';
import  Source from './Source';
import FormEditUser from './formEditUser';


export default function DetailUser() {
    let history = useHistory();
    const [cookies, setCookie, removeCookie] = useCookies(['userLogin']);
	const [dataUser,setdataUser] = useState(null);
  
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let tanggal = "";

	//check data user
	useEffect(()=>{
		if(cookies.userLogin){
			setdataUser(cookies.userLogin);
		} else{
           window.location.replace("/");
        }
	},[]);
    if(dataUser){       
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        tanggal = new Date(parseInt(dataUser.created_at)).getDate() + "-" + (new Date(parseInt(dataUser.created_at)).getMonth()+1)
        + "-" + new Date(parseInt(dataUser.created_at)).getFullYear();
        let a = parseInt(new Date(parseInt(dataUser.created_at)).getMonth()+1);
    }
    console.log(dataUser)
    const {loading, data: dataGetAll, error} = useQuery(GET_ALL_PENYEWAAN,{variables: {id_user: dataUser.id}});
    console.log(dataGetAll)
    // var date = new Date(parseInt(dataUser.created_at) * 1000);
    // console.log(date.toUTCString())

    return (
        <div className="js">
            <Header/>
            
            {/* section breadcrumb */}
            <section>
                <div className="container">
                    <div className="col-lg-12 col-sm-12 mt-4">
                        <ul className="breadcrumb">
                            <li><a href="/">Home</a></li>
                            <li>Detail User</li>
                        </ul>
                    </div>
                </div>
            </section>

           {
               dataUser ? 
               <section>
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-lg-4 col-sm-12 image-detail">
                            {dataUser.foto ?
                                <img src={dataUser.foto} alt="Profil Pict" className="img-profile"/>
                            :
                                <img src={Source['profil']} alt="Profil Pict" className="img-profile"/>
                            }
                            </div>
                            <div className="col-lg-8 col-sm-12 user-detail">
                                <div className="row mt-3">
                                    <div className="col-lg-12 col-sm-12 inline">
                                       <div className="row">
                                           <div className="col-8">
                                           <h2 className="inline">{dataUser.nama_depan} {dataUser.nama_belakang}</h2>
                                           </div>
                                           <div className="col-4">
                                                <button className=" edit-btn" data-toggle="modal"  data-target="#ModalEditUser" data-placement="top" title="Edit Button"> <i className="fas fa-pencil fa-2x"></i></button>
                                                <button className=" log-off-btn" data-toggle="tooltip" data-placement="top" title="Log Off Button" onClick={(e) =>
													{ 
														removeCookie('userLogin');
                                                        window.location.href = "/";
													}
												}> <i className="fas fa-sign-out-alt fa-2x"></i></button>
                                           </div>
                                       </div>
                                        {/* Modal edit */}
                                            <FormEditUser/>
                                        {/* end-modal-edit */}        
                                    </div>
                                </div>
                                <hr className="border-black"/>
                                <div className="row mt-5">
                                    <div className="col-lg-12 col-sm-12">
                                        <div className="row">
                                            {
                                                dataUser.no_nik ?
                                                
                                                <div className="col-6 info-user"> <i className="fas fa-phone  mr-2"></i> <h6 className="inline">{dataUser.no_tlp}</h6></div>
                                                :
                                                <div className="col-6 info-user"> <i className="fas fa-phone  mr-2"></i> <h6 className="inline">Belum ada data</h6></div>
                                            }
                                            <div className="col-6 info-user" > <i className="fas fa-envelope  mr-2"></i> <h6 className="inline">{dataUser.email}</h6></div>
                                          
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-6 info-user"> <b>NIK : </b> {
                                                dataUser.no_nik ?
                                                <h6 className="inline ml-2">{dataUser.nik}</h6>
                                                :
                                                <h6 className="inline ml-2"><i>Belum ada data</i></h6>
                                            }</div>
                                            <div className="col-6 info-user"> <b>NO REKENING : </b> {
                                                dataUser.no_rek ? <h6 className="inline ml-2">{dataUser.no_rek.substring(0,5)}****</h6>
                                                :
                                                <h6 className="inline ml-2"><i>Belum ada data</i></h6>
                                            }
                                            </div>
                                            
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-12 info-user"> 
                                                <b>STATUS : </b>  <h6 className="ml-2 inline"><span className="badge badge-primary">{dataUser.role.nama}</span></h6>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="row mt-5">
                                    <div className="col-lg-12 col-sm-12">
                                        <h3>Keterangan Tempat Tinggal</h3>
                                    </div>
                                </div>
                                <hr className="border-black"/>
                                <div className="row mt-5">
                                    <div className="col-lg-12 col-sm-12">
                                       
                                        <div className="row mt-2">
                                            <div className="col-6 info-user"> <b>NAMA TEMPAT TINGGAL : </b> </div>
                                            <div className="col-6 info-user"> <b>TANGGAL GABUNG : {tanggal}</b> </div>
                                            
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-12 info-user"> 
                                                <b>ALAMAT TEMPAT TINGGAL : </b>  
                                                {/* <h6 className="ml-2 inline"><span className="badge badge-primary">{dataUser.role.nama}</span></h6> */}
                                            </div>
                                            <div className="col-12 info-user "> 
                                                <b>NOTES : </b>  
                                                {/* <h6 className="ml-2 inline"><span className="badge badge-primary">{dataUser.role.nama}</span></h6> */}
                                            </div>
                                        </div>
                                      
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 payment-history">
                                <div className="row">
                                    <div className="col-12">
                                        <h6>History Pembayaran</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    {
                                        dataGetAll && (
                                            dataGetAll.getAllPenyewaan.map(penyewaan => 
                                                <div className="col-12">
                                                    {penyewaan.status_pembayaran}
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </section>
                :
             <div></div>
           }

            <Footer/>
        </div>
    )
}