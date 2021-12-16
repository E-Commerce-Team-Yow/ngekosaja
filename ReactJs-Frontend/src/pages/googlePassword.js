import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Form, Input } from "usetheform";
import PasswordStrengthBar from 'react-password-strength-bar';
import { UPDATE_PASSWORD } from "../graphql/mutation";
import { useMutation } from "@apollo/client";
import { useCookies } from "react-cookie";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import { NotificationManager } from "react-notifications";

export default function GooglePassword() {
    const script = document.createElement("script");
    script.src = `../../js/validation.js`;
    script.async = true;
    document.body.appendChild(script);
    //get variabel role
    const search = useLocation().search;
    const role = new URLSearchParams(search).get('role');
    const linkLogin = "/createPassword?role="+role;

    const [cookies, setCookie, removeCookie] = useCookies(['userLogin']);
    //deklarasi variabel
    const [formState, setFormState] = useState({
        password: '',
        cpassword: ''
    });

    const [password, data] = useMutation(UPDATE_PASSWORD);
    useEffect(() => {
        if(!data.loading){
            if(data.data && data.data?.updatePassword != null){
                setTimeout(() => {
                    NotificationManager.success('', "Berhasil membuat password", 2000);  
                    if(cookies.userLogin.role.id == 2){
                        window.location.replace("/owner");
                    }else{
                        window.location.replace("/");
                    }
                },2000);
            }else if(data.data && data.data?.updatePassword == null){
                NotificationManager.error('', "Gagal membuat password", 2000);
                document.getElementById("btnSubmit").disabled = false;
                document.getElementById("btnSubmit").innerHTML = "Login";
            }
        }
    }, [!data.loading])
    console.log(cookies);
  return (
        <div className="js">
            {
                <div>
                    <div className="login-page" >
                        <div className="form-login">
                            <center><h2 className="mb-2">Buat Password</h2></center>
                            <form id="quickForm"
                                onSubmit={e => {
                                e.preventDefault();
                                    password({ variables: { id: cookies.userLogin.id, password: formState.password }});
                                }}
                            >
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" name="password" className="form-control" id="password" placeholder="Password" 
                                            defaultValue={formState.password}
                                            onChange={(e) =>
                                                setFormState({
                                                ...formState,
                                                password: e.target.value
                                                })
                                            } 
                                        />
                                        <PasswordStrengthBar password={formState.password} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Konfirmasi Password</label>
                                        <input type="password" name="cpassword" className="form-control" id="cpassword" placeholder="Konfirmasi Password" 
                                            defaultValue={formState.cpassword}
                                            onChange={(e) =>
                                                setFormState({
                                                ...formState,
                                                cpassword: e.target.value
                                                })
                                            } 
                                        />
                                    </div>   
                                </div>
                                {/* /.card-body */}
                                <div className="card-footer">
                                    <button type="submit" id="btnSubmit">Masuk</button>
                                </div>
                                <div>
                                </div>
                            </form>
                        </div>
                    </div>  
                </div>
            }
            <NotificationContainer/>
        </div>
    );
}