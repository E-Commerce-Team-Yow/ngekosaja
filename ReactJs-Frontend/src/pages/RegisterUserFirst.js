import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Form, Input, Select } from "usetheform";

export default function RegisterUserFirst(props) {
    const script = document.createElement("script");
    script.src = `../../js/validation.js`;
    script.async = true;
    document.body.appendChild(script);

    const search = useLocation().search;
    const role = new URLSearchParams(search).get('role');
    const linkLogin = "/loginUser?role="+role;
    var title = "Penyewa";

    if(role==2) title = "Pemilik";
    return (
        <div>
            <div className="register-page" >
                <div className="form-register">
                    <center><h2 className="mb-2">Register {title}</h2></center>
                    <Link to="/" className="mb-4 link-home">Home</Link>
                    <Form name="page1" {...props} id="quickForm" className="login-form mt-3 needs-validation" 
                    > 
                        <Input type="text" name="role" type="hidden" value={role}/>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <Input type="email" name="email" className="form-control" id="email" placeholder="Email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Password</label>
                            <Input type="password" name="password" className="form-control" id="password" placeholder="Password"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Konfirmasi Password</label>
                            <Input type="password" name="cpassword" className="form-control" id="cpassword" placeholder="Konfirmasi Pasword"
                            />
                        </div>
                        <button type="submit">Next Page</button>
                    </Form>
                </div>
            </div>  
        </div>
    );
}