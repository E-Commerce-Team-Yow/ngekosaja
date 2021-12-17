import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { GET_JUM_RUMAH_KOS_USER, GET_RUMAH_KOS_USER, GET_JUM_LISTING_PEMILIK, GET_ONE_RUMAH_KOS, } from '../../../graphql/queries';
import { useQuery,useMutation } from '@apollo/client';
import { ADD_LISTING, ADD_RUMAH_KOS } from '../../../graphql/mutation';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function LaporanRumahKos() {
    const script = document.createElement("script");
    script.src = `../../../js/validation.js`;
    script.async = true;
    document.body.appendChild(script);

	const [cookies, setCookie, removeCookie] = useCookies(['userLogin']);
	const [dataUser,setdataUser] = useState(null);
    const [value,setValue] = useState(null);

   

    //deklarasi add Kos
    const [add_kamar_kos, data] = useMutation(ADD_LISTING);

    const {loading:loadjumRumahKos, data: getJumlahRumahKos,error:errorjumRumahKos} = useQuery(GET_JUM_RUMAH_KOS_USER, {variables : {id_user : value}});
    const {loading:loadjumListing, data:getJumlahListing, error:errorjumListing} = useQuery(GET_JUM_LISTING_PEMILIK, {variables : {id_user : value}});

    const {loading:loadAllRumahKosUser, data:getAllRumahKosUser, error:errorAllRumahKosUser} = useQuery(GET_RUMAH_KOS_USER, {variables : {id_user:value, type : 1}});
    


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


      console.log(dataChart);




    function funcSetData(id){
        let kamar_sisa = null;
        let total_kamar = null;
        let dt = getAllRumahKosUser.getAllRumahKosUser;

        for(let i=0; i< dt.length; i++){
            if(dt[i].id == id){
                total_kamar = parseInt(dt[i].total_kamar);
                kamar_sisa = parseInt(dt[i].sisa_kamar);
            }
        }

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
                                            <a href="supplier" className="small-box-footer">Info lengkap <i className="fa fa-arrow-circle-right" /></a>
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
                                    <center className='mb-2'>Room Availablity</center>
                                    <Doughnut data={dataChart} />
                            </div>
                            <div className='col-6 chart'>
                                    <Doughnut data={dataChart} />
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