import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { GET_ALL_KEPER, GET_ALL_KOTA, GET_ALL_RUMAH_KOS } from '../../../graphql/queries';
import { useQuery,useMutation } from '@apollo/client';
import { ADD_RUMAH_KOS, APPEND_KEPER } from '../../../graphql/mutation';
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
let banyakRumah;
let namafoto;


export default function AddRumahKos() {
    const script = document.createElement("script");
    script.src = `../../../js/validation.js`;
    script.async = true;
    document.body.appendChild(script);

	const [cookies, setCookie, removeCookie] = useCookies(['userLogin']);
	const [dataUser,setdataUser] = useState(null);
    const {loading:loadKota, data: getAllKota, error:errorKota} = useQuery(GET_ALL_KOTA);
    const {loading:loadingKeper, data : getKeper, error:errorKeper} = useQuery(GET_ALL_KEPER);
    const {loading:loadingRumah, data: getRumah, error: errorRumah} = useQuery(GET_ALL_RUMAH_KOS);
    console.log(getRumah);
    //banyakRumah = getRumah.getAllRumahKos.length
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [formState, setFormState] = useState({
       name_kos: '',
        kode_pos: '',
        alamat_kos : '',
        id_kota: 1,
        id_user : '',
        keterangan : '',
        keper : []
    });

    const [uploadedFile, setUploadedImage] = useState(null);
    
    //banyakMedia = dataGetAll.getAllMedia.length;

    const onUploadImage = (e) =>  {  
        setUploadedImage(e.target.files[0]);
        banyakRumah = getRumah.getAllRumahKos.length;
        console.log(banyakRumah);
        let kode = "R"+String(banyakRumah+1).padStart(3, '0');
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
               
                    add_rumah_kos({ 
                        variables: { 
                            id_user : formState.id_user, 
                            nama : formState.name_kos, 
                            alamat : formState.alamat_kos, 
                            id_kota : parseInt(formState.id_kota), 
                            kode_pos : formState.kode_pos, 
                            total_kamar:0, 
                            sisa_kamar: 0, 
                            keterangan: formState.keterangan,
                            foto: ''+res.data 
                        }}).then(result =>{
                        let id_rmh = result.data.addRumahKos.id
                            console.log(result)
                            for(let i=0; i< formState.keper.length; i++){
                                console.log(formState.keper[i]);
                                console.log(apend_keper({variables : {id_rumah_kos : id_rmh, id_keper : formState.keper[i]}}))
                            }
                        }   )
                
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
    const [add_rumah_kos, data] = useMutation(ADD_RUMAH_KOS);
    //deklarasi add peraturan
    const [apend_keper, dataKeper] = useMutation(APPEND_KEPER);

	//check data user
	useEffect(()=>{
		if(cookies.userLogin){

            setFormState({
                name_kos: '',
                kode_pos: '',
                alamat_kos : '',
                id_kota: 1,
                id_user : cookies.userLogin.id,
                keterangan : '',
                keper : []
            });
			setdataUser(cookies.userLogin);
		} 
        if(!data.loading ){
            if(data.data && data.data?.addRumahKos != null){
                NotificationManager.success('', data.data?.addRumahKos.message, 2000);
                // setTimeout(() => {
                //     window.location.replace("/owner/ListRumahKos");
                // }, 2000);
                
            }else if(data.data && data.data?.addRumahKos == null){
                NotificationManager.error('', "Gagal menambahkan rumah kos", 2000);
            }
        }
	},[!data.loading]);

    if(loadKota && loadingKeper && loadingRumah){
        return "Loading..."
    }
    if(errorKota && errorKeper && errorRumah){
        return "Error..."
    }
    
    return (
        <div>   
            {
                dataUser ?
                <div>
                        <Button variant="primary" onClick={handleShow} className="btnOwner float-right">
                            Tambah Rumah Kos
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header >
                                <button type="button" className="close" onClick={handleClose}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </Modal.Header>
                            <div className="container p-4">
                                <h4>Tambah Rumah Kos</h4>
                                <hr/>
                                <div className="row">
                                    <div className="col-12">
                                    <form id="quickForm"
                                            onSubmit={e => {
                                                e.preventDefault();
                                                    console.log(formState);
                                                    doUploadImage();
                                                    //  
                                                }}
                                        
                                        >
                                            <div className="form-group">
                                                <label htmlFor="name_kos">Nama Kos</label>
                                                <input type="text" className="form-control" id="nama_kos"
                                                    onChange={(e) =>
                                                        setFormState({
                                                        ...formState,
                                                        name_kos: e.target.value
                                                        })
                                                    }
                                                
                                                placeholder="Kos Suka Suka" name="nama_kos" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name_kos">Alamat Kos</label>
                                                <input type="text" className="form-control" id="alamat_kos"
                                                    onChange={(e) =>
                                                        setFormState({
                                                        ...formState,
                                                        alamat_kos: e.target.value
                                                        })
                                                    }
                                                placeholder="Jl Saya Senang" name="alamat_kos" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name_kos">Kode Pos</label>
                                                <input type="text" className="form-control" id="kode_kos"
                                                    onChange={(e) =>
                                                        setFormState({
                                                        ...formState,
                                                        kode_pos: e.target.value
                                                        })
                                                    }
                                                placeholder="xxxxxx" name="kode_pos" />
                                            </div>

                                            <div className="form-group">
                                                <label>Peraturan Rumah Kos</label>
                                                <select className="form-select form-control" multiple aria-label="multiple select example"
                                                    name='keper[]'
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
                                                            keper: value
                                                            })
                                                        }
                                                // setFormState({
                                                // ...formState,
                                                // keper: e.target.value
                                                // })
                                                }>
                                                    {
                                                        getKeper && (
                                                            getKeper.getAllKeper.map(keper => 
                                                                <option value={keper.id} key={keper.id}>{keper.isi} 
                                                                
                                                                    - {keper.tipe == 1? "Ketentuan" : "Peraturan"}
                                                                
                                                                </option>
                                                            )
                                                        )
                                                    }   
                                                </select>    
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
                                                <label htmlFor="kota_kos">Kota</label>
                                            <select name="kota_kos" id="kota_kos" className="form-control" 
                                            
                                            onChange={(e) =>
                                                setFormState({
                                                ...formState,
                                                id_kota: e.target.value
                                                })
                                            }
                                            >
                                                {
                                                    getAllKota && (
                                                        getAllKota.getAllKota.map(kota => 
                                                            <option value={kota.id} key={kota.id}>{kota.nama}</option>
                                                        )
                                                    )
                                                }
                                            </select>
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