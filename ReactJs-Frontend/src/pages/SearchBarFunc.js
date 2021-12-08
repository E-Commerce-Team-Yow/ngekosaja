import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { GET_ALL_FASILITAS_KOS, GET_ALL_KOTA, GET_ALL_LISTING, GET_ALL_RUMAH_KOS } from '../graphql/queries';
import Loading from './Loading';


export const SearchBarFunc = () => {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState('');
    const [arr, setArr] = useState([]);
    const [arrKota, setArrKota] = useState([]);
    const {loading, error, data: dataGetAll} = useQuery(GET_ALL_RUMAH_KOS, {variables: {search: value}});
    const {loading: loadingKota, error: errorKota, data: dataGetAllKota} = useQuery(GET_ALL_KOTA, {variables: {search: value}});
    
    useEffect(() => {
        if(loading){
            return <Loading/>
        }
        else if(loadingKota){
            return <Loading/>
        }
        if(error){
            return "Error..."
        }
        else if(errorKota){
            return "Error..."
        }
        if(value.length >= 2){
            setArr(
                dataGetAll.getAllRumahKos
            );
            setArrKota(
                dataGetAllKota.getAllKota
            );
        }else{
            setArr(
               []
            );
            setArrKota(
                []
             );
        }

    }, [loading, loadingKota, value])

    function change(e){
        setValue(e.target.value)
    }

    function searchKos() {
        if(value.length >= 2){
            window.location.replace(`/search?query=${value}`);
        }
    }

    return (
        <div>
            <form autoComplete="off">
            <div className="autocomplete" style={{width: 300}}>
            <input id="myInput" type="text" placeholder="Masukkan alamat/nama jalan"
                    onChange={change}
            />
                {/* <input name="search" placeholder="Masukkan alamat/nama jalan" type="search"
                /> */}
            </div>
            <div>    
                <ul>
                {
                    arr.length > 0 && value.length >= 2 && (
                        <div className="background-white">
                            Kos di Jalan...
                        </div>
                    )
                }
                {
                    arr && (
                        arr.map(rumah => 
                            <div className="background-white">
                                <li key={rumah.id} id="myInputautocomplete-items" className="autocomplete-items">{rumah.alamat}, {rumah.kota.nama}</li>
                            </div>
                            
                            )
                            )     
                        }
                {
                    arrKota.length > 0 && value.length >= 2 && (
                        <div className="background-white">
                            Kos di Kota...
                        </div>
                    )
                }
                {
                    arrKota && (
                        arrKota.map(kota => 
                            <div className="background-white">
                                <li key={kota.id} id="myInputautocomplete-items" className="autocomplete-items">{kota.nama}</li>
                            </div>
                           
                           )
                           )
                        }
                </ul>
            </div>
            </form>
            <button className="btnn" onClick={searchKos}><i className="ti-search"></i></button>
        </div>
    )
}
