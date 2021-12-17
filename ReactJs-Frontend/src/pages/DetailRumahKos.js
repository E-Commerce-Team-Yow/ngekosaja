import React, {useEffect, useState} from 'react';
import Footer from './Footer';
import SkeletonCard from './SkeletonCard';
import Navbar from './Navbar';
import Header from './Header';
// import Loading from '../Loading';
import Source from './Source';
import { Link, useRouteMatch } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_TESTIMONI_RUMAH_KOS, GET_AVG_TESTIMONI, GET_ONE_RUMAH_KOS } from '../graphql/queries';
import { useLocation } from 'react-router-dom';
import Loading from './Loading';
import { useCookies } from 'react-cookie';

export default function DetailRumahKos() {
    const search = useLocation().search;
    const id_rumah = new URLSearchParams(search).get('id');
    const [cookies, setCookie, removeCookie] = useCookies(['userLogin']);
	const [dataUser,setdataUser] = useState(null);

    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let tanggal = "";
    let avg = 0;
	//check data user
	useEffect(()=>{
		if(cookies.userLogin){
			setdataUser(cookies.userLogin);
		} else{
           window.location.replace("/");
        }

	},[]);
    const {loading, data: dataGetOneRumahKos, error} = useQuery(GET_ONE_RUMAH_KOS, {variables: {id : id_rumah}});
    const {loading: loadingGetAllTesti, data: dataGetAllTestimoni, error: errorGetAllTesti} = useQuery(GET_ALL_TESTIMONI_RUMAH_KOS, {variables: {id_rumah_kos : id_rumah}});
    const {loading: loadingGetAvg, data: dataGetAvg, error: errorGetAvg} = useQuery(GET_AVG_TESTIMONI, {variables: {id_rumah_kos : id_rumah}});
    if(dataUser){       
        const d = new Date(parseInt(dataUser.created_at));
        let name = month[d.getMonth()];
        tanggal = d.getDate() + " " + name + " " + d.getFullYear() + " "+ d.getHours() +":"+ d.getMinutes() +":"+ d.getSeconds();
    }
    if(loading){
        return (
            <Loading/>
        )
    }
    if(error){
        return "error.."
    }
    if(loadingGetAllTesti){
        return (
            <Loading/>
        )
    }
    if(errorGetAllTesti){
        return "error.."
    }
    if(loadingGetAvg){
        return (
            <Loading/>
        )
    }
    if(errorGetAvg){
        return "error.."
    }
    
    console.log(avg);
    console.log(dataGetAllTestimoni.getAllTestimoniRumahKos)
    return (
        <div className="js">
            {
                // loading ? <SkeletonCard/>
                // :
                <div >
                    <Header/>

                         {/* section breadcrumb */}
                        <section>
                            <div className="container">
                                <div className="col-lg-12 col-sm-12 mt-4">
                                    <ul className="breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li>{dataGetOneRumahKos.getOneRumahKos.nama}</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                       {
                           dataGetOneRumahKos.getOneRumahKos ?
                        
                            <section className="blog-single section">
                            
                            <div className="container">
                            <h1>{dataGetOneRumahKos.getOneRumahKos.nama}</h1>
                            <h4 className='gray'>{dataGetOneRumahKos.getOneRumahKos.alamat} , {dataGetOneRumahKos.getOneRumahKos.kota.nama}</h4>
                            <hr/>
                                <div className="row">
                                <div className="col-lg-8 col-12">
                                    <div className="blog-single-main">
                                    <div className="row">
                                        <div className="col-12">
                                        <div className="image">
                                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                    <img className="d-block w-100" src={Source['kamar_kos']} alt="First slide" />
                                                    </div>
                                                    <div className="carousel-item">
                                                    <img className="d-block w-100" src={Source['kamar_kos']} alt="Second slide" />
                                                    </div>
                                                    <div className="carousel-item">
                                                    <img className="d-block w-100" src={Source['kamar_kos']} alt="Third slide" />
                                                    </div>
                                                </div>
                                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </div>

                                        </div>
                                        <div className="blog-detail">
                                          
                                            <div className="blog-meta mt-4">
                                             <span className="author"><a href="#"><i className="fa fa-user" />By Admin</a><a href="#"><i className="fa fa-calendar" />{dataGetOneRumahKos.getOneRumahKos.created_at}</a><a href="#"><i className="fa fa-comments" />Testimoni ({dataGetAllTestimoni.getAllTestimoniRumahKos.length})</a><a href="#"><i className="fa fa-star" />Rating : ({dataGetAvg.getAverageTestimoni.average})</a></span>
                                            </div>
                                            <div className="content" dangerouslySetInnerHTML={{ __html: dataGetOneRumahKos.getOneRumahKos.keterangan }}>
                                            </div>
                                        </div>
                                       
                                        </div>
                                        <div className="col-12">
                                        <div className="comments">
                                            <h3 className="comment-title">Comments ({dataGetAllTestimoni.getAllTestimoniRumahKos.length})</h3>
                                            
                                            {
                                                dataGetAllTestimoni && (
                                                dataGetAllTestimoni.getAllTestimoniRumahKos.map(testi =>
                                                   <div key={testi.id}>
                                                       {
                                                        <div className="single-comment">
                                                        <img src={testi.user.foto ? testi.user.foto : Source['profil']} alt="#" />
                                                        <div className="content">
                                                            <h4>{testi.user.nama_depan}<span>{tanggal}</span></h4>
                                                            <p>{testi.isi}</p>
                                                            {/* <div className="button">
                                                            <a href="#" className="btn"><i className="fa fa-reply" aria-hidden="true" />Reply</a>
                                                            </div> */}
                                                        </div>
                                                        </div>
                                                       }
                                                   </div> 
                                                ))
                                            }
                                            {/* Single Comment */}
                                            {/* End Single Comment */}
                                        </div>									
                                        </div>											
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="main-sidebar">
                                   
                                  
                                    {/*/ End Single Widget */}
                                    {/* Single Widget */}
                                    

                                    <div className="single-widget recent-post">
                                        <h3 className="title mb-4">Kamar Kos</h3>
                                        {
                                                      (
                                                           dataGetOneRumahKos.getOneRumahKos.listingRumahKos.map(listing => 
                                                                <div>
                                                                    <Link to={`/DetailKamar?id=${listing.id}`} replace>
                                                                        <div className="card mb-1 card-room">
                                                                            <div className="row">
                                                                                <input type="hidden" name="hidid" value={listing.id} />
                                                                                <div className="col-5">
                                                                                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{borderRadius:100+'%'}}>
                                                                                        <div className="carousel-inner carousel-rounded">
                                                                                            <div className="carousel-item active">
                                                                                                <img className="d-block w-100" src={Source['room']} alt="First slide" />
                                                                                            </div>
                                                                                            <div className="carousel-item">
                                                                                                    <img className="d-block w-100" src={Source['room']} alt="Second slide" />
                                                                                            </div>
                                                                                            <div className="carousel-item">
                                                                                                <img className="d-block w-100" src={Source['room']} alt="Third slide" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                                                                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                                                            <span className="sr-only">Previous</span>
                                                                                        </a>
                                                                                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                                                                            <span className="carousel-control-next-icon" aria-hidden="true" />
                                                                                            <span className="sr-only">Next</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-7">
                                                                                    <div className="row">
                                                                                        <div className="col-8">
                                                                                            <h6>{listing.nama}</h6>
                                                                                        </div>
                                                                                        <div className="col-4 text-right">
                                                                                            <a href=""><i className="ti-map"> </i></a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-12">
                                                                                            Surabaya, Jawa Timur
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-12">
                                                                                            <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                                                        </div>
                                                                                    </div>
                                                                                   
                                                                                    <div className="row">
                                                                                        <div className="col-12 text-right">
                                                                                            <del>{listing.harga_bulanan}</del>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-12 text-right">
                                                                                            <span className="badge badge-disc-room mr-1">50%</span>
                                                                                            <b>Rp. {listing.harga_bulanan}</b>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <hr/>
                                                                    
                                                                    </Link>
                                                                </div>
                                                            )
                                                        )
                                                    }
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </section>
                       :
                       <div></div>
                       }
                    <Footer/>
                </div>
            }
        </div>
    )
}
