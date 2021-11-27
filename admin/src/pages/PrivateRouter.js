import React, {useEffect} from 'react'
import { useCookies } from 'react-cookie';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

export const PrivateRouter = ({children, path}) => {
    const [cookies, setCookie, removeCookie] = useCookies([]);
    if(!cookies.name) {
        return <Redirect to="/admin/login" />
    }
    return (
        <div>
            <Route path={`${path}`}>{children}</Route>
        </div>
    )
}
