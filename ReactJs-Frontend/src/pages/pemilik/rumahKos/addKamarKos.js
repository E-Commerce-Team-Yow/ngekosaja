import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { GET_ALL_KOTA, GET_ALL_LISTING_OWNER, GET_ALL_RUMAH_KOS, GET_RUMAH_KOS_USER } from '../../../graphql/queries';
import { useQuery,useMutation } from '@apollo/client';
import { ADD_LISTING, ADD_RUMAH_KOS } from '../../../graphql/mutation';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import { NotificationManager } from 'react-notifications';

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
    });


    //deklarasi add Kos
    const [add_kamar_kos, data] = useMutation(ADD_LISTING);

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
                
            }else if(data.data && data.data?.addListing == null){
                NotificationManager.error('', "Gagal menambahkan rumah kos", 2000);
            }
        }
	},[!data.loading]);

    console.log(value);

    const {loading, data:getAllRumahKosUser, error} = useQuery(GET_RUMAH_KOS_USER, {variables : {id_user:value}});
   

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
                                                    console.log( add_kamar_kos({ variables: { nama : formState.nama_kamar, jenis: parseInt(formState.jenis), harga_bulanan : parseInt(formState.harga_bulanan), harga_tahunan : parseInt(formState.harga_tahunan), panjang: parseInt(formState.panjang), lebar : parseInt(formState.lebar), rumah_kos: formState.rumah_kos, keterangan : formState.keterangan}}));
                                                    setTimeout(() => {
                                                        window.location.replace("/owner/ListKamarKos");
                                                    }, 2000); 
                                                }}
                                        
                                        >
                                            <div className="form-group">
                                                <label htmlFor="name_kos">Rumah Kos</label>
                                                <select name="kota_kos" id="kota_kos" className="form-control" 
                                            
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
                                                    onChange={(e) =>
                                                        setFormState({
                                                        ...formState,
                                                        nama_kamar: e.target.value
                                                        })
                                                    }
                                                
                                                placeholder="Kamar 1" name="nama_kamar" />
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
                                                    <label htmlFor="name_kos">Harga Taunan</label>
                                                    <input type="number" className="form-control" id="hrgBulanan"
                                                        onChange={(e) =>
                                                            setFormState({
                                                            ...formState,
                                                            harga_bulanan: e.target.value
                                                            })
                                                        }
                                                    placeholder="500000" name="hrgBulanan" />
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
                                                    placeholder="1200000" name="hrgTahunan" />
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