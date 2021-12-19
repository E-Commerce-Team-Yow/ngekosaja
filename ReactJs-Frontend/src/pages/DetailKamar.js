import Source from './Source'
// import '../css/style.css';
import Header from './Header';
import Footer from './Footer';
import { GET_ALL_LISTING, GET_ONE_LISTING} from '../graphql/queries';
import { useMutation, useQuery } from '@apollo/client';
import { Link, useRouteMatch } from 'react-router-dom';
// import {Helmet} from "react-helmet";
import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router';
import { ADD_TESTIMONI } from '../graphql/mutation';
import { useCookies } from 'react-cookie';
import { NotificationManager } from 'react-notifications';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';

export default function DetailKamar() {
    const search = useLocation().search;
    const id_kamar = new URLSearchParams(search).get('id');
    const [inputBulan, setBulan] = useState({
        bulan: 1,
    });
    const [formState, setFormState] = useState({
        bintang: '',
        isi: ''
    });
    const [cookies, setCookie, removeCookie] = useCookies(['userLogin']);
    console.log(id_kamar)
    const {loading, data: dataGetOne, error} = useQuery(GET_ONE_LISTING, {variables: {id_kamar: id_kamar}});
    const [testimoni, data] = useMutation(ADD_TESTIMONI);
    
    useEffect(() => {
        console.log(data.data?.addTestimoni);
        if(!data.loading){
            if(data.data && data.data?.addTestimoni != null){
                NotificationManager.success('', data.data?.addTestimoni.message, 2000);
                // setTimeout(() => {
                //     setCookie('userLogin', data.data?.loginUser, { expires: new Date(new Date().getTime() + 24 * 60 * 1000)});
                //     if(data.data.loginUser.isPassword == 0){
                //         window.location.replace("/password?role="+role)
                //     }else{
                //         if(data.data.loginUser.role.id == 2){
                //             window.location.replace("/owner");
                //         }else{
                //             window.location.replace("/");
                //         }
                //     }
                //     console.log(cookies.userLogin);
                // }, 2000);
            }
        }
    }, [!data.loading]);

    if(loading){
      return "Loading..."
    }
    if(error){
      return "Error..."
    }
    console.log(dataGetOne.getOneListing)
    return (
        <div>
            <Header/>
            {
                <div className="container" style={{marginTop: '2%'}}>
                    <div className="row">
                        <div className="col-8">
                        <div id="carouselExampleIndicators" className="carousel slide carousel-foto" data-ride="carousel">
                            <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner carousel-foto" style={{}}>
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={"https://uploadgambar-ngekosaja.herokuapp.com"+dataGetOne.getOneListing.foto} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={"https://uploadgambar-ngekosaja.herokuapp.com"+dataGetOne.getOneListing.foto} alt="second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={"https://uploadgambar-ngekosaja.herokuapp.com"+dataGetOne.getOneListing.foto} alt="third slide" />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-3 carousel-foto">
                        <div className="row col-12">
                            <img src={Source["kamar_kos"]} className="foto-image" style={{marginTop: 0}} />
                        </div>
                        <div className="row col-12">
                            <img src={Source["kamar_kos"]} className="foto-image" />
                        </div>
                        <div className="row col-12">
                            <img src={Source["kamar_kos"]} className="foto-image" />
                        </div>
                        </div>
                        <div className="col-1">
                        <div className="row pilihan" style={{marginTop: 0}}>
                            <img src={Source["icon_gambar"]} className="icon-image" />
                        </div>
                        <div className="row pilihan">
                            <img src={Source["icon_gambar"]} className="icon-image" />
                        </div>
                        <div className="row pilihan">
                            <img src={Source["icon_gambar"]} className="icon-image" />
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                        <img src={Source["icon_gambar"]} className="logo-image" />
                        </div>
                        <div className="col-6">
                        <div className="row">
                            <div className="title-kos">
                            <h2>
                                <b>{dataGetOne.getOneListing.nama}</b>
                                <img src={Source["icon_man"]} className="icon-v1" />
                                <img src={Source["icon_woman"]} className="icon-v1" />
                            </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="kotak-tumpul">1231 transaksi</div>
                            <div className="kotak-tumpul jarak-v1">7 ulasan</div>
                            <img src={Source["icon_location"]} className="icon-mini-v1 jarak-v1" alt />
                            <div><b>kecamatan brogol</b></div>
                        </div>
                        <div className="row jarak-atas">
                            <div className>Tersisa &lt; 5 kamar</div>
                            <div className="kotak-tumpul jarak-v1">
                            <img src={Source["icon_chat"]} className="icon-mini-v2" alt />
                            chat
                            </div>
                            <div className="kotak-tumpul jarak-v1">
                            <img src={Source["icon_wishlist"]} className="icon-mini-v2" alt />
                            wishlist
                            </div>
                            <div className="kotak-tumpul jarak-v1">
                            <img src={Source["icon_share"]} className="icon-mini-v2" alt />
                            share
                            </div>
                        </div>
                        <div className="row jarak-atas">
                            <div className="harga-besar">Rp. {dataGetOne.getOneListing.harga_bulanan}/bulan</div>
                        </div>
                        <div className="row jarak-atas">
                            <div className="harga-sedang"><strike>Rp. {dataGetOne.getOneListing.harga_bulanan}/bulan</strike></div>
                        </div>
                        <div className="row jarak-atas">
                            <div className="kotak-buram">
                            <img src={Source["icon_kalender"]} className="icon-mini-v2" alt />
                            Tanggal Ngekos
                            </div>
                            <input type="number" name id  value={inputBulan.bulan}
                            onChange={(e) =>
                                setBulan({
                                ...inputBulan,
                                bulan: e.target.value
                                })
                            }/>

                            {/* <div className="kotak-buram jarak-v1">
                            1 Bulan
                            <img src={Source["icon_updown"]} className="icon-mini-v2" alt />
                            </div> */}
                            <Link to={`/Checkout?id=${id_kamar}&lama=${inputBulan.bulan}`} replace>
                                <div className="kotak-buram jarak-v1 cursor-pointer">
                                    Pesan Kamar
                                </div>
                            </Link>
                        </div>
                        </div>
                        <div className="col-4 title-kos">
                        <div className="row">
                            <div className="kotak-privilege">
                            <img src={Source["icon_free"]} className="icon-medium-v1" alt />
                            </div>
                            <div className="keterangan-privilege">
                            <b>Bebas Biaya Admin</b>
                            </div>
                        </div>
                        <div className="row jarak-atas">
                            <div className="kotak-privilege">
                            <img src={Source["icon_free"]} className="icon-medium-v1" alt />
                            </div>
                            <div className="keterangan-privilege">
                            <b>Bebas Biaya Admin</b>
                            </div>
                        </div>
                        <div className="row jarak-atas">
                            <div className="kotak-privilege">
                            <img src={Source["icon_free"]} className="icon-medium-v1" alt />
                            </div>
                            <div className="keterangan-privilege">
                            <b>Bebas Biaya Admin</b>
                            </div>
                        </div>
                        <div className="row jarak-atas">
                            <div className="kotak-privilege">
                            <img src={Source["icon_free"]} className="icon-medium-v1" alt />
                            </div>
                            <div className="keterangan-privilege">
                            <b>Bebas Biaya Admin</b>
                            </div>
                        </div>
                        <div className="row jarak-atas">
                            <div className="kotak-privilege">
                            <img src={Source["icon_free"]} className="icon-medium-v1" alt />
                            </div>
                            <div className="keterangan-privilege">
                            <b>Bebas Biaya Admin</b>
                            </div>
                        </div>
                        </div>
                    </div>
                    <hr className="hr-1" />
                    <div className="row">
                        <div className="col-6">
                        <div>
                            <div className="subtitle">
                            INFO KAMAR KOS
                            </div>
                            <hr className="hr-1" />
                            <div className="row jarak-kiri">
                            <div className="col-6">
                                <div className="row">
                                <img src={Source["icon_kamar"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                Luas Kamar {dataGetOne.getOneListing.panjang} x {dataGetOne.getOneListing.lebar}
                                </span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                <img src={Source["icon_kamar"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                    Luas Kamar 4x11
                                </span>
                                </div>
                                <div className="row jarak-atas">
                                <img src={Source["icon_kamar"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                    Luas Kamar 4x11
                                </span>
                                </div>
                                <div className="row jarak-atas">
                                <img src={Source["icon_kamar"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                    Luas Kamar 4x11
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div>
                            <div className="subtitle">
                            HAL-HAL YANG PERLU DIKETAHUI
                            </div>
                            <hr className="hr-1" />
                            <div className="row jarak-kiri">
                            <div className="col-6">
                                <div className="row">
                                <img src={Source["icon_listrik"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                    belum termasuk listrik
                                </span>
                                </div>
                                <div className="row jarak-atas">
                                <img src={Source["icon_listrik"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                    belum termasuk listrik
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div>
                            <div className="subtitle">
                            KAMAR MANDI DALAM
                            </div>
                            <hr className="hr-1" />
                            <div className="row jarak-kiri">
                            <div className="col-6">
                                <div className="row">
                                <img src={Source["icon_kloset"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                    kloset duduk
                                </span>
                                </div>
                                <div className="row jarak-atas">
                                <img src={Source["icon_kloset"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                    kloset duduk
                                </span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                <img src={Source["icon_kloset"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                    kloset duduk
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div>
                            <div className="subtitle">
                            TEMPAT PARKIR
                            </div>
                            <hr className="hr-1" />
                            <div className="row jarak-kiri">
                            <div className="col-6">
                                <div className="row">
                                <img src={Source["icon_mobil"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                    Parkir Mobil
                                </span>
                                </div>
                                <div className="row jarak-atas">
                                <img src={Source["icon_mobil"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                    Parkir Mobil
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div>
                            <div className="subtitle">
                            LINGKUNGAN SEKITAR
                            </div>
                            <hr className="hr-1" />
                            <div className="row jarak-kiri">
                            <div className="col-6">
                                <div className="row">
                                <img src={Source["icon_atm"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                    ATM / Bank
                                </span>
                                </div>
                                <div className="row jarak-atas">
                                <img src={Source["icon_atm"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                    ATM / Bank
                                </span>
                                </div>
                                <div className="row jarak-atas">
                                <img src={Source["icon_atm"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                    ATM / Bank
                                </span>
                                </div>
                                <div className="row jarak-atas">
                                <img src={Source["icon_atm"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                    ATM / Bank
                                </span>
                                </div>
                                <div className="row jarak-atas">
                                <img src={Source["icon_atm"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                    ATM / Bank
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div>
                            <div className="subtitle">
                            KETENTUAN PENGAJUAN SEWA
                            </div>
                            <hr className="hr-1" />
                            <div className="row jarak-kiri">
                            <div className="col-12">
                                <div className="row">
                                Waktu pemesanan terdekat : setelah waktu pemesanan
                                </div>
                                <div className="row">
                                Waktu pemesanan terdekat : setelah waktu pemesanan
                                </div>
                            </div>
                            </div>
                        </div>
                        <div>
                            <div className="subtitle">
                            INFO TAMBAHAN PEMILIK KOS
                            </div>
                            <hr className="hr-1" />
                            <div className="row jarak-kiri">
                            <div className="col-12">
                                <div className="row">Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and 
                                scrambled it to make a type specimen book. It has 
                                survived not only five centuries, but also the leap into 
                                electronic typesetting, remaining essentially unchanged. 
                                It was popularised in the 1960s with the release of 
                                Letraset sheets containing Lorem Ipsum passages, and 
                                more recently with desktop publishing software like 
                                Aldus PageMaker including versions of Lorem Ipsum
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-6">
                        {/* <div>
                            <div className="subtitle">
                            LOKASI KOS
                            </div>
                            <hr className="hr-1" />
                            <div className="row jarak-kiri">
                            <div className="col-12">
                                <div className="row">
                                <img src={Source["location"]} className="image-location" alt />
                                </div>
                            </div>
                            </div>
                        </div> */}
                        <div>
                            <div className="subtitle">
                            KAMAR TIDUR
                            </div>
                            <hr className="hr-1" />
                            <div className="row jarak-kiri">
                            <div className="col-6">
                                <div className="row">
                                <img src={Source["icon_meja"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                    meja
                                </span>
                                </div>
                                <div className="row jarak-atas">
                                <img src={Source["icon_meja"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                    meja
                                </span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                <img src={Source["icon_meja"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                    meja
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div>
                            <div className="subtitle">
                            DAPUR
                            </div>
                            <hr className="hr-1" />
                            <div className="row jarak-kiri">
                            <div className="col-6">
                                <div className="row">
                                <img src={Source["icon_kitchen_set"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                    Kitchen Set
                                </span>
                                </div>
                                <div className="row jarak-atas">
                                <img src={Source["icon_kitchen_set"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                    Kitchen Set
                                </span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                <img src={Source["icon_kitchen_set"]} className="icon-medium-v1" alt />
                                <span className="keterangan-privilege-mini">
                                    Kitchen Set
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="kotak-rule">
                            <div className="subtitle">
                            PERATURAN KOS
                            </div>
                            <hr className="hr-1" />
                            <div className="row jarak-kiri">
                            <div className="col-12">
                                <div className="row">
                                <span className="keterangan-rule">
                                    Akses 24 jam
                                </span>
                                </div>
                                <div className="row">
                                <span className="keterangan-rule">
                                    Dilarang membawa hewan peliharaan
                                </span>
                                </div>
                                <div className="row">
                                <span className="keterangan-rule">
                                    Dilarang membawa tamu lawan jenis
                                </span>
                                </div>
                                <div className="row">
                                <span className="keterangan-rule">
                                    Deposit Rp. 500.000,-
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                        <div className="subtitle">
                            KATA PENYEWA KONTRAKAN
                        </div>
                        <hr className="hr-1" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                        <div className="kotak-review" style={{width: '102%'}}>
                            <div className="row">
                            <div className="col-3">
                                <img src={Source["icon_user"]} className="icon-medium-v2" alt />
                            </div>
                            <div className="col-9">
                                <div className="row">
                                leonardo
                                </div>
                                <div className="row">
                                Hanya kos, kelurahan, kecamatan, Surabaya
                                </div>
                            </div>
                            </div>
                            <div className="row comment-review">“Lorem Ipsum is simply dummy text of the 
                            printing and typesetting industry. Lorem 
                            Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, when 
                            an unknown printer took a galley of type 
                            and scrambled it to make a type specimen 
                            book. It has survived not only five centuries, 
                            but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was 
                            popularised in the 1960s with the release 
                            of Letraset sheets containing.”
                            </div>
                        </div>
                        </div>
                        <div className="col-4">
                        <div className="kotak-review" style={{width: '102%'}}>
                            <div className="row">
                            <div className="col-3">
                                <img src={Source["icon_user"]} className="icon-medium-v2" alt />
                            </div>
                            <div className="col-9">
                                <div className="row">
                                leonardo
                                </div>
                                <div className="row">
                                Hanya kos, kelurahan, kecamatan, Surabaya
                                </div>
                            </div>
                            </div>
                            <div className="row comment-review">“Lorem Ipsum is simply dummy text of the 
                            printing and typesetting industry. Lorem 
                            Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, when 
                            an unknown printer took a galley of type 
                            and scrambled it to make a type specimen 
                            book. It has survived not only five centuries, 
                            but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was 
                            popularised in the 1960s with the release 
                            of Letraset sheets containing.”
                            </div>
                        </div>
                        </div>
                        <div className="col-4">
                        <div className="kotak-review" style={{width: '102%'}}>
                            <div className="row">
                            <div className="col-3">
                                <img src={Source["icon_user"]} className="icon-medium-v2" alt />
                            </div>
                            <div className="col-9">
                                <div className="row">
                                leonardo
                                </div>
                                <div className="row">
                                Hanya kos, kelurahan, kecamatan, Surabaya
                                </div>
                            </div>
                            </div>
                            <div className="row comment-review">“Lorem Ipsum is simply dummy text of the 
                            printing and typesetting industry. Lorem 
                            Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, when 
                            an unknown printer took a galley of type 
                            and scrambled it to make a type specimen 
                            book. It has survived not only five centuries, 
                            but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was 
                            popularised in the 1960s with the release 
                            of Letraset sheets containing.”
                            </div>
                        </div>
                        </div>
                    </div>
                    { 
                        cookies.userLogin ?
                        <div className="col-12">			
                        <div className="reply">
                            <div className="reply-head">
                            <h2 className="reply-title">Review</h2>
                            {/* Comment Form */}
                            
                            <form className="form"
                                onSubmit={e => {
                                e.preventDefault();
                                    testimoni({ variables: { nilai: 5, isi: formState.isi, id_user: cookies.userLogin.id, id_listing: id_kamar, id_rumah_kos: dataGetOne.getOneListing.rumah_kos.id }});
                                }}
                            >
                                <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                    <label>Your Review<span>*</span></label>
                                    <textarea name="message" placeholder
                                    defaultValue={formState.isi}
                                    onChange={(e) =>
                                        setFormState({
                                        ...formState,
                                        isi: e.target.value
                                        })
                                    }
                                    />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group button">
                                    <button type="submit" className="btn">Post review</button>
                                    </div>
                                </div>
                                </div>
                            </form>
                            {/* End Comment Form */}
                            </div>
                        </div>			
                        </div>	
                        :
                        <div></div>
                    }
                </div>  
            }
            <NotificationContainer/>
            <Footer/>
        </div>
    )
}
