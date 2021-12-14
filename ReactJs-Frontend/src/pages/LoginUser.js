import React, {useEffect, useState} from 'react';
import { useMutation } from '@apollo/client';
import { useLocation } from 'react-router';
import { CREATE_USER, LOGIN_USER } from '../graphql/mutation';
import { useCookies } from 'react-cookie';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { GoogleLogin } from 'react-google-login';

const clientId = "568661146363-eo0s56tv59nsj9cfl416s7nvu7d2k9c9.apps.googleusercontent.com";

export default function LoginUser() {
    const script = document.createElement("script");
    script.src = `../../js/validation.js`;
    script.async = true;
    document.body.appendChild(script);
    //deklarasi variabel
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    });
   
    //get variabel role
    const search = useLocation().search;
    const role = new URLSearchParams(search).get('role');
    const linkRegister = "/registerUser?role="+role;
   
    var title = "Penyewa";

    if(role==2) title = "Pemilik";

   
    //prosessing login
    const [login, data] = useMutation(LOGIN_USER);
    const [register, data2] = useMutation(CREATE_USER);
    const [cookies, setCookie] = useCookies(['userLogin']);
    
    useEffect(() => {
        if(!data.loading ){
            if(data.data && data.data?.loginUser != null){
                //set user login
                NotificationManager.success('', "Berhasil login", 2000);
                setTimeout(() => {
                    console.log(data);
                    setCookie('userLogin', data.data.loginUser, { expires: new Date(new Date().getTime() + 24 * 60 * 1000)});
                    window.location.replace("/admin/userTable")
                    if(data.data.loginUser.role.id == 2){
                        window.location.replace("/owner");
                    }else{
                        window.location.replace("/");
                    }
                }, 2000);
            }else if(data.data && data.data?.loginUser == null){
                NotificationManager.error('', "User tidak ditemukan", 2000);
                document.getElementById("btnSubmit").disabled = false;
                document.getElementById("btnSubmit").innerHTML = "Login";
            }
        }
    }, [!data.loading])

    const [showloginButton, setShowloginButton] = useState(true);

    const onLoginSuccess = (res) => {
        register({ variables: { email: res.profileObj.email, password: "", 
            nama_depan: res.profileObj.givenName, nama_belakang: res.profileObj.familyName, 
            no_tlp: "", 
            id_role: parseInt(role) }})
        login({ variables: { email: res.profileObj.email, password: "" }});
        setShowloginButton(false);
        console.log(res);
    };
    const onLoginFailure = (res) => {
        NotificationManager.error('', "Gagal login", 2000);
        console.log('Login Failed:', res);
    };

    return (
        <div className="js">
            <div className="login-page" >
                <div className="form-login">
                    <center><h2 className="mb-2">Login {title}</h2></center>
                    <Link to="/" className="mb-4 link-home m-1"><button className="w-25"><i class="fas fa-home"></i></button></Link>
                    <form id="quickForm"
                        onSubmit={e => {
                        e.preventDefault();
                            login({ variables: { email: formState.email, password: formState.password }});
                        }}
                    >
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" name="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"
                                    defaultValue={formState.email}
                                    onChange={(e) =>
                                        setFormState({
                                        ...formState,
                                        email: e.target.value
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
                                    defaultValue={formState.password}
                                    onChange={(e) =>
                                        setFormState({
                                        ...formState,
                                        password: e.target.value
                                        })
                                    } 
                                />
                            </div>   
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer">
                            <button type="submit" id="btnSubmit">Masuk</button>
                            <p className="message mb-2">-------------- ATAU --------------</p>
                            { showloginButton ?
                                <GoogleLogin
                                render={renderProps => (
                                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}><i class="fab fa-google"></i></button>
                                )}
                                clientId={clientId}
                                buttonText="Sign In"
                                onSuccess={onLoginSuccess}
                                onFailure={onLoginFailure}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                                ></GoogleLogin> : null}
                            <p className="message">Belum punya akun?<Link to={linkRegister}> Daftar</Link></p>
                        </div>
                        <div>
                        </div>
                    </form>
                </div>
            </div>
            <NotificationContainer/>
        </div>
    )
}