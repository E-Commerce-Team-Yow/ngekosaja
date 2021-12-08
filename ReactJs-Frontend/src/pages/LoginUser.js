import React, {useEffect, useState} from 'react';
import { useMutation } from '@apollo/client';
import { useLocation } from 'react-router';
import { LOGIN_USER } from '../graphql/mutation';
import { useCookies } from 'react-cookie';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Link } from 'react-router-dom';
import Loading from './Loading';


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
    const [cookies, setCookie] = useCookies(['userLogin']);
    
    useEffect(() => {
        console.log(data);
        if(!data.loading ){
            if(data.data && data.data?.loginUser != null){
                //set user login
                NotificationManager.success('', "Berhasil login", 2000);
                setTimeout(() => {
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
            }
        }
    }, [!data.loading])

    return (
        <div className="js">
            <div className="login-page" >
                <div className="form-login">
                    <center><h2 className="mb-2">Login {title}</h2></center>
                    <Link to="/" className="mb-4 link-home">Home</Link>
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
                            <button type="submit">Submit</button>
                            <p className="message">Not registered? <Link to={linkRegister} >Create an account</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <NotificationContainer/>
        </div>
    )
}