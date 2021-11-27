import { useMutation, useQuery } from '@apollo/client';
import React from 'react'
import { useHistory } from 'react-router';
import { DELRES_RUMAH_KOS } from '../../graphql/mutation';
import { GET_ALL_RUMAH_KOS } from '../../graphql/queries'
import Footer from '../Footer';
import Header from '../Header';
import SideNav from '../SideNav';


const RumahTable = () => {
    const script = document.createElement("script");
    script.src = `../../js/content.js`;
    script.async = true;

    document.body.appendChild(script);

    const {loading, data: dataGetAll, error} = useQuery(GET_ALL_RUMAH_KOS);
    const [delRumah, data] = useMutation(DELRES_RUMAH_KOS);
    if (loading) {
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
                    <h1>Tabel Rumah Kos</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active">Tabel Rumah Kos</li>
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
                        <h3 className="card-title">Tabel</h3>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body">
                        <table id="example1" className="table table-bordered table-striped">
                          <thead>
                            <tr>
                              <th>Nama</th>
                              <th>Alamat</th>
                              <th>Kota</th>
                              <th>Provinsi</th>
                              <th>Total Kamar</th>
                              <th>Sisa Kamar</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                          {
                            dataGetAll && (
                              dataGetAll.getAllRumahKos.map(rumah => 
                              <tr key={rumah.id}>
                                <td>{rumah.nama}</td>
                                <td>{rumah.alamat}</td>
                                <td>{rumah.kota}</td>
                                <td>{rumah.provinsi}</td>
                                <td>{rumah.total_kamar}</td>
                                <td>{rumah.sisa_kamar}</td>
                                {rumah.status == 1 
                                ? <td><span className="badge badge-pill badge-success">Aktif</span></td>
                                : <td><span className="badge badge-pill badge-danger">Non-aktif</span></td>
                                }
                                <td style={{width: 10+'%'}}>
                                  <div className="row text-center">
                                    <div className="col-sm-12">
                                    <div className="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
                                      <input type="checkbox" defaultChecked={rumah.status == 1 ? true : false} className="custom-control-input" id={"customSwitch1"+ rumah.id} 
                                      onClick={() => {
                                        delRumah({ variables: { id: rumah.id }, refetchQueries:[{query: GET_ALL_RUMAH_KOS}] });
                                      }}
                                      />
                                      <label className="custom-control-label" htmlFor={"customSwitch1"+ rumah.id}></label>
                                    </div>
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
                              <th>Alamat</th>
                              <th>Kota</th>
                              <th>Provinsi</th>
                              <th>Total Kamar</th>
                              <th>Sisa Kamar</th>
                              <th>Status</th>
                              <th>Action</th>
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
      </div>
    )
  
}
export default RumahTable;
