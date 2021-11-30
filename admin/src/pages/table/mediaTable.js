import { useMutation, useQuery } from '@apollo/client';
import React, {useEffect} from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import { DELRES_MEDIA} from '../../graphql/mutation';
import { GET_ALL_MEDIA} from '../../graphql/queries';
import Footer from '../Footer';
import Header from '../Header';
import SideNav from '../SideNav';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const MediaTable = () => {
    let { path, url } = useRouteMatch();
    console.log(url);
    const script = document.createElement("script");
    script.src = `../../js/content.js`;
    script.async = true;

    document.body.appendChild(script);

    const [delMedia, data] = useMutation(DELRES_MEDIA);
    useEffect(() => {
      if(!data.loading && data.data?.delresMedia){
        NotificationManager.success('', data.data?.delresMedia.message, 2000);
      }
    }, [!data.loading])
  
    const {loading, data: dataGetAll, error} = useQuery(GET_ALL_MEDIA);
    if(loading){
      return "Loading..."
    }
    if(error){
        console.log(error);
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
                    <h1>Tabel Media</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active">Tabel Media</li>
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
                        <Link to={`${url}/addMedia`} replace>
                          <button type="button" className="btn btn-success btn-block btn-sm"><i className="fa fa-plus mr-1" />Tambah Media</button>
                        </Link>
                        </div>
                        </div>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body">
                        <table id="example1" className="table table-bordered table-striped">
                          <thead>
                            <tr>
                                <th>ID</th>
                                <th>Path</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                          {
                            dataGetAll && (
                              dataGetAll.getAllMedia.map(media => 
                              <tr key={media.id}>
                                <td>{media.id}</td>
                                <td>{media.path}</td>
                                {media.status == 1 
                                ? <td><span className="badge badge-pill badge-success">Aktif</span></td>
                                
                                : <td><span className="badge badge-pill badge-danger">Non-aktif</span></td>
                                }
                                <td style={{width: 10+'%'}}>  
                                  <div className="row text-center">
                                    <div className="col-sm-6">
                                    <div className="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
                                      <input type="checkbox" defaultChecked={media.status == 1 ? true : false} className="custom-control-input" id={"customSwitch1"+ media.id} 
                                      onClick={() => {
                                        console.log(media);
                                        delMedia({ variables: { id: media.id }, refetchQueries:[{query: GET_ALL_MEDIA}] });
                                      }}
                                      />
                                      <label className="custom-control-label" htmlFor={"customSwitch1"+ media.id}></label>
                                    </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <Link to={`${url}/actionMedia?act=edit&id=${media.id}&obj=media`} replace><i className="nav-icon fas fa-edit" /></Link>
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
                                <th>ID</th>
                                <th>Path</th>
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
          <NotificationContainer/>
          {/* <Switch>
            
          </Switch> */}
      </div>
    )
  
}
export default MediaTable;