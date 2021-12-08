import React from 'react'
// import Logo from '../images/logo.png'
import Source from './Source'
// import '../css/style.css';
// import {Helmet} from "react-helmet";

export default function Checkout() {
    return (
        <div>
            
            <div className="container" style={{marginTop: '2%'}}>
                <div className="row">
                    <div className="col-12">
                    <div className="row">
                        <img src={Source["icon_back_arrow"]} alt className="icon-medium-v1" />
                        <h2 className="judul-transaksi">
                        Detail Transaksi
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-3" />
                        <div className="col-6 kotak-transaksi">
                        <div className="row jarak-v2">
                            <div className="col-4">Nama Kos</div>
                            <div className="col-6">Kos XXXXXX</div>
                            <div className="col-2 text-right">
                            <img className="icon-medium-v3" src={Source["icon_trash"]} alt />
                            </div>
                        </div>
                        <div className="row jarak-v2">
                            <div className="col-4">jenis kamar</div>
                            <div className="col-6">kamar deluxe XXX</div>
                            <div className="col-2" />
                        </div>
                        <div className="row jarak-v2">
                            <div className="col-4">Fasilitas</div>
                            <div className="col-4">
                            <div className="row">
                                <div className="col-12">
                                <img className="icon-medium-v3" src={Source["icon_shower"]} alt />
                                Shower
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                <img className="icon-medium-v3" src={Source["icon_wifi"]} alt />
                                Wifi
                                </div>
                            </div>
                            </div>
                            <div className="col-4" />
                        </div>
                        <div className="row jarak-v2">
                            <div className="col-4">Tanggal Mulai Masuk</div>
                            <div className="col-6">
                            <input type="text" onfocus="(this.type='date')" name placeholder="Tentukan Tanggal Masuk" id />
                            </div>
                            <div className="col-2" />
                        </div>
                        <div className="row jarak-v2">
                            <div className="col-4">Lama Ngekos</div>
                            <div className="col-1">
                            <select name id style={{paddingRight: 5}}> 
                                <option value>1</option>
                                <option value>2</option>
                                <option value>3</option>
                                <option value>4</option>
                                <option value>5</option>
                            </select>
                            </div>
                            <div className="col-2">
                            <select name id style={{paddingRight: 5}}> 
                                <option value>minggu</option>
                                <option value>bulan</option>
                                <option value>tahun</option>
                            </select>
                            </div>
                            <div className="col-5" />
                        </div>
                        <div className="row jarak-v2">
                            <div className="col-4">Harga</div>
                            <div className="col-6">Rp. 6.000.000,00</div>
                            <div className="col-2" />
                        </div>
                        <div className="hr-1" />
                        <div className="row jarak-v2">
                            <div className="col-4"><b>Detail Transaksi</b></div>
                            <div className="col-8" />
                        </div>
                        <div className="row jarak-v2">
                            <div className="col-4">kos XXX - kamar deluxe</div>
                            <div className="col-6">Rp. 6.000.000,00</div>
                            <div className="col-2" />
                        </div>
                        <div className="row jarak-v2">
                            <div className="col-4">kos XXX - kamar deluxe</div>
                            <div className="col-6">Rp. 6.000.000,00</div>
                            <div className="col-2" />
                        </div>
                        <div className="row jarak-v2">
                            <div className="col-4">Admin fee</div>
                            <div className="col-6">Rp. 1.000,00</div>
                            <div className="col-2" />
                        </div>
                        <div className="hr-1" />
                        <div className="row jarak-v2">
                            <div className="col-4">Harga Total</div>
                            <div className="col-6">Rp. 12.001.000,00</div>
                            <div className="col-2" />
                        </div>
                        <div className="row jarak-v2" style={{marginTop: '3%'}}>
                            <div className="col-4">Pilih metode pembayaran</div>
                            <div className="col-6">
                            <select name id style={{paddingRight: 5}}> 
                                <option value disabled selected>Select your option</option>
                                <option value>BCA</option>
                                <option value>Gopay</option>
                                <option value>OVO</option>
                            </select>
                            </div>
                            <div className="col-2" />
                        </div>
                        <div className="row jarak-v2" style={{marginTop: '3%'}}>
                            <div className="col-12">
                            <input type="checkbox" name id />
                            Saya telah mengisi semua data dengan benar dan menyetujuan 
                            <a href="http://"> Syarat &amp; ketentuan dari ngekos</a>
                            </div>
                        </div>
                        <div className="row jarak-v2" style={{marginTop: '3%'}}>
                            <div className="col-12 text-right">
                            <input type="submit" defaultValue="Bayar" className="button-v1" />
                            </div>
                        </div>
                        </div>
                        <div className="col-3" />
                    </div>
                    </div>
                </div>
                </div>

        </div>
    )
}
