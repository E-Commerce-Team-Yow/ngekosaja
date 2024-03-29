import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { GET_ALL_FASILITAS_KOS, GET_ALL_LISTING_OWNER, GET_ALL_RUMAH_KOS, GET_RUMAH_KOS_USER } from '../../../graphql/queries';
import { GET_ALL_KOTA,GET_ALL_LISTING } from '../../../graphql/queries';
import { useQuery,useMutation } from '@apollo/client';
import { ADD_LISTING, ADD_RUMAH_KOS, APPEND_FASILITAS } from '../../../graphql/mutation';
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
let banyak;
let namafoto;
export default function AddKamarKos() {
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
        nama_kamar : '',
        rumah_kos : '',
        panjang : 0,
        lebar : 0,
        harga_bulanan : 0,
        harga_tahunan : 0,
        keterangan : '',
        jenis : 1,
        fasilitas : []
    });

    const [uploadedFile, setUploadedImage] = useState(null);
    
    //banyakMedia = dataGetAll.getAllMedia.length;

    const onUploadImage = (e) =>  {  
        setUploadedImage(e.target.files[0]);
        console.log(banyak);
        let kode = "L"+String(banyak+1).padStart(3, '0');
        namafoto = kode;
        console.log(namafoto);
    }
    const doUploadImage = () => {    
        const formData = generateFormData({
            foto: uploadedFile,
          });
          
          axios
            .post(
              "https://uploadgambar-ngekosaja.herokuapp.com/upload/"+ namafoto,
              formData,
              {
                headers: { "Content-Type": "multipart/form-data" },
              }
            )
            .then((res) => {
              //success
                console.log(res.data);
                add_kamar_kos({ 
                  variables: { 
                      nama : formState.nama_kamar, 
                      jenis: parseInt(formState.jenis), 
                      harga_bulanan : parseInt(formState.harga_bulanan), 
                      harga_tahunan : parseInt(formState.harga_tahunan), 
                      panjang: parseInt(formState.panjang), 
                      lebar : parseInt(formState.lebar), 
                      rumah_kos: formState.rumah_kos, 
                      keterangan : formState.keterangan,
                      foto : ''+res.data
                    }
                }).then(result=> {
                    let id_rmh = result.data.addListing.id
                    console.log(id_rmh)
                    console.log(result)
                    for(let i=0; i< formState.fasilitas.length; i++){
                        console.log(formState.fasilitas[i]);
                        console.log(append_fasilitas({variables : {id_listing : id_rmh, id_fasilitas_kos : formState.fasilitas[i]}}))
                    }
                })
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
    //deklarasi add Kos
    const [add_kamar_kos, data] = useMutation(ADD_LISTING);
    const [append_fasilitas, data_append] = useMutation(APPEND_FASILITAS);

	//check data user
	useEffect(()=>{
		if(cookies.userLogin){
			setdataUser(cookies.userLogin);
            setValue(cookies.userLogin.id);
		} else{
            window.location.replace(`/loginUser?role=2`);
        }
        if(!data.loading ){
            if(data.data && data.data?.addListing != null){
                NotificationManager.success('', data.data?.addListing.message, 2000);
                setTimeout(() => {
                    window.location.replace("/owner/ListKamarKos");
                }, 2000); 
                
            }else if(data.data && data.data?.addListing == null){
                NotificationManager.error('', "Gagal menambahkan kamar kos", 2000);
            }
        }
	},[!data.loading]);

    console.log(value);

    const {loading:loadAllRumahKos, data:getAllRumahKosUser, error:errorAllRumahKos} = useQuery(GET_RUMAH_KOS_USER, {variables : {id_user:value, type : 1}});
   
    const {loading:loadFasilitas, data:getAllFasilitas, error:errorFasilitas} = useQuery(GET_ALL_FASILITAS_KOS);
    const {loading: loadinglisting, data: dataGetAllListing, error: errorlisting} = useQuery(GET_ALL_LISTING, {variables : {vmin: -1, vmax: -1}});

    if(loadAllRumahKos){
        return "Loading..."
    }
    if(errorAllRumahKos){
        return "Error..."
    }

    
    if(loadinglisting){
        return "Loading..."
    }
    if(errorlisting){
        return "Error..."
    }
    banyak = dataGetAllListing.getAllListing.length;
    console.log(banyak);

    return (
        <div>   
            {
                dataUser ?
                <div>
                        <Button variant="primary" onClick={handleShow} className="btnOwner float-right">
                            Tambah Kamar Kos
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header >
                                <button type="button" className="close" onClick={handleClose}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </Modal.Header>
                            <div className="container p-4">
                                <h4>Tambah Kamar Kos</h4>
                                <hr/>
                                <div className="row">
                                    <div className="col-12">
                                    <form id="quickForm"
                                            onSubmit={e => {
                                                e.preventDefault();
                                                    console.log(formState);
                                                    doUploadImage();
                                                    
                                                }}
                                        
                                        >
                                            <div className="form-group">
                                                <label htmlFor="name_kos">Rumah Kos</label>
                                                <select name="rumah_kos" id="rumah_kos" className="form-control" 
                                            
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
                                                <label>Fasilitas Kos</label>
                                            <select className="form-select form-control" multiple aria-label="multiple select example"
                                                name='fasilitas[]'
                                            onChange={(e) =>

                                               // console.log(e.target.options.selectedIndex)

                                               {
                                                var options = e.target.options;
                                                var value = [];
                                                for (var i = 0, l = options.length; i < l; i++) {
                                                  if (options[i].selected) {
                                                    value.push(options[i].value);
                                                  }
                                                }

                                                 setFormState({
                                                ...formState,
                                                fasilitas: value
                                                })
                                               }
                                            }
                                            
                                            >
                                                 {
                                                    getAllFasilitas && (
                                                        getAllFasilitas.getAllFasilitasKos.map(fasilitas => 
                                                            <option value={fasilitas.id} key={fasilitas.id}>{fasilitas.nama} 
                                                            </option>
                                                        )
                                                    )
                                                }   
                                                </select>
                                            </div>




                                            <div className="form-group">
                                                <label htmlFor="name_kos">Nama Kamar</label>
                                                <input type="text" className="form-control" id="nama_kamar"
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
                                                    <label htmlFor="name_kos">Harga Tahunan</label>
                                                    <input type="number" className="form-control" id="hrgBulanan"
                                                        onChange={(e) =>
                                                            setFormState({
                                                            ...formState,
                                                            harga_bulanan: e.target.value
                                                            })
                                                        }
                                                    placeholder="500000" name="hrgTahunan" />
                                                </div>
                                                <div className="form-group col-6">
                                                    <label htmlFor="name_kos">Harga Bulanan</label>
                                                    <input type="number" className="form-control" id="hrgTahunan"
                                                        onChange={(e) =>
                                                            setFormState({
                                                            ...formState,
                                                            harga_tahunan: e.target.value
                                                            })
                                                        }
                                                    placeholder="1200000" name="hrgBulanan" />
                                                </div>


                                               


                                            </div>
                                            <div className="form-group">
                                                <label>Keterangan</label>
                                                <CKEditor
                                                        editor={ ClassicEditor }
                                                        data="<p>Hello from CKEditor 5!</p>"
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