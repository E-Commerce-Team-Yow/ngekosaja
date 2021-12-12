import React, {useEffect, useState} from 'react';
import Footer from './Footer';
import SkeletonCard from './SkeletonCard';
import Navbar from './Navbar';
import Header from './Header';
import Source from './Source';
import { GET_ALL_KOTA} from '../graphql/queries';
import { useMutation, useQuery } from '@apollo/client';
import { Link, useRouteMatch } from 'react-router-dom';

export default function FilterKamarKos(props) { 
    const script = document.createElement("script");
    script.src = `../../js/validation.js`;
    script.async = true;
    document.body.appendChild(script);

	useEffect(()=>{
        
	},[]);

    // const [vmin, setVmin] = useState("");
    // const [vmax, setVmax] = useState("");
    const [inputMinMax, setInputMinMax] = useState({
        vmin : '',
        vmax : '',
    });
  
    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.onChange(inputMinMax)
        alert(`min price ${inputMinMax.vmin} - max price ${inputMinMax.vmax}`)
    }
    
    const {loading, data: allkota, error} = useQuery(GET_ALL_KOTA);
    if(loading){
      return "Loading..."
    }
    if(error){
      return "Error..."
    }
    console.log(allkota)
    return(
        <div>
            <div className="modal fade" id="modalFilter" tabIndex={-1} role="dialog" aria-labelledby="modalFilterLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-header">
                            <h4 className="modal-title">Filter</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                            <div className="col-10 text-left">
                                <h6>Kota</h6>
                            </div>
                            <div className="col-2" />
                            <div className="col-1" />
                            <div className="col-10 text-left">
                                <div className="row">
                                    {
                                        allkota && (
                                            allkota.getAllKota.map(kota =>
                                                <div className="col-3 form-check jarak-row">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlfor="exampleCheck1">{kota.nama}</label>
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                            </div>
                            <div className="col-2" />
                            </div>
                            <div className="row">
                            <div className="col-10 text-left">
                                <h6>harga</h6>
                            </div>
                            <div className="col-2" />
                            
                            <div className="col-10 text-left">
                                <div className="row">
                                <div className="form-check">
                                    <input type="number" name id className="range" placeholder="harga min" value={inputMinMax.vmin} 
                                    onChange={(e) =>
                                        setInputMinMax({
                                        ...inputMinMax,
                                        vmin: e.target.value
                                        })
                                    }/> -
                                    <input type="number" name id className="range" placeholder="harga max" value={inputMinMax.vmax}
                                    onChange={(e) =>
                                        setInputMinMax({
                                        ...inputMinMax,
                                        vmax: e.target.value
                                        })
                                    }/>
                                    {/* <input type="number" name id className="range" placeholder="harga max" value={inputMinMax.vmax} onChange={e => setVmax(e.target.value)} /> */}
                                </div>
                                </div>
                            </div>
                            <div className="col-2" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <input type="submit" className="btn btn-primary" defaultValue="Save Changes" />
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>

    )

}