import { useMutation, useQuery } from '@apollo/client';
import React from 'react'
import { useHistory } from 'react-router';
import { DELRES_TESTIMONI } from '../../graphql/mutation';
import { GET_ALL_TESTIMONI} from '../../graphql/queries';
import Footer from '../Footer';
import Header from '../Header';
import SideNav from '../SideNav';

const TestimoniTable = () => {
    const script = document.createElement("script");
    script.src = `../../js/content.js`;
    script.async = true;

    document.body.appendChild(script);

    const {loading, data: dataGetAll, error} = useQuery(GET_ALL_TESTIMONI);
    const [delTesti, data] = useMutation(DELRES_TESTIMONI);
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
                    <h1>Tabel Fasilitas Kos</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active">Tabel Fasilitas Kos</li>
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
                                <th>Isi</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                          {
                            dataGetAll && (
                              dataGetAll.getAllTestimoni.map(testi => 
                              <tr key={testi.id}>
                                <td>{testi.isi}</td>
                                {testi.status == 1 
                                ? <td><span className="badge badge-pill badge-success">Aktif</span></td>
                                
                                : <td><span className="badge badge-pill badge-danger">Non-aktif</span></td>
                                }
                                <td style={{width: 10+'%'}}>  
                                  <div className="row text-center">
                                    <div className="col-sm-12">
                                      <div className="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
                                        <input type="checkbox" defaultChecked={testi.status == 1 ? true : false} className="custom-control-input" id={"customSwitch1"+ testi.id} 
                                        onClick={() => {
                                          delTesti({ variables: { id: testi.id }, refetchQueries:[{query: GET_ALL_TESTIMONI}] });
                                        }}
                                        />
                                        <label className="custom-control-label" htmlFor={"customSwitch1"+ testi.id}></label>
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
export default TestimoniTable;
