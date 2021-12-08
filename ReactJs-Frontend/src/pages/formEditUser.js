import React, {useEffect, useState} from 'react';
import { useMutation } from '@apollo/client';
import { useHistory, useLocation } from 'react-router';
import { LOGIN_USER, UPDATE_USER } from '../graphql/mutation';
import { useCookies } from 'react-cookie';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Link } from 'react-router-dom';

export default function FormEditUser() { 
    const script = document.createElement("script");
    script.src = `../../js/validation.js`;
    script.async = true;
    document.body.appendChild(script);

    let history = useHistory();
    const [cookies, setCookie, removeCookie] = useCookies(['userLogin']);
	const [dataUser,setdataUser] = useState(null);
  
    const [formState, setFormState] = useState({
        nama_depan : '',
        nama_belakang : '',
        nik : '',
        no_tlp : '',
        no_rek : '',
        id : '',
    });
     
    //deklarasi edit
    const [edit_user, data] = useMutation(UPDATE_USER);
	//check data user
	useEffect(()=>{
		if(cookies.userLogin){
            
            setFormState({
                nama_depan : cookies.userLogin.nama_depan,
                nama_belakang : cookies.userLogin.nama_belakang,
                nik : cookies.userLogin.nik,
                no_rek : cookies.userLogin.no_rek,
                no_tlp : cookies.userLogin.no_tlp,
                id  : cookies.userLogin.id,
            });
			setdataUser(cookies.userLogin);
            console.log(cookies.userLogin);
		} else{
           window.location.replace("/");
        } 

	},[]);


    useEffect(() =>{
        if(!data.loading ){
            if(data.data && data.data?.updateUser != null){
                NotificationManager.success('', "Berhasil mengubah profil user", 2000);
                setCookie('userLogin', data.data?.updateUser, { expires: new Date(new Date().getTime() + 24 * 60 * 1000)});
                setTimeout(() => {
                    window.location.replace("/profile");
                }, 2000); 
            }
        }
    },[!data.loading])

    return(
        <div>
        {
            dataUser ? 
            <div className="modal fade" id="ModalEditUser" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header mb-5">
                            <h5 className="modal-title mr-5" id="exampleModalLabel">Edit My Profile</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <form id="quickForm" onSubmit={e => {
                                    e.preventDefault();
                                    console.log(formState);
                                        edit_user({ variables: { nama_depan : formState.nama_depan, nama_belakang : formState.nama_belakang, id : formState.id, no_tlp : formState.no_tlp, no_rek : formState.no_rek, nik : formState.nik }});
                                      
                                    }}>
                        <div className="modal-body mt-5 ">
                            <div className="container">
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label htmlFor="exampleInputPassword1">Nama Depan</label>
                                                <input type="text" name="depan" className="form-control" placeholder="Nama Depan" defaultValue={dataUser.nama_depan}  
                                                      onChange={(e) =>
                                                        setFormState({
                                                        ...formState,
                                                        nama_depan: e.target.value
                                                        })
                                                    }
                                                />
                                            </div>
                                            <div className="form-group col-6">
                                                <label htmlFor="exampleInputPassword1">Nama Belakang</label>
                                                <input type="text" name="belakang" className="form-control" placeholder="Nama Depan" defaultValue={dataUser.nama_belakang}
                                                    onChange={(e) =>
                                                        setFormState({
                                                        ...formState,
                                                        nama_belakang: e.target.value
                                                        })
                                                    }
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Re Type Old Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">New Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div> */}
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label htmlFor="exampleInputPassword1">NIK</label>
                                                <input type="text" name="nik" className="form-control" id="exampleInputPassword1" placeholder="NIK" defaultValue={dataUser.nik}
                                                    onChange={(e) =>
                                                        setFormState({
                                                        ...formState,
                                                        nik: e.target.value
                                                        })
                                                    }
                                                />
                                            </div>
                                            <div className="form-group col-6">
                                                <label htmlFor="exampleInputPassword1">No Telepon</label>
                                                <input type="text" name="telepon" className="form-control" id="exampleInputPassword1" placeholder="No Telepon" defaultValue={dataUser.no_tlp}
                                                    onChange={(e) =>
                                                        setFormState({
                                                        ...formState,
                                                        no_tlp: e.target.value
                                                        })
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="from-group">
                                            <label htmlFor="exampleInputPassword1">No Rekening</label>
                                            <input type="text" name="rekening" className="form-control" id="exampleInputPassword1" placeholder="No Rekening" defaultValue={dataUser.no_rek} 
                                                onChange={(e) =>
                                                    setFormState({
                                                    ...formState,
                                                    no_rek: e.target.value
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label htmlFor="exampleInputPassword1">Foto Profil</label>
                                                <input type="file" className="form-control" />
                                            </div>
                                            <div className="form-group col-6">
                                                <img />
                                            </div>
                                        </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" id="btnSubmit" className="btn btn-primary">Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>      
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        : <div></div>
        }
        <NotificationContainer/>
        </div>

    )

}