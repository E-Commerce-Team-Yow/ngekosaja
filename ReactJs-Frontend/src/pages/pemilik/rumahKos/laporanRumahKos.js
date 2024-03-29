import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { GET_JUM_RUMAH_KOS_USER, GET_RUMAH_KOS_USER, GET_JUM_LISTING_PEMILIK, GET_ONE_RUMAH_KOS, GET_ALL_LISTING_OWNER, GET_ALL_TESTIMONI, GET_ALL_TESTIMONI_RUMAH_KOS} from '../../../graphql/queries';
import { useQuery,useMutation, useLazyQuery } from '@apollo/client';
import { ADD_LISTING, ADD_RUMAH_KOS } from '../../../graphql/mutation';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { Chart as ChartJS, ArcElement,RadialLinearScale, Tooltip, Legend } from 'chart.js';
import { Doughnut, PolarArea } from 'react-chartjs-2';


import DataTable from 'react-data-table-component';

ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale);


export default function LaporanRumahKos() {
    const script = document.createElement("script");
    script.src = `../../../js/validation.js`;
    script.async = true;
    document.body.appendChild(script);

	const [cookies, setCookie, removeCookie] = useCookies(['userLogin']);
	const [dataUser,setdataUser] = useState(null);
    const [value,setValue] = useState(null);

    const [dataRumah, setDataRumah] = useState([]);

    const colors =  [
        "#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177" ,"#0d5ac1" ,
        "#f205e6" ,"#1c0365" ,"#14a9ad" ,"#4ca2f9" ,"#a4e43f" ,"#d298e2" ,"#6119d0",
        "#d2737d" ,"#c0a43c" ,"#f2510e" ,"#651be6" ,"#79806e" ,"#61da5e" ,"#cd2f00" ,
        "#9348af" ,"#01ac53" ,"#c5a4fb" ,"#996635","#b11573" ,"#4bb473" ,"#75d89e" ,
        "#2f3f94" ,"#2f7b99" ,"#da967d" ,"#34891f" ,"#b0d87b" ,"#ca4751" ,"#7e50a8" ,
        "#c4d647" ,"#e0eeb8" ,"#11dec1" ,"#289812" ,"#566ca0" ,"#ffdbe1" ,"#2f1179" ,
        "#935b6d" ,"#916988" ,"#513d98" ,"#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d",
        "#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977",
        "#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b",
        "#5be4f0", "#57c4d8", "#a4d17a", "#225b8", "#be608b", "#96b00c", "#088baf",
        "#f158bf", "#e145ba", "#ee91e3", "#05d371", "#5426e0", "#4834d0", "#802234",
        "#6749e8", "#0971f0", "#8fb413", "#b2b4f0", "#c3c89d", "#c9a941", "#41d158",
        "#fb21a3", "#51aed9", "#5bb32d", "#807fb", "#21538e", "#89d534", "#d36647",
        "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
        "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
        "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#21538e", "#89d534", "#d36647",
        "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
        "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
        "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#9cb64a", "#996c48", "#9ab9b7",
        "#06e052", "#e3a481", "#0eb621", "#fc458e", "#b2db15", "#aa226d", "#792ed8",
        "#73872a", "#520d3a", "#cefcb8", "#a5b3d9", "#7d1d85", "#c4fd57", "#f1ae16",
        "#8fe22a", "#ef6e3c", "#243eeb", "#1dc18", "#dd93fd", "#3f8473", "#e7dbce",
        "#421f79", "#7a3d93", "#635f6d", "#93f2d7", "#9b5c2a", "#15b9ee", "#0f5997",
        "#409188", "#911e20", "#1350ce", "#10e5b1", "#fff4d7", "#cb2582", "#ce00be",
        "#32d5d6", "#17232", "#608572", "#c79bc2", "#00f87c", "#77772a", "#6995ba",
        "#fc6b57", "#f07815", "#8fd883", "#060e27", "#96e591", "#21d52e", "#d00043",
        "#b47162", "#1ec227", "#4f0f6f", "#1d1d58", "#947002", "#bde052", "#e08c56",
        "#28fcfd", "#bb09b", "#36486a", "#d02e29", "#1ae6db", "#3e464c", "#a84a8f",
        "#911e7e", "#3f16d9", "#0f525f", "#ac7c0a", "#b4c086", "#c9d730", "#30cc49",
        "#3d6751", "#fb4c03", "#640fc1", "#62c03e", "#d3493a", "#88aa0b", "#406df9",
        "#615af0", "#4be47", "#2a3434", "#4a543f", "#79bca0", "#a8b8d4", "#00efd4",
        "#7ad236", "#7260d8", "#1deaa7", "#06f43a", "#823c59", "#e3d94c", "#dc1c06",
        "#f53b2a", "#b46238", "#2dfff6", "#a82b89", "#1a8011", "#436a9f", "#1a806a",
        "#4cf09d", "#c188a2", "#67eb4b", "#b308d3", "#fc7e41", "#af3101", "#ff065",
        "#71b1f4", "#a2f8a5", "#e23dd0", "#d3486d", "#00f7f9", "#474893", "#3cec35",
        "#1c65cb", "#5d1d0c", "#2d7d2a", "#ff3420", "#5cdd87", "#a259a4", "#e4ac44",
        "#1bede6", "#8798a4", "#d7790f", "#b2c24f", "#de73c2", "#d70a9c", "#25b67",
        "#88e9b8", "#c2b0e2", "#86e98f", "#ae90e2", "#1a806b", "#436a9e", "#0ec0ff",
        "#f812b3", "#b17fc9", "#8d6c2f", "#d3277a", "#2ca1ae", "#9685eb", "#8a96c6",
        "#dba2e6", "#76fc1b", "#608fa4", "#20f6ba", "#07d7f6", "#dce77a", "#77ecca"];

    //deklarasi add Kos
    const [add_kamar_kos, data] = useMutation(ADD_LISTING);

    const {loading:loadjumRumahKos, data: getJumlahRumahKos,error:errorjumRumahKos} = useQuery(GET_JUM_RUMAH_KOS_USER, {variables : {id_user : value}});
    const {loading:loadjumListing, data:getJumlahListing, error:errorjumListing} = useQuery(GET_JUM_LISTING_PEMILIK, {variables : {id_user : value}});

    const {loading:loadAllRumahKosUser, data:getAllRumahKosUser, error:errorAllRumahKosUser} = useQuery(GET_RUMAH_KOS_USER, {variables : {id_user:value, type : 1}});
    
    const {loading:loadAllListing, data:getAllListing, error:errorAllListing} = useQuery(GET_ALL_LISTING_OWNER, {variables: {id_user:value}});

    const {loading:loadTesti, data:getAllTestimoni, error:errorTesti} =  useQuery(GET_ALL_TESTIMONI);

    //const {loading:loadTesti, data:getAllTesti, error:errorTesti} = useQuery(GET_A)

    //check data user
	useEffect(()=>{
		if(cookies.userLogin){
			setdataUser(cookies.userLogin);
            setValue(cookies.userLogin.id);
		} else{
            window.location.replace(`/loginUser?role=2`);
        }

     
      
	},[]);



    const [dataChart, setdataChart] = useState({
        labels: ['Kamar Yang Available', 'Kamar yang Terpakai'],
        datasets: [
          {
            label: '# of Votes',
            data: [0,0],
            backgroundColor: [
                '#ff6600',
                '#0b2474',
              ],
              borderColor: [
                '#c24e00',
                '#050d52',
              ],
            borderWidth: 1,
          },
        ],
      });


    const [dataPolarChart, setDataPolarChart] = useState({
        labels: [],
        datasets: [
          {
            label: '# of Votes',
            data: [],
            backgroundColor: [
              
            ],
            borderWidth: 1,
          },
        ],
      })

      const columns = [
        {
            name: 'Nama',
            selector: row => row.nama,
            sortable: true
        },
        {
            name: 'Harga(bln)',
            selector: row => row.harga_bulanan,
            sortable: true
        },
        {
            name: 'status',
           
            cell: row => row.status == 1 ? <span className="badge badge-info">Available</span> : row.status == 2 ? <span className="badge badge-warning">Terisi</span> :<span className="badge badge-danger">Non Available</span>  
        },
      ];


      console.log(dataChart);


      console.log(getAllListing)

    function funcSetData(id){

        let data_testi = getAllTestimoni.getAllTestimoni;

        let kamar_sisa = null;
        let total_kamar = null;
        let dt = getAllRumahKosUser.getAllRumahKosUser;
        let listings = getAllListing.getAllListingUserOwner

        let kamar_kos = [];
        let nama_kamar_kos =[];
        let nilai_kamar = []
        let ctr =0;
        let ctrNilai = 0;

        for(let i=0; i< dt.length; i++){
            if(dt[i].id == id){
                total_kamar = parseInt(dt[i].total_kamar);
                kamar_sisa = parseInt(dt[i].sisa_kamar);
            }

        
        }

        for(let j=0; j< listings.length; j++){
            if(listings[j].rumah_kos.id == id){
                kamar_kos[ctr] = listings[j];
                ctr++;
            }
        }

    //     const [loadTesti, {called, loading, data}] = useLazyQuery(GET_ALL_TESTIMONI_RUMAH_KOS,{variables : {id_rumah_kos : id}});
    //     if (called && loading) return <p>Loading ...</p>


    //   console.log(loadTesti)

        for(let x =0; x<data_testi.length; x++){
            for(let y=0; y<kamar_kos.length; y++){
                if(kamar_kos[y].id == data_testi[x].listing.id){
                  
                    nilai_kamar[ctrNilai] = data_testi[x].nilai;
                    nama_kamar_kos[ctrNilai] = kamar_kos[y].nama;
                    ctrNilai ++;
                }
            }
        }

        console.log(nama_kamar_kos)
        console.log(nilai_kamar)

       setDataRumah(kamar_kos);

        setdataChart(
            {
                labels: ['Kamar Yang terpakai', 'Kamar yang Avalaible'],
                datasets: [
                  {
                    label: '# of Votes',
                    data: [
                        total_kamar - kamar_sisa
                        , kamar_sisa],
                    backgroundColor: [
                      '#ff6600',
                      '#0b2474',
                    ],
                    borderColor: [
                      '#c24e00',
                      '#050d52',
                    ],
                    borderWidth: 1,
                  },
                ],
              }
         )


         setDataPolarChart({
            labels: nama_kamar_kos,
            datasets: [
              {
                label: '# of Votes',
                data: nilai_kamar,
                backgroundColor: colors,
                borderWidth: 1,
              },
            ],
         })
    }
    

    if(loadjumRumahKos && loadjumListing && loadAllRumahKosUser ){
        return "Loading..."
    }
    if(errorjumRumahKos && errorjumListing && errorAllRumahKosUser ){
        return "Error..."
    }


 
   
    console.log(value);
   
    console.log(getJumlahRumahKos);

    console.log(getJumlahListing);

    return (
        <div>   
            {
                dataUser  && getJumlahListing && getJumlahRumahKos ?
                <section>
                    <div className='container'>
                    <h4>Laporan Rumah Kos</h4>
                    <hr/>
                        <div className='row'>
                        
                                   <div className="col-lg-4 col-xs-12">
                                        <div className="small-box bg-gray">
                                            <div className="inner">
                                                <h3>Penyewa</h3>
                                                <p>kos</p>
                                            </div>
                                            <div className="icon">
                                                 <i className="ion ion-person" />
                                            </div>
                                            <NavLink to="/owner/ListPenyewaKos" className="small-box-footer">Info lengkap <i className="fa fa-arrow-circle-right" /></NavLink>
                                        </div>
                                    </div>
                                   <div className="col-lg-4 col-xs-12">
                                        <div className="small-box bg-red">
                                            <div className="inner">
                                                <h3 >Rumah Kos</h3>
                                                <p className='text-white'><b>{getJumlahRumahKos.getJumlahRumahKos.count +" "}</b>Rumah Kos</p>
                                            </div>
                                            <div className="icon">
                                                 <i className="ion ion-person" />
                                            </div>
                                            <NavLink to="/owner/ListRumahKos" className="small-box-footer">Info lengkap <i className="fa fa-arrow-circle-right" /></NavLink>
                                        </div>
                                    </div>
                                   <div className="col-lg-4 col-xs-12">
                                        <div className="small-box bg-green">
                                            <div className="inner">
                                                <h3>Listing Kos</h3>
                                                <p className='text-white'><b>{getJumlahListing.getJumlahListingPemilik.count +" "}</b>Kos</p>
                                            </div>
                                            <div className="icon">
                                                 <i className="ion ion-person" />
                                            </div>
                                            <NavLink to="/owner/ListKamarKos" className="small-box-footer">Info lengkap <i className="fa fa-arrow-circle-right" /></NavLink>
                                        </div>
                                    </div>

                        </div>
                        <hr/>
                        <div className='row'>
                         
                            <div className='col-12 mb-4'>
                                
                                <select name="kota_kos" id="kota_kos" className="form-control" 
                                            onChange={(e)=>
                                            
                                               funcSetData(e.target.value)
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

                        </div>
                        <div className='row'>
                            <div className='col-6 chart'>
                                    <center className='mb-2'><h6>Room Availablity</h6></center>
                                    <Doughnut data={dataChart} />
                            </div>
                            <div className='col-6 chart detailKamar' >
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='card'>
                                            <DataTable
                                                columns={columns}
                                                data={dataRumah}
                                            // action = {actionsMemo}
                                            //   pagination
                                            
                                            />  
                                        </div>
                                    </div>
                                </div>
                                <div className='row p-4 polar'>
                                    
                                    <div className='col-9'>
                                        <center><h6>Rating</h6></center>
                                        <PolarArea data={dataPolarChart} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        : 
        <div> </div>
        }
      
        </div>
    )
}