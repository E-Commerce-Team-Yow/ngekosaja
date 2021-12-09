import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { SearchBar } from './SearchBar';
import Source from './Source';
import { useCookies } from 'react-cookie';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "568661146363-eo0s56tv59nsj9cfl416s7nvu7d2k9c9.apps.googleusercontent.com";

export default function Header() {
	let history = useHistory();
	const [cookies, setCookie, removeCookie] = useCookies(['userLogin']);
	const [dataUser,setdataUser] = useState(null);
	//check data user
	useEffect(()=>{
		if(cookies.userLogin){
			setdataUser(cookies.userLogin);
		} 
	},[]);

	const onSignoutSuccess = () => {
		removeCookie('userLogin');
		window.location.reload();
    };

	console.log(dataUser);

    return (
        <header className="header shop">
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-12">
                            <div className="top-left">
                                <ul className="list-main">
                                    <li><i className="ti-mobile"></i>Download App</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-12">
                            <div className="right-content">
                                <ul className="list-main">
                                    <li><i className="ti-info-alt"></i><a href="#">Tentang Ngekos</a></li>
                                    <li><i className="ti-check-box"></i> <Link to="/FAQ">Syarat dan Ketentuan</Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{/* =========================================================== */}
            <div className="middle-inner">
			<div className="container">
				<div className="row">
					<div className="col-lg-2 col-md-2 col-12">
						<div className="logo">
							<Link to="/" replace><img src={Source['logo']} alt="logo"/></Link>
						</div>
						<div className="search-top">
							<div className="top-search"><a href="#0"><i className="ti-bell"></i></a></div>
							<div className="search-top">
								<div className="search-form">
									<div className="row">
										<form action="/search">
											<input type="text" placeholder="Cari Kos Kos-an" name="search"/>
											<button  type="submit"><i className="ti-search"></i></button>
										</form>
									</div>
									<div className="row bg-white p-2">
										<div className="col-12">
											<center><a data-toggle="modal" className="btnLoginSmall" data-target="#exampleModal">MASUK</a></center>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-7 col-12">
						<div className="search-bar-top">
							<div className="search-bar">
								<SearchBar/>
									{/* <input name="search" placeholder="Masukkan alamat/nama jalan" type="search"/>
									<button className="btnn"><i className="ti-search"></i></button> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-1 col-12">
					{
						dataUser ? 
							<div className="right-bar" id="allHeaderRight">
							   <label className="dropdown">
								   <div className="dd-button">
									   Dropdown
								   </div>
   
								   <input name="" type="checkbox" className="dd-input" id="test" />
								   <ul className="dd-menu">
									   <li>Action</li>
									   <li>Another action</li>
									   <li>Something else here</li>
									   <li className="divider"></li>
									   <li>
										   <a href="http://rane.io">Link to Rane.io</a>
									   </li>
								   </ul>
   
								</label>
							   <span className="single-bar ml-3">
								   <a href="#" className="single-icon">Booking Kos</a>
							   </span>
							 
							   <span className="single-bar ml-3">
									<label className="dropdown">
										{dataUser.googleId ?
										<img src={dataUser.imageUrl} alt="Profil Pict" className="img-round"/>
										
										:
										<img src={Source['profil']} alt="Profil Pict" className="img-round"/>
										
										}
										<input name="" type="checkbox" className="dd-input" id="test" />
   
										<ul className="dd-menu">
										
											<li className="disable"><h5>Hello, {dataUser.googleId ? dataUser.givenName : dataUser.nama_depan}</h5></li>
											<li className="divider"></li> 
											<li><a href="/profile">My Profile</a></li>
											{
												dataUser.googleId ?
											<li>
													<GoogleLogout
														clientId={clientId}
														buttonText="Sign Out"
														onLogoutSuccess={onSignoutSuccess}
													>
													</GoogleLogout>
											</li>
											:
											<li>
												<a href=""  onClick={(e) =>
													{ 
														removeCookie('userLogin');
													}
												}>Log Out</a>
											</li>
											}
										</ul>
									
									</label>
								</span>
							  
						   </div>
							   : 
						<div className="right-bar top-20" id="allHeaderRight">
							<label className="dropdown">
								<div className="dd-button">
									Dropdown
								</div>

								<input name="" type="checkbox" className="dd-input" id="test" />
								<ul className="dd-menu">
									<li>Action</li>
									<li>Another action</li>
									<li>Something else here</li>
									<li className="divider"></li>
									<li>
										<a href="http://rane.io">Link to Rane.io</a>
									</li>
								</ul>

								</label>
							<span className="single-bar ml-3">
								<a href="#" className="single-icon">Booking Kos</a>
							</span>
                          
							   <span className="single-bar ml-3">
									<button className="btn btn-info" data-toggle="modal" data-target="#exampleModal">Masuk</button>
								</span>
						</div>
					}
					</div>			
				</div>
			</div>
		</div>

		

		<div className="modal  fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className="modal-dialog" role="document">
				<div className="modal-content rounded-corner modal-login">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body mt-5">
						<h4 className="mb-4">Login Sebagai</h4>
						<button className="rounded-pill-button w-75 mb-2 " onClick={ e =>{
                                e.preventDefault();               window.location.replace("/loginUser?role=1")
                            }}><i className="fas fa-door-open  mr-2"></i>Penyewa Kos</button>
						<button className="rounded-pill-button w-75 mb-2" onClick={ e =>{
                                e.preventDefault();               window.location.replace("/loginUser?role=2")
                            }}><i className="fas fa-home mr-2 "></i>Pemilik Kos</button>
					</div>
				</div>
			</div>
		</div>

        </header>


		
    )
}
