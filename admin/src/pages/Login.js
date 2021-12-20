import { useMutation } from '@apollo/client';
import React, { useState, useEffect, useContext }  from 'react'
import { Redirect, useHistory } from 'react-router';
import { LOGIN_USER } from '../graphql/mutation';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Loading from '../Loading';
import { useCookies } from 'react-cookie';

const Login = () => {
    const [cookies, setCookie] = useCookies(["name"]);
    let history = useHistory();
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    });
    
    const [login, data] = useMutation(LOGIN_USER);
    // const {loading, error, data } = useMutation(LOGIN_USER, {
        //     variables: { email: formState.email, password: formState.password },
        // });
        
        // if(loading){
            //     return <Loading/>
            // }
            // if(error){
                //     return "Error..."
                // }
    useEffect(() => {
        if(cookies.name) return <Redirect to="/admin/userTable" />
    }, [])


    useEffect(() => {
        console.log(data);
        if(!data.loading ){
            if(data.data && data.data?.loginUser != null){
                if(data.data?.loginUser.role.id == 3){
                    NotificationManager.success('', "Berhasil login", 2000);
                    setTimeout(() => {
                        setCookie("name", "admin", { expires: new Date(new Date().getTime() + 24 * 60 * 1000), path:"/admin"});
                        window.location.replace("/admin/userTable")
                    }, 1000);
                }else{
                    setTimeout(() => {
                        NotificationManager.success('', "Not Authorized", 2000);
                    }, 2000);
                }
            }else if(data.data && data.data?.loginUser == null){
                NotificationManager.success('', "User tidak ditemukan", 2000);
            }
        }
    }, [!data.loading])

    
    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <a href=""><b>Admin</b>Ngekosaja</a>
                </div>
                {/* /.login-logo */}
                <form
                  onSubmit={e => {
                    e.preventDefault();
                        login({ variables: { email: formState.email, password: formState.password }});
                    }}
                    >
                <div className="card">
                    <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                        <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Username"
                            defaultValue={formState.email}
                            onChange={(e) =>
                                setFormState({
                                ...formState,
                                email: e.target.value
                                })
                            }
                        />
                        <div className="input-group-append">
                            <div className="input-group-text">
                            <span className="fas fa-envelope" />
                            </div>
                        </div>
                        </div>
                        <div className="input-group mb-3">
                        <input type="password" className="form-control" placeholder="Password"
                            defaultValue={formState.password}
                            onChange={(e) =>
                                setFormState({
                                ...formState,
                                password: e.target.value
                                })
                            }
                        />
                        <div className="input-group-append">
                            <div className="input-group-text">
                            <span className="fas fa-lock" />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block"
                                // disabled={loading ? true : false}
                                >Sign In</button>
                        </div>
                        </div>
                    </div>
                </div>
                </form>
            </div>
            <NotificationContainer/>
            {/* /.login-box */}
        </div>

    )
}

export default Login
