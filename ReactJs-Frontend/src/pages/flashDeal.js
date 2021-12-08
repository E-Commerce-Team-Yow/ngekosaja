import React, {useEffect, useState} from 'react';
import Footer from './Footer';
import SkeletonCard from './SkeletonCard';
import Navbar from './Navbar';
import Header from './Header';
import Source from './Source';


export default function FlashDeal(){
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
        setLoading(false);
        }, 1000);
        return () => clearTimeout(timing);
    }, []);

    return(
        <div className="js">
            {
                // loading ? <SkeletonCard/>
                // :
                <div >
                    <Header/>
                    {/* carousel */}
                    <section>
                        <div className="container p4 mb-4">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active " />
                                    <li data-target="#carouselExampleIndicators" data-slide-to={1}  />
                                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                </ol>
                                <div className="carousel-inner carousel-rounded ">
                                    <div className="carousel-item  active">
                                        <img className="d-block w-100" src={Source["banner"]} alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={Source["banner"]} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={Source["banner"]} alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon round bg-black" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon round bg-black" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* end-carousel */}

                    {/* section waktu */}
                    <section>
                        <div className="container mt-2 mb-4 program-waktu" >
                            <div className="box-program ">
                                 <a href="product-by-category.php">
                                    <div className="list-program " style={{height:'120px'}} >
                                    <div className="overlay-program" />
                                        <div className="txt">
                                            <h6>08:00</h6>
                                            <h6>22 July 2021</h6>
                                        </div>
                                        
                                    </div>
                                </a>
                                 <a href="product-by-category.php">
                                    <div className="list-program" style={{height:'120px'}} >
                                    <div className="overlay-program" />
                                        <div className="txt">
                                            <h6>08:00</h6>
                                            <h6>22 July 2021</h6>
                                        </div>
                                        
                                    </div>
                                </a>
                                 <a href="product-by-category.php">
                                    <div className="list-program" style={{height:'120px'}} >
                                    <div className="overlay-program" />
                                        <div className="txt">
                                            <h6>08:00</h6>
                                            <h6>22 July 2021</h6>
                                        </div>
                                        
                                    </div>
                                </a>
                                 <a href="product-by-category.php">
                                    <div className="list-program " style={{height:'120px'}} >
                                    <div className="overlay-program" />
                                        <div className="txt">
                                            <h6>08:00</h6>
                                            <h6>22 July 2021</h6>
                                        </div>
                                        
                                    </div>
                                </a>
                                
                            </div>
                        </div>
                    </section>
                    {/* end-section-waktu */}


                    
                  {/* section flash-sale */}
                  <section>
                        <div className="box-flash-deal mt-4 ">
                            <div className="container">
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
                                    <div className="right-page-flash-deal ">
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
                                <div className="box-products">
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                   <a href="detail-product-flash-deal.php">
                                        <div className="list-products">
                                            <div className="cover-list-products">
                                                <div className="position-list-products">
                                                    <img className="img-list-products" src={Source.bedroom} />
                                                </div>
                                            </div>
                                            <div className="content-products">
                                                <h2>
                                                    Kos Leo 
                                                </h2>
                                                <h4>
                                                    jl Yang Penting Selamat - Jawa timur
                                                </h4>    
                                                <div className="row">
                                                    <div className="col-12">
                                                         <span className="badge badge-secondary mr-1">1456 Transaksi</span>
                                                         <span className="badge badge-secondary">4 ulasan</span>
                                                    </div>
                                                </div>                                           
                                                <div className="price-products">
                                                    <div className="left-price-products">
                                                        50%
                                                    </div>
                                                    <div className="right-price-products">
                                                         <del>Rp5.000.000</del>
                                                        <div className="info-price-products">Rp2.500.000</div>
                                                    </div>
                                                    <div className="clearer" />
                                                </div>
                                            </div>
                                            <i className="ti-rss-alt m-2"></i>
                                            <div className="clearer" />
                                        </div>
                                    </a>
                                  
                                   
                                    <div className="clearer" />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end-flash-deal */}

                    {/* navigation */}
                    <section>
                        <div className="container mb-4">
                             <div classNmae="text-center">
                                <nav data-pagination>
                                    <a href="#" disabled><i className="ion-chevron-left" /></a>
                                        <ul>
                                            <li className="current"><a href="#1">1</a>
                                            </li><li><a href="#2">2</a>
                                            </li><li><a href="#3">3</a>
                                            </li><li><a href="#4">4</a>
                                            </li><li><a href="#5">5</a>
                                            </li><li><a href="#6">6</a>
                                            </li><li><a href="#7">7</a>
                                            </li><li><a href="#8">8</a>
                                            </li><li><a href="#9">9</a>
                                            </li><li><a href="#10">…</a>
                                            </li><li><a href="#41">41</a>
                                            </li></ul>
                                    <a href="#2"><i className="ion-chevron-right" /></a>
                                </nav>
                             </div>
                        </div>
                    </section>
                   {/* end-navigation */}

                    <Footer/>


                </div>
            }   
        </div>
    )
}