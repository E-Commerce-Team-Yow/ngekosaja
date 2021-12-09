import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { GET_ALL_KOTA } from '../../../graphql/queries';
import { useQuery,useMutation } from '@apollo/client';
import { UPDATE_RUMAH_KOS } from '../../../graphql/mutation';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NotificationManager } from 'react-notifications';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';


export default function EditRumahKos({rumah_kos}) {
    const script = document.createElement("script");
    script.src = `../../../js/validation.js`;
    script.async = true;
    document.body.appendChild(script);

	const [cookies, setCookie, removeCookie] = useCookies(['userLogin']);
	const [dataUser,setdataUser] = useState(null);
    const {loading, data: getAllKota, error} = useQuery(GET_ALL_KOTA);
   
  
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
    });


    //deklarasi add Kos
    const [edit_rumah_kos, data] = useMutation(UPDATE_RUMAH_KOS);

	//check data user
	useEffect(()=>{
		if(cookies.userLogin){

            setFormState({
                name_kos: rumah_kos.nama,
                kode_pos: rumah_kos.kode_pos,
                alamat_kos : rumah_kos.alamat,
                id_kota: rumah_kos.kota.id,
               id_user : cookies.userLogin.id,
               keterangan : rumah_kos.keterangan
            });

			setdataUser(cookies.userLogin);

		} 
        if(!data.loading ){
            if(data.data && data.data?.updateRumahKos != null){
                NotificationManager.success('', data.data?.updateRumahKos.message, 2000);
                
            }else if(data.data && data.data?.updateRumahKos == null){
                NotificationManager.error('', "Gagal menambahkan rumah kos", 2000);
            }
        }
	},[!data.loading]);

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
                <div >
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
                                <h4>Edit Rumah Kos</h4>
                                <hr/>
                                <div className="row">
                                    <div className="col-12">
                                    <form id="quickForm"
                                            onSubmit={e => {
                                                e.preventDefault();
                                                    console.log(formState);
                                                    console.log( edit_rumah_kos({ variables: { id : rumah_kos.id, nama : formState.name_kos, alamat : formState.alamat_kos, id_kota : parseInt(formState.id_kota), kode_pos : formState.kode_pos, total_kamar:rumah_kos.total_kamar, sisa_kamar: rumah_kos.sisa_kamar, keterangan: formState.keterangan }}));
                                                    setTimeout(() => {
                                                        window.location.replace("/owner/ListRumahKos");
                                                    }, 2000); 
                                                }}
                                        
                                        >
                                            <div className="form-group">
                                                <label htmlFor="name_kos">Nama Kos</label>
                                                <input type="text" className="form-control" id="name_kos"
                                                    defaultValue={rumah_kos.nama}
                                                    onChange={(e) =>
                                                        setFormState({
                                                        ...formState,
                                                        name_kos: e.target.value
                                                        })
                                                    }
                                                
                                                placeholder="kos SUka Suka" name="nama_kos" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name_kos">Alamat Kos</label>
                                                <input type="text" className="form-control" id="alamat_kos" 
                                                 defaultValue={rumah_kos.alamat}
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
                                                 defaultValue={rumah_kos.kode_pos}
                                                    onChange={(e) =>
                                                        setFormState({
                                                        ...formState,
                                                        kode_pos: e.target.value
                                                        })
                                                    }
                                                placeholder="xxxxxx" name="kode_pos" />
                                            </div>
                                            <div className="form-group">
                                                <label>Keterangan</label>
                                                <CKEditor
                                                        editor={ ClassicEditor }
                                                        data={rumah_kos.keterangan}
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
                                            defaultValue={rumah_kos.kota.id}
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
                                                              // rumah_kos.kota.id == kota.id?
                                                               
                                                             //   :
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
                                            <button type="submit" className="btnOwner w-100 p-3">Ubah</button>
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