import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div>
            <div className="wrapper pt-5">
            <section className="content">
                <div className="error-page">
                <h2 className="headline text-warning">404</h2>
                <div className="error-content">
                    <h3><i className="fas fa-exclamation-triangle text-warning" /> Oops! Page not found.</h3>
                    <p>
                    We could not find the page you were looking for.
                    Meanwhile, you may <Link to="/admin/userTable">return to index</Link>.
                    </p>
                </div>
                </div>
            </section>
            </div>
        </div>
    )
}
