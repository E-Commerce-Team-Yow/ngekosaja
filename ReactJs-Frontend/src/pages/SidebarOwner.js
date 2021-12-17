import React, { useEffect, useState } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import Source from './Source';
import { useCookies } from 'react-cookie';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "568661146363-eo0s56tv59nsj9cfl416s7nvu7d2k9c9.apps.googleusercontent.com";


export default function SidebarOwner() {
	let history = useHistory();
	const [cookies, setCookie, removeCookie] = useCookies(['userLogin']);
	const [dataUser,setdataUser] = useState(null);
   

	//check data user
	useEffect(()=>{
		if(cookies.userLogin){
			setdataUser(cookies.userLogin);
		} else{
      window.location.replace("/loginUser");
    }

    
	},[]);

  const onSignoutSuccess = () => {
		removeCookie('userLogin');
  	window.location.href = "/loginUser";
	//	window.location.reload();
    };

	

    return (
      
        <div className="js">
            {
                dataUser?
                <nav id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <a href="#">NGEKOS</a>
            <div id="close-sidebar">
              <i className="fas fa-times" />
            </div>
          </div>
          <div className="sidebar-header">
            <div className="user-pic">
              <img className="img-responsive img-rounded" src={Source['profil']} alt="User picture" />
            </div>
            <div className="user-info">
              <span className="user-name">
                  {dataUser.nama_depan+" "+ dataUser.nama_belakang} 
              </span>
              <span className="user-role">{dataUser.role.nama}</span>
              <span className="user-status">
                <i className="fa fa-circle" />
                <span>Online</span>
              </span>
            </div>
          </div>
          <div className="sidebar-search">
            {/* <div>
              <div className="input-group">
                <input type="text" className="form-control search-menu" placeholder="Search..." />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fa fa-search" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div> */}
          </div>
          <div className="sidebar-menu">
            <ul>
              <li className="header-menu">
                <span>General</span>
              </li>
              <li className="sidebar-dropdown">
                <a href="#">
                  <i className="fas fa-chart-line" />
                  <span>Laporan</span>
                 
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                        <a href="/owner/LaporanRumahKos" >Laporan Rumah Kos</a>
                    </li>
                    
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown ">
                <a >
                  <i className="fas fa-house-user" />
                  <span>Rumah Kos</span>
                  {/* <span className="badge badge-pill badge-danger">3</span> */}
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <NavLink to="/owner/ListRumahKos" >List Rumah Kos</NavLink>
                    </li>
                    <li>
                      <NavLink to="/owner/ListKamarKos" >List Kamar Kos</NavLink>
                    </li>
                  </ul>
                </div>
              </li>
            
            </ul>
          </div>
          {/* sidebar-menu  */}
        </div>
        {/* sidebar-content  */}
        <div className="sidebar-footer">
          <a href="#">
          <NavLink to="/profile" >  <i className="fas fa-info-circle" /></NavLink>
           
          </a>
         
          <GoogleLogout
													render={renderProps => (
														<a onClick={renderProps.onClick} disabled={renderProps.disabled}> <i className="fa fa-power-off" /></a>
													)}
													clientId={clientId}
													buttonText="Log Out"
													onLogoutSuccess={onSignoutSuccess}
													>
													</GoogleLogout>
          
        </div>
      </nav>
      :
      <nav></nav>
            }
        
        </div>
                


     )
}