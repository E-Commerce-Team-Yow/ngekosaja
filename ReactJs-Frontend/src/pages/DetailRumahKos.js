import React, {useEffect, useState} from 'react';
import Footer from './Footer';
import SkeletonCard from './SkeletonCard';
import Navbar from './Navbar';
import Header from './Header';
// import Loading from '../Loading';
import Source from './Source';
import { Link, useRouteMatch } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { GET_LAST_RUMAH_KOS, GET_ONE_RUMAH_KOS } from '../graphql/queries';
import { useLocation } from 'react-router-dom';

export default function DetailRumahKos() {
  

    const search = useLocation().search;
    const id_rumah = new URLSearchParams(search).get('id');
    let { path, url } = useRouteMatch();

    const {loading, data: dataGetOneRumahKos, error} = useQuery(GET_ONE_RUMAH_KOS, {variables: {id : id_rumah}});
   if(loading){
       return (
                <div className="preloader">
                    <div className="preloader-inner">
                        <div className="preloader-icon">
                            <span />
                            <span />
                        </div>
                    </div>
                </div>

            )
   }

   if(error){
       return "error.."
   }
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
                                             <span className="author"><a href="#"><i className="fa fa-user" />By Admin</a><a href="#"><i className="fa fa-calendar" />{dataGetOneRumahKos.getOneRumahKos.created_at}</a><a href="#"><i className="fa fa-comments" />Testimony (5)</a><a href="#"><i className="fa fa-star" />Rating : (5)</a></span>
                                            </div>
                                            <div className="content" dangerouslySetInnerHTML={{ __html: dataGetOneRumahKos.getOneRumahKos.keterangan }}>
                                            </div>
                                        </div>
                                       
                                        </div>
                                        <div className="col-12">
                                        <div className="comments">
                                            <h3 className="comment-title">Comments (3)</h3>
                                            {/* Single Comment */}
                                            <div className="single-comment">
                                            <img src="https://via.placeholder.com/80x80" alt="#" />
                                            <div className="content">
                                                <h4>Alisa harm <span>At 8:59 pm On Feb 28, 2018</span></h4>
                                                <p>Enthusiastically leverage existing premium quality vectors with enterprise-wide innovation collaboration Phosfluorescently leverage others enterprisee  Phosfluorescently leverage.</p>
                                                <div className="button">
                                                <a href="#" className="btn"><i className="fa fa-reply" aria-hidden="true" />Reply</a>
                                                </div>
                                            </div>
                                            </div>
                                            {/* End Single Comment */}
                                            {/* Single Comment */}
                                            <div className="single-comment left">
                                            <img src="https://via.placeholder.com/80x80" alt="#" />
                                            <div className="content">
                                                <h4>john deo <span>Feb 28, 2018 at 8:59 pm</span></h4>
                                                <p>Enthusiastically leverage existing premium quality vectors with enterprise-wide innovation collaboration Phosfluorescently leverage others enterprisee  Phosfluorescently leverage.</p>
                                                <div className="button">
                                                <a href="#" className="btn"><i className="fa fa-reply" aria-hidden="true" />Reply</a>
                                                </div>
                                            </div>
                                            </div>
                                            {/* End Single Comment */}
                                            {/* Single Comment */}
                                            <div className="single-comment">
                                            <img src="https://via.placeholder.com/80x80" alt="#" />
                                            <div className="content">
                                                <h4>megan mart <span>Feb 28, 2018 at 8:59 pm</span></h4>
                                                <p>Enthusiastically leverage existing premium quality vectors with enterprise-wide innovation collaboration Phosfluorescently leverage others enterprisee  Phosfluorescently leverage.</p>
                                                <div className="button">
                                                <a href="#" className="btn"><i className="fa fa-reply" aria-hidden="true" />Reply</a>
                                                </div>
                                            </div>
                                            </div>
                                            {/* End Single Comment */}
                                        </div>									
                                        </div>											
                                        <div className="col-12">			
                                        <div className="reply">
                                            <div className="reply-head">
                                            <h2 className="reply-title">Leave a Comment</h2>
                                            {/* Comment Form */}
                                            <form className="form" action="#">
                                                <div className="row">
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="form-group">
                                                    <label>Your Name<span>*</span></label>
                                                    <input type="text" name="name" placeholder required="required" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="form-group">
                                                    <label>Your Email<span>*</span></label>
                                                    <input type="email" name="email" placeholder required="required" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label>Your Message<span>*</span></label>
                                                    <textarea name="message" placeholder defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group button">
                                                    <button type="submit" className="btn">Post comment</button>
                                                    </div>
                                                </div>
                                                </div>
                                            </form>
                                            {/* End Comment Form */}
                                            </div>
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
