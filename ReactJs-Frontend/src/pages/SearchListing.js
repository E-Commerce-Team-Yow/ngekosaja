import React, {useEffect, useState} from 'react';
import Footer from './Footer';
import SkeletonCard from './SkeletonCard';
import Navbar from './Navbar';
import Header from './Header';
import Source from './Source';
import { useLocation } from 'react-router-dom';

export default function SearchListing(){
    const search = useLocation().search;
    const query = new URLSearchParams(search).get('query');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => {
            clearTimeout(timing);
        }
    }, []);

    return(
        <div className="js">
            {
                // loading ? <SkeletonCard/>
                // :
                <div >
                    <Header/>
                    {/* Kos-di-kota */}
                    <section>
                        <div className="container text-center mt-4 ">
                            <h2>Hasil Pencarian untuk "{query}"</h2>
                            <hr/>
                        </div>
                        <div className="container">
                            <div className="box-program">
                                <a href="product-by-category.php">
                                    <div className="list-program" style={{backgroundImage:`url(${Source.jakarta})`}}>
                                    <div className="overlay-program" />
                                    <h2>
                                        Jakarta
                                    </h2>
                                    </div>
                                </a>
                                <a href="product-by-category.php">
                                    <div className="list-program" style={{backgroundImage: `url(${Source.bali})`}}>
                                    <div className="overlay-program" />
                                    <h2>
                                        Bali
                                    </h2>
                                    </div>
                                </a>
                                <a href="product-by-category.php">
                                    <div className="list-program" style={{backgroundImage: `url(${Source.jogja})`}}>
                                    <div className="overlay-program" />
                                    <h2>
                                        Jogja
                                    </h2>
                                    </div>
                                </a>
                                <a href="product-by-category.php">
                                    <div className="list-program" style={{backgroundImage: `url(${Source.semarang})`}}>
                                    <div className="overlay-program" />
                                    <h2>
                                        Semarang
                                    </h2>
                                    </div>
                                </a>
                            
                                <div className="clearer" />
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container mb-5">
                            <div className="box-program">
                                <a href="product-by-category.php">
                                    <div className="list-program" style={{backgroundImage:`url(${Source.jakarta})`}}>
                                    <div className="overlay-program" />
                                    <h2>
                                        Jakarta
                                    </h2>
                                    </div>
                                </a>
                                <a href="product-by-category.php">
                                    <div className="list-program" style={{backgroundImage: `url(${Source.bali})`}}>
                                    <div className="overlay-program" />
                                    <h2>
                                        Bali
                                    </h2>
                                    </div>
                                </a>
                                <a href="product-by-category.php">
                                    <div className="list-program" style={{backgroundImage: `url(${Source.jogja})`}}>
                                    <div className="overlay-program" />
                                    <h2>
                                        Jogja
                                    </h2>
                                    </div>
                                </a>
                                <a href="product-by-category.php">
                                    <div className="list-program" style={{backgroundImage: `url(${Source.semarang})`}}>
                                    <div className="overlay-program" />
                                    <h2>
                                        Semarang
                                    </h2>
                                    </div>
                                </a>
                            
                                <div className="clearer" />
                            </div>
                        </div>
                    </section>
                     {/* end-Kos-di-kota */}

                     <section>
                         <div className="container ">
                                <div className="page-flash-deal filter-by">
                                    <div className="left-page-flash-deal mt-2">
                                        <h1 className="h1-program">
                                        <i className="fas fa-filter "></i>  Filter
                                        </h1>
                                    </div>
                                    <div className="line-page-flash-deal mt-2" />
                                    <div className="right-page-flash-deal ">
                                        Urut Berdasarkan :
                                        <label className="dropdown">
								            <div className="dd-button">
                                             Semua Kota
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
                                        
                                    </div>
                                    <div className="right-page-flash-deal mb-5">
                                        <label className="dropdown">
								            <div className="dd-button">
                                              Dari Teratas
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
                                        
                                    </div>
                                    <div className="clearer" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="row">
                                            <div className="col-12">
                                                {/* Kumpulan kamar */}
                                                {/* 1 card kamar */}
                                                <div className="card mb-1 card-room">
                                                         <div className="row">
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
                                                                        <h6>Kecamatan Grogol</h6>
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
                                                                    <div className="col-12">
                                                                        <i className="ti-rss-alt m-2"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 text-right">
                                                                        <del>Rp5.000.000</del>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 text-right">
                                                                        <span className="badge badge-disc-room mr-1">50%</span>
                                                                        <b>Rp2.500.000</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                         </div>
                                                </div>
                                                <hr/>
                                               {/* end-1 card kamar */}
                                                {/* 1 card kamar */}
                                                <div className="card mb-1 card-room">
                                                         <div className="row">
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
                                                                        <h6>Kecamatan Grogol</h6>
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
                                                                    <div className="col-12">
                                                                        <i className="ti-rss-alt m-2"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 text-right">
                                                                        <del>Rp5.000.000</del>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 text-right">
                                                                        <span className="badge badge-disc-room mr-1">50%</span>
                                                                        <b>Rp2.500.000</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                         </div>
                                                </div>
                                                <hr/>
                                               {/* end-1 card kamar */}
                                                {/* 1 card kamar */}
                                                <div className="card mb-1 card-room">
                                                         <div className="row">
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
                                                                        <h6>Kecamatan Grogol</h6>
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
                                                                    <div className="col-12">
                                                                        <i className="ti-rss-alt m-2"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 text-right">
                                                                        <del>Rp5.000.000</del>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 text-right">
                                                                        <span className="badge badge-disc-room mr-1">50%</span>
                                                                        <b>Rp2.500.000</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                         </div>
                                                </div>
                                                <hr/>
                                               {/* end-1 card kamar */}
                                                {/* 1 card kamar */}
                                                <div className="card mb-1 card-room">
                                                         <div className="row">
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
                                                                        <h6>Kecamatan Grogol</h6>
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
                                                                    <div className="col-12">
                                                                        <i className="ti-rss-alt m-2"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 text-right">
                                                                        <del>Rp5.000.000</del>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 text-right">
                                                                        <span className="badge badge-disc-room mr-1">50%</span>
                                                                        <b>Rp2.500.000</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                         </div>
                                                </div>
                                                <hr/>
                                               {/* end-1 card kamar */}
                                                {/* 1 card kamar */}
                                                <div className="card mb-1 card-room">
                                                         <div className="row">
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
                                                                        <h6>Kecamatan Grogol</h6>
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
                                                                    <div className="col-12">
                                                                        <i className="ti-rss-alt m-2"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 text-right">
                                                                        <del>Rp5.000.000</del>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 text-right">
                                                                        <span className="badge badge-disc-room mr-1">50%</span>
                                                                        <b>Rp2.500.000</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                         </div>
                                                </div>
                                                <hr/>
                                               {/* end-1 card kamar */}
                                                {/* 1 card kamar */}
                                                <div className="card mb-1 card-room">
                                                         <div className="row">
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
                                                                        <h6>Kecamatan Grogol</h6>
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
                                                                    <div className="col-12">
                                                                        <i className="ti-rss-alt m-2"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 text-right">
                                                                        <del>Rp5.000.000</del>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 text-right">
                                                                        <span className="badge badge-disc-room mr-1">50%</span>
                                                                        <b>Rp2.500.000</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                         </div>
                                                </div>
                                                <hr/>
                                               {/* end-1 card kamar */}
                                                {/* 1 card kamar */}
                                                <div className="card mb-1 card-room">
                                                         <div className="row">
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
                                                                        <h6>Kecamatan Grogol</h6>
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
                                                                    <div className="col-12">
                                                                        <i className="ti-rss-alt m-2"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 text-right">
                                                                        <del>Rp5.000.000</del>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 text-right">
                                                                        <span className="badge badge-disc-room mr-1">50%</span>
                                                                        <b>Rp2.500.000</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                         </div>
                                                </div>
                                                <hr/>
                                               {/* end-1 card kamar */}
                                                {/* 1 card kamar */}
                                                <div className="card mb-1 card-room">
                                                         <div className="row">
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
                                                                        <h6>Kecamatan Grogol</h6>
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
                                                                    <div className="col-12">
                                                                        <i className="ti-rss-alt m-2"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 text-right">
                                                                        <del>Rp5.000.000</del>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 text-right">
                                                                        <span className="badge badge-disc-room mr-1">50%</span>
                                                                        <b>Rp2.500.000</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                         </div>
                                                </div>
                                                <hr/>
                                               {/* end-1 card kamar */}
                                                
                                                
                                               <button className="btn-show-more mt-3 w-100"><i className="fas fa-plus "></i> tampilkan lebih banyak lagi</button>
                                                {/* end-kumpulan kamar */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 small-hide mb-5">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.683728838511!2d107.6198273144352!3d-6.928355569741015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e87ffb3736a5%3A0x1fa0782bad367c26!2sWebhozz+Bandung!5e0!3m2!1sid!2sid!4v1512984270823" width="100%" height="100%" frameBorder="0" style={{border: '0'}} allowFullScreen />

                                    </div>
                                </div>
                         </div>
                     </section>

                    <Footer />
                </div>
            }
        </div>
    )
}