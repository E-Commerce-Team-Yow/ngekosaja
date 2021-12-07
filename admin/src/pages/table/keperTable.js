import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { DELRES_KEPER } from '../../graphql/mutation';
import { GET_ALL_KEPER} from '../../graphql/queries';
import Footer from '../Footer';
import Header from '../Header';
import SideNav from '../SideNav';
import { Link, useRouteMatch } from 'react-router-dom';

const KeperTable = () => {
    let { path, url } = useRouteMatch();
    console.log(url);
    const script = document.createElement("script");
    script.src = `../../js/content.js`;
    script.async = true;

    document.body.appendChild(script);

    const {loading, data: dataGetAll, error} = useQuery(GET_ALL_KEPER);
    const [delKeper, data] = useMutation(DELRES_KEPER);
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
                    <h1>Tabel Ketentuan Peraturan</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active">Tabel Ketentuan Peraturan</li>
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
                        <div className="col-2">
                        <Link to={`${url}/addKeper`} replace>
                          <button type="button" className="btn btn-success btn-block btn-sm"><i className="fa fa-plus mr-1" />Tambah Fasilitas</button>
                        </Link>
                        </div>
                        </div>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body">
                        <table id="example1" className="table table-bordered table-striped">
                          <thead>
                            <tr>
                                <th>Tipe</th>
                                <th>Isi</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                          {
                            dataGetAll && (
                              dataGetAll.getAllKeper.map(keper => 
                              <tr key={keper.id}>
                                {keper.tipe == 1 
                                ? <td><span className="badge badge-pill badge-info">Ketentuan</span></td>
                                : <td><span className="badge badge-pill badge-warning">Peraturan</span></td>
                                }
                                <td>{keper.isi}</td>
                                {keper.status == 1 
                                ? <td><span className="badge badge-pill badge-success">Aktif</span></td>
                                
                                : <td><span className="badge badge-pill badge-danger">Non-aktif</span></td>
                                }
                                <td style={{width: 10+'%'}}>  
                                  <div className="row text-center">
                                    <div className="col-sm-6">
                                      <div className="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
                                        <input type="checkbox" defaultChecked={keper.status == 1 ? true : false} className="custom-control-input" id={"customSwitch1"+ keper.id} 
                                        onClick={() => {
                                          delKeper({ variables: { id: keper.id }, refetchQueries:[{query: GET_ALL_KEPER}] });
                                        }}
                                        />
                                        <label className="custom-control-label" htmlFor={"customSwitch1"+ keper.id}></label>
                                      </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <Link to={`/admin/edit?id=${keper.id}&edit=fasilitas`} replace><i className="nav-icon fas fa-edit" /></Link>
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
                                <th>Tipe</th>
                                <th>Isi</th>
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
export default KeperTable;
