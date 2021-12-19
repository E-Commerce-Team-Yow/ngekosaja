import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { GET_ALL_KOTA, GET_ALL_LISTING_OWNER, GET_ALL_RUMAH_KOS, GET_RUMAH_KOS_USER } from '../../../graphql/queries';
import { useQuery,useMutation } from '@apollo/client';
import { ADD_LISTING, ADD_RUMAH_KOS, EDIT_LISTING } from '../../../graphql/mutation';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';

function generateFormData(data) {
    const formData = new FormData();
    const dataValue = Object.values(data);
    const dataKeys = Object.keys(data);
  
    for (let i = 0; i < dataValue.length; i++) {
      if (dataValue[i]) {
        formData.append(dataKeys[i], dataValue[i] || "");
      }
    }
  
    return formData;
  }

export default function EditsKamarKos({kamar_kos}) {
    const script = document.createElement("script");
    script.src = `../../../js/validation.js`;
    script.async = true;
    document.body.appendChild(script);

	const [cookies, setCookie, removeCookie] = useCookies(['userLogin']);
	const [dataUser,setdataUser] = useState(null);
    const [value,setValue] = useState(null);
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formState, setFormState] = useState({
        nama_kamar : kamar_kos.nama,
        rumah_kos : kamar_kos.rumah_kos.id,
        panjang : kamar_kos.panjang,
        lebar : kamar_kos.lebar,
        harga_bulanan : kamar_kos.harga_bulanan,
        harga_tahunan : kamar_kos.harga_tahunan,
        keterangan : kamar_kos.keterangan,
        jenis : kamar_kos.jenis
    });

    console.log(formState)
    console.log(kamar_kos);

    //deklarasi add Kos
    const [edit_kamar_kos, data] = useMutation(EDIT_LISTING);
    const [uploadedFile, setUploadedImage] = useState(null);
    
    //banyakMedia = dataGetAll.getAllMedia.length;

    const onUploadImage = (e) =>  {  
        setUploadedImage(e.target.files[0]);
    }
    const doUploadImage = () => {    
        const formData = generateFormData({
            foto: uploadedFile,
          });
          
          axios
            .post(
              "https://uploadgambar-ngekosaja.herokuapp.com/upload/"+kamar_kos.id,
              formData,
              {
                headers: { "Content-Type": "multipart/form-data" },
              }
            )
            .then((res) => {
              //success
              console.log(res.data);
              console.log(formState);
              console.log( edit_kamar_kos({ 
                variables: { 
                    nama : formState.nama_kamar, 
                    jenis: parseInt(formState.jenis), 
                    harga_bulanan : parseInt(formState.harga_bulanan), 
                    harga_tahunan : parseInt(formState.harga_tahunan), 
                    panjang: parseInt(formState.panjang), 
                    lebar : parseInt(formState.lebar), 
                    rumah_kos: formState.rumah_kos, 
                    keterangan : formState.keterangan,
                    foto: ''+res.data
                }}));
            })
            .catch((err) => {
              //error
              if (err.response) {
                console.log("res error", err.response.data);
              } else if (err.request) {
                console.log("req error", err.request.data);
              } else {
                console.log("Error", err.message);
              }
            });
    }  
	//check data user
	useEffect(()=>{
		if(cookies.userLogin){
			setdataUser(cookies.userLogin);
            setValue(cookies.userLogin.id);
		} else{
            window.location.replace(`/loginUser?role=2`);
        }
        if(!data.loading ){
            if(data.data && data.data?.updateListing != null){
                NotificationManager.success('', data.data?.updateListing.message, 2000);
                
            }else if(data.data && data.data?.updateListing == null){
                NotificationManager.error('', "Gagal mengubah rumah kos", 2000);
            }
        }
	},[!data.loading]);

    console.log(value);

    const {loading, data:getAllRumahKosUser, error} = useQuery(GET_RUMAH_KOS_USER, {variables : {id_user:value, type : 1}});
   

    if(loading){
        return "Loading..."
    }
    if(error){
        return "Error..."
    }
    return (
        <div>   
            {
                dataUser ?
                <div>
                        <Button variant="primary" onClick={handleShow} className="btnOwner float-right p-2">
                            <i className="fas fa-pencil-alt" />
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header >
                                <button type="button" className="close" onClick={handleClose}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </Modal.Header>
                            <div className="container p-4">
                                <h4>Edit Kamar Kos</h4>
                                <hr/>
                                <div className="row">
                                    <div className="col-12">
                                    <form id="quickForm"
                                            onSubmit={e => {
                                                e.preventDefault();
                                                    console.log(formState);
                                                    doUploadImage();
                                                    //uploadImage();
                                                    // setTimeout(() => {
                                                    //     window.location.replace("/owner/ListKamarKos");
                                                    // }, 2000); 
                                                }}
                                        
                                        >
                                            <div className="form-group">
                                                <label htmlFor="name_kos">Rumah Kos</label>
                                                <select name="rumah_kos" id="kota_kos" className="form-control" 
                                            defaultValue={formState.rumah_kos}
                                            onChange={(e) =>
                                                setFormState({
                                                ...formState,
                                                rumah_kos: e.target.value
                                                })
                                            }
                                            >
                                                <option value="" key="0">Pilih Rumah Kos</option>
                                                {
                                                    getAllRumahKosUser && (
                                                        getAllRumahKosUser.getAllRumahKosUser.map(rmh_kos => 
                                                            <option value={rmh_kos.id} key={rmh_kos.id}>{rmh_kos.nama}</option>
                                                        )
                                                    )
                                                }
                                            </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name_kos">Nama Kamar</label>
                                                <input type="text" className="form-control" id="nama_kamar"
                                                defaultValue={formState.nama_kamar}
                                                    onChange={(e) =>
                                                        setFormState({
                                                        ...formState,
                                                        nama_kamar: e.target.value
                                                        })
                                                    }
                                                
                                                placeholder="Kamar 1" name="nama_kos" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name_kos">Jenis Kamar</label>
                                                <select name="jenis_kamar" id="jenis_kamar" className="form-control" 
                                                    defaultValue={formState.jenis}
                                                    onChange={(e) =>
                                                        setFormState({
                                                        ...formState,
                                                        jenis: e.target.value
                                                        })
                                                    }
                                                    >
                                                        <option value={1}>Putra</option>
                                                        <option value={2}>Putri</option>
                                                        <option value={3}>Campuran</option>
                                                    </select>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-6">
                                                    <label htmlFor="name_kos">Panjang</label>
                                                    <input type="number" className="form-control" id="panjang"
                                                        defaultValue = {formState.panjang}
                                                        onChange={(e) =>
                                                            setFormState({
                                                            ...formState,
                                                            panjang: e.target.value
                                                            })
                                                        }
                                                    placeholder="5" name="panjang" />
                                                </div>
                                                <div className="form-group col-6">
                                                    <label htmlFor="name_kos">Lebar</label>
                                                    <input type="number" className="form-control" id="lebar"
                                                        defaultValue = {formState.lebar}
                                                        onChange={(e) =>
                                                            setFormState({
                                                            ...formState,
                                                            lebar: e.target.value
                                                            })
                                                        }
                                                    placeholder="5" name="lebar" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-6">
                                                    <label htmlFor="name_kos">Harga Bulanan</label>
                                                    <input type="number" className="form-control" id="hrgBulanan"
                                                        defaultValue={formState.harga_bulanan}
                                                        onChange={(e) =>
                                                            setFormState({
                                                            ...formState,
                                                            harga_bulanan: e.target.value
                                                            })
                                                        }
                                                    placeholder="500000" name="hrgBulanan" />
                                                </div>
                                                <div className="form-group col-6">
                                                    <label htmlFor="name_kos">Harga Tahunan</label>
                                                    <input type="number" className="form-control" id="hrgTahunan"
                                                        defaultValue = {formState.harga_tahunan}
                                                        onChange={(e) =>
                                                            setFormState({
                                                            ...formState,
                                                            harga_tahunan: e.target.value
                                                            })
                                                        }
                                                    placeholder="1200000" name="hrgTahunan" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Keterangan</label>
                                                <CKEditor
                                                        editor={ ClassicEditor }
                                                        data={formState.keterangan}
                                                        onReady={ editor => {
                                                            // You can store the "editor" and use when it is needed.
                                                            console.log( 'Editor is ready to use!', editor );
                                                        } }
                                                        onChange={ ( event, editor ) => {
                                                            const data = editor.getData();
                                                            console.log( data );

                                                            setFormState({
                                                                ...formState,
                                                                keterangan: data
                                                            })
                                                        } }
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="media">Media</label> <br/>
                                                <input  type="file"
                                                        id="upload"
                                                        name="upload"
                                                        onChange={(e) => onUploadImage(e)}
                                                        type="file"
                                                />
                                            </div>
                                            <button type="submit" className="btnOwner w-100 p-3">Simpan</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                </div>
        : 
        <div> </div>
        }
        <NotificationContainer/>
        </div>
    )
}