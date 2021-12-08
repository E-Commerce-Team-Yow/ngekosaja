import React, { useEffect, useState } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import Example from './SearchBar';
import { SearchBarFunc } from './SearchBarFunc';
import Source from './Source';
import { useCookies } from 'react-cookie';


export default function SidebarOwner() {
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
                  <span>Dashboard</span>
                  <span className="badge badge-pill badge-warning">New</span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#">Dashboard 1
                        <span className="badge badge-pill badge-success">Pro</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Dashboard 2</a>
                    </li>
                    <li>
                      <a href="#">Dashboard 3</a>
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
                      <a href="#">Peraturan Rumah Kos</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <a href="#">
                  <i className="fas fa-home" />
                  <span>Kamar Kos</span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#">Tambah Kamar Kos</a>
                    </li>
                    <li>
                      <a href="#">Lihat Rumah Kos</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <a href="#">
                  <i className="fa fa-chart-line" />
                  <span>Charts</span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#">Pie chart</a>
                    </li>
                    <li>
                      <a href="#">Line chart</a>
                    </li>
                    <li>
                      <a href="#">Bar chart</a>
                    </li>
                    <li>
                      <a href="#">Histogram</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <a href="#">
                  <i className="fa fa-globe" />
                  <span>Maps</span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#">Google maps</a>
                    </li>
                    <li>
                      <a href="#">Open street map</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="header-menu">
                <span>Extra</span>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-book" />
                  <span>Documentation</span>
                  <span className="badge badge-pill badge-primary">Beta</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-calendar" />
                  <span>Calendar</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-folder" />
                  <span>Examples</span>
                </a>
              </li>
            </ul>
          </div>
          {/* sidebar-menu  */}
        </div>
        {/* sidebar-content  */}
        <div className="sidebar-footer">
          <a href="#">
            <i className="fa fa-bell" />
            <span className="badge badge-pill badge-warning notification">3</span>
          </a>
          <a href="#">
            <i className="fa fa-envelope" />
            <span className="badge badge-pill badge-success notification">7</span>
          </a>
          <a href="#">
            <i className="fa fa-cog" />
            <span className="badge-sonar" />
          </a>
          <a href="#">
            <i className="fa fa-power-off" />
          </a>
        </div>
      </nav>
      :
      <nav></nav>
            }
        
        </div>
                


     )
}