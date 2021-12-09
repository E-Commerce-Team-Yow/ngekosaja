import React, { useEffect, useState } from 'react'
import { HashRouter, Link, useHistory,  Route } from 'react-router-dom'
import Source from './Source';
import { useCookies } from 'react-cookie';
import SidebarOwner from './SidebarOwner';
import ListRumahKos from './pemilik/rumahKos/listRumahKos';

export default function DashboardOwner() {
	let history = useHistory();
	const [cookies, setCookie, removeCookie] = useCookies(['userLogin']);
	const [dataUser,setdataUser] = useState(null);
   

	//check data user
	useEffect(()=>{
		if(cookies.userLogin){
			setdataUser(cookies.userLogin);
		} 
	},[]);

	

    return (
      
      
       <div className="page-wrapper chiller-theme toggled">
          <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
             <i className="fas fa-bars" />
          </a>
          <SidebarOwner/>
          {/* sidebar-wrapper  */}
          <main className="page-content">
            <div className="container">
                <Route exact path="/owner/listRumahKos" component={ListRumahKos}/>
            </div>
          </main>
        </div>

     
		
       
    )
}