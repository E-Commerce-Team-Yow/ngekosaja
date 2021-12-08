import React, {useEffect, useState} from 'react';
import Footer from './Footer';
import SkeletonCard from './SkeletonCard';
import Navbar from './Navbar';
import Header from './Header';
import Source from './Source';
import { Link } from 'react-router-dom';

export default function FAQ(){
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

                    {/* section-1 */}
                    <section>
                        <div className="container text-center mt-4 ">
                            <h2>HALO ADA YANG KAMI BISA BANTU</h2>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <input className="inp" placeholder="Apa yang anda Cari?👻"/>
                                    <button className="btn-faq-search"><i className="fas fa-search fa-1x"></i></button>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                   <p>Anda bisa telusuri kategori informasi sesuai tipe akun berikut ini</p>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </section>
                    {/* end-section-1 */}


                    {/* pemilik kos dan penywa kos */}
                    <section>
                        <div className="container mb-5">
                            <div className="row text-center">
                                <div className="col-lg-6 col-sm-12">
                                    <div className="row">
                                        <div className="col-12">
                                            <h4>Penyewa Kos</h4>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-12">
                                            <img className="img-faq" src={Source['penyewaKos']} alt="logo"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <div className="row">
                                        <div className="col-12">
                                            <h4>Pemilik Kos</h4>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-12">
                                            <img className="img-faq" src={Source['pemilikKos']} alt="logo"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end pemilik kos dan penyewa kos */}

                    {/* section kategori  */}
                    <section>
                        <div className="container mb-5">
                                <h1 className="h1-program">
                                    Kategori
                                </h1>
                                <hr/>
                                <div className="row mb-2">
                                    <div className="col-lg-4 col-sm-12">
                                        <h6>Kebijakan ngekos</h6> 
                                        <a href="" className="faq-link-a"> <p>kebijakan privasi ngekos</p></a>
                                    </div>
                                    <div className="col-lg-4 col-sm-12">
                                        <h6>Akun Penyewa</h6> 
                                        <a href="" className="faq-link-a"><p>Saya lupa password akun penyewa apa yang harus saya lakukan</p></a>
                                    </div>
                                    <div className="col-lg-4 col-sm-12">
                                        <h6>Akun Pemilik</h6> 
                                        <a href="" className="faq-link-a"><p>Saya lupa password akun pemilik, apa yang harus saya lakukan</p></a>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-lg-4 col-sm-12">
                                        <h6>Panduan keamanan</h6> 
                                        <a href="" className="faq-link-a"><p>Bagaimana agar transaksi saya aman di ngekos</p></a>
                                    </div>
                                    <div className="col-lg-4 col-sm-12">
                                        <h6>Syarat Dan Ketentuan</h6> 
                                        <a href="" className="faq-link-a"><p>Syarat Dan Ketentuan </p></a>
                                    </div>
                                    <div className="col-lg-4 col-sm-12">
                                        <h6>Ketentuan pemesanan</h6> 
                                        <a href="" className="faq-link-a"><p>Syarat Dan Ketentuan Booking Langsung Penyewa</p></a>
                                    </div>
                                </div>
                        </div>
                    </section>
                    {/* end-section-kategori */}

                    {/* section FAQ */}
                    <section>
                        <div className="container mb-5">
                                <h1 className="h1-program">
                                   FAQ
                                </h1>
                                <hr/>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="row mb-2">
                                            <div className="col-12">
                                                <h1 className="h1-program">Info Umum</h1>
                                                <ul className="no-bullets">
                                                    <li><a href="">sekilas Ngekos</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-12">
                                                <h6>Saya Ingin Cari Kos</h6>
                                                <ul className="no-bullets">
                                                    <li><a href="">Apakah saya harus memiliki akun Ngekos untuk dapat mencari kos?</a></li>
                                                    <li><a href="">Bagaimana Cara membuat akun pencari kos ?</a></li>
                                                    <li><a href="">Apakah saya bisa membuat akun pencari dan pemilik kos sekaligus?</a></li>
                                                    <li><a href="">Saya sudah membuat akun pencari kos, bagaimana cara cari kos?</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-12">
                                                <h6>Saya Ingin Sewakan Kos</h6>
                                                <ul className="no-bullets">
                                                    <li><a href="">Apakah saya harus memiliki akun Ngekos untuk dapat mendaftarkan kos saya?</a></li>
                                                    <li><a href="">Bagaimana cara membuat akun sebagai pemilik kos?</a></li>
                                                    <li><a href="">Apakah saya bisa membuat akun pemilik dan pencari kos sekaligus?</a></li>
                                                    <li><a href="">Saya sudah membuat akun pemilik kos, bagaimana cara mendaftarkan kos saya?</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-12">
                                                <h1 className="h1-program">Kebijakan Privasi</h1>
                                                <ul className="no-bullets">
                                                    <li><a href="">kebijakan privasi Ngekos</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-12">
                                                <h6>Syarat dan Ketentuan</h6>
                                                <ul className="no-bullets">
                                                    <li><a href="">Pemilik dan Penyewa</a></li>
                                                    <li><a href="">Syarat Dan Ketentuan Umum </a></li>
                                                    <li><a href="">Syarat Dan Ketentuan promo Ngekos</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="row mb-2">
                                            <div className="col-12">
                                                <h1 className="h1-program">Pemilik</h1>
                                                <ul className="no-bullets">
                                                    <li><a href="">Syarat Dan Ketentuan Ngekospay</a></li>
                                                    <li><a href="">Syarat Dan Ketentuan Booking Langsung Pemilik</a></li>
                                                    <li><a href="">Syarat Dan Ketentuan Mamikos Goldplus</a></li>
                                                    <li><a href="">Syarat Dan Ketentuan Layanan Fotografi</a></li>
                                                    <li><a href="">Syarat Dan Ketentuan Fitur Promosi</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-12">
                                                <h1 className="h1-program">Penyewa</h1>
                                                <ul className="no-bullets">
                                                    <li><a href="">Syarat Dan Ketentuan Booking Langsung Penyewa</a></li>
                                                    <li><a href="">Syarat Dan Ketentuan Ngekos poin Penyewa</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-12">
                                                <h1 className="h1-program">Panduan Keamanan</h1>
                                                <h6>Keamanan Akun Dan Transaksi</h6>
                                                <ul className="no-bullets">
                                                    <li><a href="">Bagaimana Cara Agar Akun Saya Tetap Aman ?</a></li>
                                                    <li><a href="">Bagaimana Agar Transaksi Saya Aman Di Ngekos ?</a></li>
                                                    <li><a href="">Bagaimana Saya Mengetahui Apakah Sebuah Email Atau Website Benar - Benar Dari Ngekos ?</a></li>
                                                    <li><a href="">Apa yang harus dilakukan jika mendapatkan notifikasi permintaan kode verifikasi yang tidak saya lakukan?</a></li>
                                                    <li><a href="">Bagaimana cara Ngekos menjaga keamanan data saya sebagai pengguna?</a></li>
                                                    <li><a href="">Nomor telepon saya tidak aktif atau hilang, apa yang harus saya lakukan?</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-12">
                                                <h6>Keamanan Akun Dan Transaksi </h6>
                                                <ul className="no-bullets">
                                                    <li><a href="">Bagaimana cara agar akun saya tetap aman?</a></li>
                                                    <li><a href="">Bagaimana agar transaksi saya aman di Mamikos?</a></li>
                                                    <li><a href="">Nomor telepon saya tidak aktif atau hilang, apa yang harus saya lakukan?</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                        </div>
                    </section>
                    {/* end-section faq */}

                    {/* section-hubungi-kami */}
                    <section>
                        <div className="container mb-5">
                            <div className="row">
                                <div className="col-12 text-center">
                                        <h1 className="h1-program">HUBUNGI KAMI</h1>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-6 text-right">
                                        <button className="rounded-pill-button"><i className="fas fa-envelope "></i> Email</button>
                                </div>
                                <div className="col-6 text-left">
                                        <button className="rounded-pill-button"><i className="fas fa-phone "></i> Telepon</button>
                                </div>
                            </div>
                            <div className="row mt-4 text-center">
                                <div className="col-12">
                                   <p>Layanan pelanggan 24 jam, Senin s/d minggu, termasuk hari libur nasional</p>
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