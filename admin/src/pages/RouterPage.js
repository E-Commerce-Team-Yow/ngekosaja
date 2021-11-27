import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Login from './Login';
import UserTable from './table/userTable';
import ListingTable from './table/listingTable';
import RumahTable from './table/rumahTable';
import FasilitasTable from './table/fasilitasTable';
import KeperTable from './table/keperTable';
import TestimoniTable from './table/testimoniTable';
import PromoTable from './table/promoTable';
import Edit from './form/Edit';
import { NotFound } from './NotFound';
import Add from './form/Add';
import { PrivateRouter } from './PrivateRouter';

export default function RouterPage() {
    const client = new ApolloClient({
        uri: "http://localhost:3001/graphql",
        cache: new InMemoryCache(),
    });
    return (
        <div>
            <ApolloProvider client={client}>
            <Router>
            {/* <NavBar/> */}
                <Switch>
                <Route exact path="/"><Redirect to="/admin/login" /></Route>
                    <Route
                        path="/admin"
                        render={({ match: { url } }) => (
                        <>
                            <Route path={`${url}/login`} exact component={Login} />
                            <PrivateRouter path={`${url}/userTable`} ><UserTable/></PrivateRouter>
                            <Route path={`${url}/listingTable`} component={ListingTable} />
                            <Route path={`${url}/fasilitasTable`}
                                render={({ match: { url } }) => (
                                    <>
                                        <Route path={`${url}`} exact component={FasilitasTable} />
                                        <Route path={`${url}/action`} exact component={Edit} />
                                        <Route path={`${url}/add`} exact component={Add} />
                                    </>
                                )}
                            />
                            <Route path={`${url}/rumahTable`} component={RumahTable} />
                            <Route path={`${url}/keperTable`} component={KeperTable} />
                            <Route path={`${url}/testimoniTable`} component={TestimoniTable} />
                            <Route path={`${url}/promoTable`} component={PromoTable} />
                            
                        </>
                        )}
                    />
                </Switch>
            </Router>
            </ApolloProvider>
        </div>
    )
}