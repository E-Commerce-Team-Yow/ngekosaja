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
                        Data Penyewa Kos
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-2" />
                        <div className="col-8 kotak-penyewa">
                        <div className="row">
                            <div className="col-12 text-center">
                            <div className="note-v1">
                                *jika yang tinggal bukan pemilik akun silahkan diisi data dibawah dengan benar
                            </div>
                            </div>
                        </div>
                        <div className="row jarak-v3">
                            <div className="col-4 text-right">
                            Nama Lengkap
                            </div>
                            <div className="col-4">
                            <input type="text" name id />
                            <div className="kotak-rekomendasi">leonardo&nbsp;djojo</div>
                            </div>
                            <div className="col-4" />
                        </div>
                        <div className="row jarak-v3">
                            <div className="col-4 text-right">
                            jenis Kelamin
                            </div>
                            <div className="col-4">
                            <input type="radio" name id />Male
                            <input type="radio" name id />Female
                            </div>
                            <div className="col-4" />
                        </div>
                        <div className="row jarak-v3">
                            <div className="col-4 text-right">
                            No Handphone
                            </div>
                            <div className="col-4">
                            <input type="text" name id />
                            </div>
                            <div className="col-4" />
                        </div>
                        <div className="row jarak-v3">
                            <div className="col-4 text-right">
                            Email
                            </div>
                            <div className="col-4">
                            <input type="email" name id />
                            </div>
                            <div className="col-4" />
                        </div>
                        <div className="row jarak-v3">
                            <div className="col-4 text-right">
                            Pekerjaan
                            </div>
                            <div className="col-4">
                            <select name id>
                                <option value disabled selected>Select your option</option>
                                <option value>IT</option>
                                <option value>Guru</option>
                            </select>
                            </div>
                            <div className="col-4" />
                        </div>
                        <div className="row jarak-v3">
                            <div className="col-4 text-right">
                            nama Sekolah / Universitas / Perusahaan
                            </div>
                            <div className="col-4">
                            <select name id>
                                <option value disabled selected>Select your option</option>
                                <option value>SMA Kristen Petra 3</option>
                            </select>
                            </div>
                            <div className="col-4" />
                        </div>
                        <div className="row jarak-v3">
                            <div className="col-4 text-right">
                            kenapa cari kos-kosan?
                            </div>
                            <div className="col-4">
                            <textarea name id cols={30} rows={3} placeholder="Saya ingin cari kos karena...." defaultValue={""} />
                            </div>
                            <div className="col-4" />
                        </div>
                        <div className="row jarak-v3">
                            <div className="col-4 text-right">
                            jenis identitas
                            </div>
                            <div className="col-4">
                            <input type="radio" name id />e-KTP
                            <input type="radio" name id />SIM
                            <input type="radio" name id />Passport
                            </div>
                            <div className="col-4" />
                        </div>
                        <div className="row jarak-v3">
                            <div className="col-4" />
                            <div className="col-3">
                            <input type="file" name id="file1" className="display-none" />
                            <img src={Source["icon_foto"]} alt id="upfile1" className="upload-v1 foto-v1" />
                            </div>
                            <div className="col-4">
                            <input type="file" name id="file1" className="display-none" />
                            <img src={Source["icon_foto"]} alt id="upfile1" className="upload-v1 foto-v1" />
                            </div>
                        </div>
                        <div className="row jarak-v3">
                            <div className="col-4" />
                            <div className="col-8">
                            <input type="checkbox" name id />
                            <span>Saya telah mengisi semua data dengan benar dan menyetujuan <a href="http://">Syarat &amp; ketentuan dari ngekos</a></span>
                            </div>
                        </div>
                        <div className="row jarak-v3">
                            <div className="col-4" />
                            <div className="col-8 text-right">
                            <input type="submit" defaultValue="Lanjutkan Pembayaran" className="button-v1" />
                            </div>
                        </div>
                        </div>
                        <div className="col-2" />
                    </div>
                    </div>
                </div>
                </div>

        </div>
    )
}
