import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { GET_ALL_KEPER, GET_ALL_KOTA } from '../../../graphql/queries';
import { useQuery,useMutation } from '@apollo/client';
import { ADD_RUMAH_KOS, APPEND_KEPER } from '../../../graphql/mutation';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import { NotificationManager } from 'react-notifications';

export default function AddRumahKos() {
    const script = document.createElement("script");
    script.src = `../../../js/validation.js`;
    script.async = true;
    document.body.appendChild(script);

	const [cookies, setCookie, removeCookie] = useCookies(['userLogin']);
	const [dataUser,setdataUser] = useState(null);
    const {loading:loadKota, data: getAllKota, error:errorKota} = useQuery(GET_ALL_KOTA);
    const {loading:loadingKeper, data : getKeper, error:errorKeper} = useQuery(GET_ALL_KEPER);
   
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
                
            }else if(data.data && data.data?.addRumahKos == null){
                NotificationManager.error('', "Gagal menambahkan rumah kos", 2000);
            }
        }
	},[!data.loading]);

    if(loadKota && loadingKeper){
        return "Loading..."
    }
    if(errorKota && errorKeper){
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
                                                    add_rumah_kos({ variables: { id_user : formState.id_user, nama : formState.name_kos, alamat : formState.alamat_kos, id_kota : parseInt(formState.id_kota), kode_pos : formState.kode_pos, total_kamar:0, sisa_kamar: 0, keterangan: formState.keterangan }}).then(result =>
                                                        {
                                                           let id_rmh = result.data.addRumahKos.id

                                                             for(let i=0; i< formState.keper.length; i++){
                                                                 console.log(formState.keper[i]);
                                                                console.log(apend_keper({variables : {id_rumah_kos : id_rmh, id_keper : formState.keper[i]}}))
                                                             }
                                                        }   
                                                        
                                                    );
                                                  
                                                  
                                                   setTimeout(() => {
                                                        window.location.replace("/owner/ListRumahKos");
                                                    }, 2000); 
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
                                            }
                                            
                                            >
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
                                                <input type="file" className="form-control" placeholder="kos SUka Suka" name="mediaKos" />
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