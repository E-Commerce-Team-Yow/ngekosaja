import { useMutation, useQuery } from '@apollo/client';
import React from 'react'
import { DELRES_USER } from '../../graphql/mutation';
import { GET_ALL_USERS } from '../../graphql/queries';
import Header from '../Header';
import SideNav from '../SideNav';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const PromoTable = () => {
  const script = document.createElement("script");
  script.src = `../../js/content.js`;
  script.async = true;
  document.body.appendChild(script);

  const [delUser, data] = useMutation(DELRES_USER);
  const {loading, error, data: dataGetAll} = useQuery(GET_ALL_USERS);
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
                    <h1>Tabel Promo</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active">Tabel Promo</li>
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
                              <th>Jenis</th>
                              <th>NIK</th>
                              <th>No. Telepon</th>
                              <th>Email</th>
                              <th>Jenis Kelamin</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                          {
                            dataGetAll && (
                              dataGetAll.getAllUsers.map(user => 
                              <tr key={user.id}>
                                <td>{user.nama_depan}</td>
                                <td>{user.nama_belakang}</td>
                                <td>{user.nik}</td>
                                <td>{user.no_tlp}</td>
                                <td>{user.email}</td>
                                <td>{user.jenis_kelamin}</td>
                                {user.status == 1 
                                ? <td><span className="badge badge-pill badge-success">Aktif</span></td>
                                
                                : <td><span className="badge badge-pill badge-danger">Non-aktif</span></td>
                                }
                                <td style={{width: 10+'%'}}>  
                                  <div className="row text-center">
                                    <div className="col-sm-6">
                                    <div className="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
                                      <input type="checkbox" defaultChecked={user.status == 1 ? true : false} className="custom-control-input" id={"customSwitch1"+ user.id} 
                                      onClick={() => {
                                        delUser({ variables: { id: user.id }, refetchQueries:[{query: GET_ALL_USERS}] });
                                      }}
                                      />
                                      <label className="custom-control-label" htmlFor={"customSwitch1"+ user.id}></label>
                                    </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <Link to={`/admin/edit?id=${user.id}&edit=fasilitas`} replace><i className="nav-icon fas fa-edit" /></Link>
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
                              <th>Nama Depan</th>
                              <th>Nama Belakang</th>
                              <th>NIK</th>
                              <th>No. Telepon</th>
                              <th>Email</th>
                              <th>Jenis Kelamin</th>
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

export default PromoTable;