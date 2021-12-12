// import React, {useEffect, useState} from 'react';
// import { useHistory, useLocation } from 'react-router';
// import { CREATE_USER } from '../graphql/mutation';
// import { useMutation } from '@apollo/client';
// import {NotificationContainer, NotificationManager} from 'react-notifications';
// // import Loading from '../Loading';
// import Source from './Source';
// import { Link } from 'react-router-dom';


// export default function RegisterUser() {
//     let history = useHistory();
//     //get variabel role
//     const search = useLocation().search;
//     const role = new URLSearchParams(search).get('role');
//     const linkLogin = "/loginUser?role="+role;
   
//     var title = "Penyewa";

//     if(role==2) title = "Pemilik";

//     //deklarasi variabel
//     const [formState, setFormState] = useState({
//         email: '',
//         password: '',
//         conPass : '',
//         role : role,
//     });

//      //prosessing login
//      const [register, data] = useMutation(CREATE_USER);
    
//      console.log(data);

//     //  useEffect(() => {
//     //      console.log(data);
//     //      if(!data.loading ){
//     //          if(data.data && data.data?.createUser != null){
//     //              window.location.replace("/loginUser");
//     //          }else if(data.data && data.data?.ceateUser == null){
//     //              NotificationManager.success('', "Ada yang salah", 2000);
//     //          }
//     //      }
//     //  }, [!data.loading])
 


//     return (
//         <div>


//         </div>
//     )
// }

import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import { useMultipleForm } from "usetheform";
import { CREATE_USER } from "../graphql/mutation";
import RegisterUserFirst from "./RegisterUserFirst";
import RegisterUserSecond from "./RegisterUserSecond";


export default function RegisterUser() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setPage] = useState(1);
  const nextPage = () => setPage((prev) => ++prev);
  const prevPage = () => setPage((prev) => --prev);

  const [getWizardState, wizard] = useMultipleForm();

  const [register, data] = useMutation(CREATE_USER);

  function OnSubmitWizard() {
      console.log(getWizardState())
      register({ variables: { email: getWizardState().email, password: getWizardState().password, 
        nama_depan: getWizardState().depan, nama_belakang: getWizardState().belakang, 
        no_tlp: getWizardState().telepon, 
        id_role: parseInt(getWizardState().role) }})
    }
    useEffect(() => {
      console.log(data);
      if(!data.loading ){
          if(data.data && data.data?.createUser != null){
              NotificationManager.success('', data.data?.createUser.message, 2000);
            if(data.data?.createUser.successfull){
              setTimeout(() => {
                window.location.replace(`/loginUser?role=${getWizardState().role}`);
              }, 2000); 
            }else{
              document.getElementById("btnSubmit").disabled = false;
              document.getElementById("btnSubmit").innerHTML = "Register";
            }
          }
      }
    }, [!data.loading])

  return (
   <div className="App">
     {currentPage=== 1 && (
       <RegisterUserFirst {...wizard} onSubmit={nextPage} />
     )}
     {currentPage=== 2 && (
       <RegisterUserSecond
         {...wizard}
         prevPage={prevPage}
         onSubmit={OnSubmitWizard}
       />
     )}
     <NotificationContainer/>
   </div>
  );
}

