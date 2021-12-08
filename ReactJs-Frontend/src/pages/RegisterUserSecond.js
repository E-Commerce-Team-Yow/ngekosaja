import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Form, Input } from "usetheform";

export default function RegisterUserSecond({ prevPage, ...props }) {
    let history = useHistory();
    const script = document.createElement("script");
    script.src = `../../js/validation.js`;
    script.async = true;
    document.body.appendChild(script);
    //get variabel role
    const search = useLocation().search;
    const role = new URLSearchParams(search).get('role');
    const linkLogin = "/loginUser?role="+role;
   
    var title = "Penyewa";

    if(role==2) title = "Pemilik";

    //deklarasi variabel
    const [formState, setFormState] = useState({
        email: '',
        password: '',
        conPass : '',
        role : role,
    });

    //prosessing login
    //  const [register, data] = useMutation(CREATE_USER);
    
    //  console.log(data);

    //  useEffect(() => {
    //      console.log(data);
    //      if(!data.loading ){
    //          if(data.data && data.data?.createUser != null){
    //              window.location.replace("/loginUser");
    //          }else if(data.data && data.data?.ceateUser == null){
    //              NotificationManager.success('', "Ada yang salah", 2000);
    //          }
    //      }
    //  }, [!data.loading])
  return (
    // <Form name="page1" {...props}>
    //   <Input type="text" name="name" placeholder="Type your name..." />
    //   <Input type="text" name="lastname" placeholder="Type your last name..." />
    //   <button type="submit">Next Page</button>
    // </Form>

        <div className="js">
            {
                <div>
                    <div className="register-page" >
                        <div className="form-register">
                            <center><h2 className="mb-2">Register {title}</h2></center>
                            <Link to="/" className="mb-4 link-home">Home</Link>
                            <Form name="page2" {...props} id="quickForm" className="login-form mt-3 needs-validation" >
                                
                                <Input type="text" name="role" type="hidden" value={role}/>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Nama depan</label>
                                    <Input type="text" name="depan" className="form-control" id="depan" placeholder="Nama depan"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Nama belakang</label>
                                    <Input type="password" name="belakang" className="form-control" id="belakang" placeholder="Nama belakang"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Nomor telepon</label>
                                    <Input type="text" name="telepon" className="form-control" id="telepon" placeholder="Nomor telepon"
                                    />
                                </div>
                                <button type="submit" onClick={prevPage}>
                                    Previous Page
                                </button>
                                <button type="submit" id="btnSubmit">Submit</button>
                                {/* <button type="submit" id="load2">Submit</button> */}
                            </Form>
                        </div>
                    </div>  
                </div>
            }
        </div>
    );
}