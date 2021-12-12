import { useMutation, useQuery } from '@apollo/client';
import React, {useEffect} from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import { GET_ALL_KOTA} from '../../graphql/queries';
import Footer from '../Footer';
import Header from '../Header';
import SideNav from '../SideNav';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const KotaTable = () => {
    let { path, url } = useRouteMatch();
    console.log(url);
    const script = document.createElement("script");
    script.src = `../../js/content.js`;
    script.async = true;

    document.body.appendChild(script);

    // useEffect(() => {
    //   if(!data.loading && data.data?.delresKOTA){
    //     NotificationManager.success('', data.data?.delresKOTA.message, 2000);
    //   }
    // }, [!data.loading])
  
    const {loading, data: dataGetAll, error} = useQuery(GET_ALL_KOTA);
    if(loading){
      return "Loading..."
    }
    if(error){
      return "Error..."
    }
    return (
      <div>
        <Header/>
        <SideNav/>
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1>Tabel Kota</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active">Tabel Kota</li>
                    </ol>
                  </div>
                </div>
              </div>{/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    {/* /.card */}
                    <div className="card">
                      <div className="card-header">
                        <div className="row">
                            <div className="col-10">
                                <h3 className="card-title">Tabel</h3>
                            </div>
                        </div>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body">
                        <table id="example1" className="table table-bordered table-striped">
                          <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Gambar Kota</th>
                            </tr>
                          </thead>
                          <tbody>
                          {
                            dataGetAll && (
                              dataGetAll.getAllKota.map(kota => 
                              <tr key={kota.id}>
                                <td>{kota.nama}</td>
                                <td>{kota.gambar}</td>
                                
                                <td style={{width: 10+'%'}}>  
                                  <div className="row text-center">
                                    <div className="col-sm-6">
                                    </div>
                                    <div className="col-sm-6">
                                      <Link to={`${url}/actionKota?act=edit&id=${kota.id}&obj=kota`} replace><i className="nav-icon fas fa-edit" /></Link>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              )
                            )
                          }
                          </tbody>
                          <tfoot>
                            <tr>
                                <th>Nama</th>
                                <th>Gambar Kota</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container-fluid */}
            </section>
            {/* /.content */}
          </div>
          <Footer/>
          <NotificationContainer/>
          {/* <Switch>
            
          </Switch> */}
      </div>
    )
  
}
export default KotaTable;
