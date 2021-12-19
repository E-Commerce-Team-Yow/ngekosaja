import React, {useEffect, useState} from 'react';
import Footer from './Footer';
import SkeletonCard from './SkeletonCard';
import Navbar from './Navbar';
import Header from './Header';
// import Loading from '../Loading';
import Source from './Source';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { GET_LAST_RUMAH_KOS } from '../graphql/queries';
import Loading from './Loading';
import { Rating } from 'react-simple-star-rating';

export default function Home() {
    
   // const [loading, setLoading] = useState(true);

    //deklarasi add Kos
    const {loading:loadingrumahKos, data: getLastRumahKos, error:errorrumahKos} = useQuery(GET_LAST_RUMAH_KOS,{variables: {limit:6}});
    // useEffect(() => {
    //     setLoading(true);
    //     const timing = setTimeout(() => {
    //     setLoading(false);
    //     }, 1000);
    //     return () => {
    //         clearTimeout(timing);
    //     }
    // }, []);

    
    if(loadingrumahKos){
        return <Loading/>
    }
    if(errorrumahKos){
        return "Error..."
    }
    
    return (
        <div className="js">
            {
                // loading ? <SkeletonCard/>
                // :
                <div >
                    <Header/>
                    {/* carousel */}
                    <section>
                        <div className="container p4 mb-4">
                            <div id="carouselExampleIndicators" className="carousel slide carousel-banner" data-ride="carousel">
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

                  {/* section flash-sale */}
                    <section>
                        <div className="box-flash-deal orangered-small">
                            <div className="container">
                                
                                <div className="page-flash-deal">
                                    <div className="left-page-flash-deal">
                                        <h1 className="h1-program">
                                            Flash Deal
                                        </h1>
                                    </div>
                                    <div className="line-page-flash-deal" />
                                    <div className="center-page-flash-deal">
                                        <div className="time-flash-deal">Berakhir dalam waktu :</div>
                                        <div className="clockdiv">
                                            <div className="list-time">
                                                <span className="clockdiv hours" />
                                            </div>
                                            <div className="list-time">:</div>
                                            <div className="list-time">
                                                <span className="clockdiv minutes">:</span>
                                            </div>
                                            <div className="list-time">:</div>
                                            <div className="list-time">
                                                <span className="clockdiv seconds" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-page-flash-deal">
                                        <Link to="/flash-deal">Lihat Semua</Link>
                                    </div>
                                    <div className="clearer" />
                                </div>
                                <div className="box-products">
                                    <div className="orange-box"></div>
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

                    {/* section rumah kos */}
                    <section>
                        <div className='container'>
                            <h1 className='h1-program'>
                                Rumah Kos Terkini
                            </h1>
                            <div className='row box-program'>

                            {
                                getLastRumahKos && (
                                        getLastRumahKos.getLastRumahKos.map(rumah_kos => 
                                           
                                      
                                <Link className='box-rumah-kos' key={rumah_kos.id} to={"/DetailRumahKos?id="+rumah_kos.id}>
                                   <div className='row'>
                                       <div className='col-12'>
                                             <img className='img-box-rumah-kos' src={Source.room} />
                                       </div>
                                   </div>
                                   <div className='row p-2'>
                                       <div className='col-12'>
                                           <h5>{rumah_kos.nama}</h5>
                                           <h6>{rumah_kos.alamat}, {rumah_kos.kota.nama}</h6>
                                           <p className='mt-2' dangerouslySetInnerHTML={{ __html: rumah_kos.keterangan }}></p>
                                       </div>
                                       <div className='col-6 mt-5'>
                                       <Rating size={20} ratingValue={100} /* Available Props */ />
                                       </div>
                                       <div className='col-6 mt-5'>
                                        {rumah_kos.sisa_kamar} kamar tersisa
                                       </div>
                                   </div>
                                </Link>
                                    )
                                )
                            }
                                



                            </div>
                        </div>
                    </section>
                    
                    {/* Kos-di-kota */}
                    <section>
                        <div className="container">
                            <h1 className="h1-program">
                                Kos di Kota
                            </h1>
                            <div className="box-program">
                                <Link to="/search?keyword=JAKARTA">
                                    <div className="list-program" style={{backgroundImage:`url(${Source.jakarta})`}}>
                                    <div className="overlay-program" />
                                    <h2>
                                        Jakarta
                                    </h2>
                                    </div>
                                </Link>
                                <Link to="/search?keyword=BANDUNG">
                                    <div className="list-program" style={{backgroundImage: `url(${Source.bandung})`}}>
                                    <div className="overlay-program" />
                                    <h2>
                                        Bandung
                                    </h2>
                                    </div>
                                </Link>
                                <Link to="/search?keyword=SEMARANG">
                                    <div className="list-program" style={{backgroundImage: `url(${Source.semarang})`}}>
                                    <div className="overlay-program" />
                                    <h2>
                                        Semarang
                                    </h2>
                                    </div>
                                </Link>
                                <Link to="/search?keyword=JOGJA">
                                    <div className="list-program" style={{backgroundImage: `url(${Source.jogja})`}}>
                                    <div className="overlay-program" />
                                    <h2>
                                        Yogyakarta
                                    </h2>
                                    </div>
                                </Link>
                                <div className="clearer" />
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container mb-5">
                            <div className="box-program">
                                <Link to="/search?keyword=SOLO">
                                    <div className="list-program" style={{backgroundImage:`url(${Source.solo})`}}>
                                    <div className="overlay-program" />
                                    <h2>
                                        Solo
                                    </h2>
                                    </div>
                                </Link>
                                <Link to="/search?keyword=SURABAYA">
                                    <div className="list-program" style={{backgroundImage: `url(${Source.surabaya})`}}>
                                    <div className="overlay-program" />
                                    <h2>
                                        Surabaya
                                    </h2>
                                    </div>
                                </Link>
                                <Link to="/search?keyword=MALANG">
                                    <div className="list-program" style={{backgroundImage: `url(${Source.malang})`}}>
                                    <div className="overlay-program" />
                                    <h2>
                                        Malang
                                    </h2>
                                    </div>
                                </Link>
                                <Link to="/search?keyword=BALI">
                                    <div className="list-program" style={{backgroundImage: `url(${Source.bali})`}}>
                                    <div className="overlay-program" />
                                    <h2>
                                        Bali
                                    </h2>
                                    </div>
                                </Link>
                                <div className="clearer" />
                            </div>
                        </div>
                    </section>
                     {/* end-Kos-di-kota */}


                    {/* aplikasi anak kos no 1 */}
                     <section>
                         <div className="container mt-2 mb-2">
                            <h1 className="h1-program mb-2">
                                Ngekos - Aplikasi Anak Kos no 1  <br/>di Indonesia
                            </h1>
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <div className="row mb-2">
                                        <div className="col-lg-4 col-sm-4 text-right "><i className="fas fa-cog icon-ngekos fa-2x p-2 mt-2 mb-2"></i></div>
                                        <div className="col-lg-8 col-sm-8"><p>Ngekos memanfaatkan teknologi untuk berkembang dari aplikasi cari kos menjadi aplikasi yang memudahkan calon anak kos untuk booking properti kos dan juga melakukan pembayaran kos. Saat ini kami memiliki lebih dari 2 juta kamar kos yang tersebar di lebih dari 140 kota di seluruh Indonesia. Mamikos juga menyediakan layanan manajemen properti, bernama Singgahsini dan Apik, untuk menjawab kebutuhan calon penghuni yang menginginkan kos eksklusif atau kos murah. Mamikos berusaha untuk bisa terus menyajikan daftar rumah kos dengan data ketersediaan kamar yang akurat, fasilitas kos terperinci, dilengkapi dengan foto serta detail harga kos, dan kemudahan survei via fitur virtual tour agar calon penghuni mendapatkan kenyamanan dalam proses pencarian dan booking kos. </p></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <div className="row mb-2">
                                        <div className="col-lg-4 col-sm-4 text-right "><i className="fas fa-shield-alt icon-ngekos fa-2x p-2 mt-2 mb-2"></i></div>
                                        <div className="col-lg-8 col-sm-8"><p>Untuk memberikan perlindungan bagi para anak kos selama pandemi, Ngekos menghadirkan kos higienis. Kos higienis merupakan kos dengan konsep yang menerapkan pelaksanaan standar protokol kesehatan, seperti disinfeksi kamar, jaga jarak, penggunaan masker, dan swab antigen untuk kamu saat akan mulai ngekos nanti.  </p></div>
                                    </div>
                                </div>
                            </div>
                         </div>
                     </section>
                    {/* end-aplikasi anak kos no 1 */}

                    {/* fitur kos  */}
                    <section>
                         <div className="container mt-2 mb-4">
                            <h1 className="h1-program mb-2">
                               Fitur yang dapat di manfaatkan <br/>di Ngekos
                            </h1>
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <div className="row mb-2">
                                        <div className="col-lg-4 col-sm-4 text-right "><i className="fas fa-th-large icon-ngekos fa-2x p-2 mt-2 mb-2"></i></div>
                                        <div className="col-lg-8 col-sm-8">
                                            <h6>A. Fitur Pencarian</h6>
                                            <p>Di kolom pencarian, kamu bisa cari kos di sekitarmu atau kos di seluruh daerah di Indonesia dengan memasukkan keyword, seperti kos dekat Kampus/Universitas di masing-masing kota, cari kos di Jogja, Depok, Jakarta, Surabaya, Bandung, dan kota besar lainnya atau cari kos di sekitar lokasi saya saat ini.</p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-lg-4 col-sm-4 text-right "></div>
                                        <div className="col-lg-8 col-sm-8">
                                            <h6>B. Fitur Filter pencarian</h6>
                                            <p>Cari kos berdasarkan fasilitas kos yang kamu mau, lebih mudah dengan filter berdasarkan Kos AC, Kos Kamar mandi dalam, Kos Wifi. Bisa juga pilih kos dengan tipe kos, mulai dari Kos Harian, Kos Bulanan hingga Kos Tahunan. Mau cari Kos Bebas, Kos Pasutri, Kos Putra, Kos Putri, Kos Campur juga bisa.</p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-lg-4 col-sm-4 text-right "><i className="fas fa-comment-alt icon-ngekos fa-2x p-2 mt-2 mb-2"></i></div>
                                        <div className="col-lg-8 col-sm-8">
                                            <h6>C. Fitur Chat dengan Penyewa</h6>
                                            <p>Terhubung langsung dengan pemilik kos dan bisa bertanya lebih lanjut mengenai info kos melalui fitur chat di Ngekos.</p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                    <div className="col-lg-4 col-sm-4 text-right "><i className="fas fa-briefcase icon-ngekos fa-2x p-2 mt-2 mb-2"></i></div>
                                        <div className="col-lg-8 col-sm-8">
                                            <h6>D. Booking Langsung</h6>
                                            <p>Bisa langsung mengajukan sewa kos di aplikasi atau website Ngekos. Bahkan, kamu bisa mulai sewa kos dari 3 bulan sebelum masuk kosan. Transaksi lebih aman, tanpa takut kamarnya penuh keduluan orang lain.</p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-lg-4 col-sm-4 text-right "><i className="fas fa-camera icon-ngekos fa-2x p-2 mt-2 mb-2"></i></div>
                                        <div className="col-lg-8 col-sm-8">
                                            <h6>E. Fitur Virtual Tour</h6>
                                            <p>Virtual Tour Mamikos adalah media foto lingkungan kos dalam 360° yang diperuntukkan untuk kamu, para pencari kos, agar dapat mengetahui kondisi lingkungan kos secara detail tanpa harus survei langsung. Fitur ini cocok jadi andalanmu yang butuh kosan tapi tidak punya waktu untuk survei langsung, karena fitur ini menampilkan keadaan kos secara lengkap dari berbagai sudut</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <div className="row mb-2">
                                        <div className="col-lg-4 col-sm-4 text-right "><i className="fas fa-wallet icon-ngekos fa-2x p-2 mt-2 mb-2"></i></div>
                                        <div className="col-lg-8 col-sm-8">
                                            <h6>F. Pembayaran Via Ngekos</h6>
                                            <p>Bayar kosan anti ribet, cashless, dan jaminan aman, dengan beragam pilihan metode pembayaran. Nikmati promo-promo menarik yang diselenggarakan secara berkala untuk membantu kamu ngekos lebih hemat.</p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-lg-4 col-sm-4 text-right "><i className="fas fa-money-bill-wave-alt icon-ngekos fa-2x p-2 mt-2 mb-2"></i></div>
                                        <div className="col-lg-8 col-sm-8">
                                            <h6>G. Ngekos Poin</h6>
                                            <p>Sebagai wujud terima kasih, Ngekos menghadirkan program loyalti melalui Ngekos poin. Anak kos bisa mendapatkan poin sebagai cashback setiap melakukan pembayaran kos dan dapat dikumpulkan untuk digunakan sebagai tambahan diskon di pembayaran kos selanjutnya. Pemilik kos juga akan mendapatkan ngekos Poin setiap melakukan aktivitas di Ngekos dan dapat dikumpulkan untuk ditukar menjadi beragam hadiah menarik atau tambahan diskon di pembayaran paket Ngekos GoldPlus.</p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-lg-4 col-sm-4 text-right "><i className="fas fa-sticky-note icon-ngekos fa-2x p-2 mt-2 mb-2"></i></div>
                                        <div className="col-lg-8 col-sm-8">
                                            <h6>H. Kos Review</h6>
                                            <p>Lihat review dari para penghuni kos agar kamu semakin yakin untuk sewa kos. Kamu juga bisa tulis pengalaman kamu selama ngekos untuk menambah info kos tersebut.</p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-lg-4 col-sm-4 text-right "><i className="fas fa-star icon-ngekos fa-2x p-2 mt-2 mb-2"></i></div>
                                        <div className="col-lg-8 col-sm-8">
                                            <h6>I. Favorit</h6>
                                            <p>Ketemu dengan kos idaman, bisa disimpan dulu melalui fitur favorit kos. Kos yang sudah kamu simpan, dapat kamu booking di kemudian hari.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                     </section>
                    {/* end-fitur-kos */}

                    <Footer/>
                </div>
            }
        </div>
    )
}
