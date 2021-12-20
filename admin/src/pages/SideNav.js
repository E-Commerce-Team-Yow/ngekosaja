import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';
import Source from './Source'
import { useCookies } from 'react-cookie';


const SideNav = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['name']);
    let history = useHistory();
    
    function logout() {
        removeCookie('name');
        // removeCookie(cookies.name);
        window.location.replace("/admin/login");
    }
    return (
        <div>
             {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <Link to="/admin/userTable" className="brand-link">
                <img src={Source['logo']} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                <span className="brand-text font-weight-light">AdminNgekosaja</span>
            </Link>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar Menu */}
                <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column">
                    <li className="nav-item">
                        <div className="nav-link">
                            <i className="nav-icon fas fa-table" />
                            <Link to="/admin/userTable"><p>Tabel User</p></Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">
                            <i className="nav-icon fas fa-table" />
                            <Link to="/admin/listingTable"><p>Tabel Listing</p></Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">
                            <i className="nav-icon fas fa-table" />
                            <Link to="/admin/fasilitasTable"><p>Tabel Fasilitas Kos</p></Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">
                            <i className="nav-icon fas fa-table" />
                            <Link to="/admin/mediaTable"><p>Tabel Media</p></Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">
                            <i className="nav-icon fas fa-table" />
                            <Link to="/admin/rumahTable"><p>Tabel Rumah Kos</p></Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">
                            <i className="nav-icon fas fa-table" />
                            <Link to="/admin/keperTable"><p>Tabel Ketentuan dan Peraturan</p></Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">
                            <i className="nav-icon fas fa-table" />
                            <Link to="/admin/kotaTable"><p>Tabel Kota</p></Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">
                            <i className="nav-icon fas fa-table" />
                            <Link to="/admin/testimoniTable"><p>Tabel Testimoni</p></Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">
                            <i className="nav-icon fas fa-table" />
                            <Link to="/admin/promoTable"><p>Tabel Promo</p></Link>
                        </div>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link" onClick={e => {
                            e.preventDefault();
                            logout();
                        }}>
                        <i className="nav-icon far fa-circle text-danger" />
                        <p className="text" >Log Out</p>
                    </a>
                    </li>
                </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
            </aside>
        </div>
    )
}

export default SideNav
