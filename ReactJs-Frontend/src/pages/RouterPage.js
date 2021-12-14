import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import FlashDeal from './flashDeal';
import FAQ from './FAQ';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import SearchListing from './SearchListing';
import NearByCampus from './nearByCampus';
import LoginUser from './LoginUser';
import RegisterUser from './RegisterUser';
import DetailUser from './DetailUser';
//import Login from '../admin/Login';
// import UserTable from '../admin/table/userTable';
// import ListingTable from '../admin/table/listingTable';
// import RumahTable from '../admin/table/rumahTable';
// import FasilitasTable from '../admin/table/fasilitasTable';
// import KeperTable from '../admin/table/keperTable';
// import TestimoniTable from '../admin/table/testimoniTable';
// import PromoTable from '../admin/table/promoTable';
// import Edit from '../admin/form/Edit';
import DetailKamar from './DetailKamar';
import DetailRumahKos from './DetailRumahKos';
import DashboardOwner from './DashboardOwner';
import Checkout from './Checkout';
import Isidata from './Isidata';


export default function RouterPage() {
    const client = new ApolloClient({
        // uri: "http://localhost:3001/graphql",
        uri: "https://ngekosaja.herokuapp.com/graphql",
        cache: new InMemoryCache(),
    });
    return (
        <div>
            <ApolloProvider client={client}>
            <Router>
            {/* <NavBar/> */}
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/flash-deal" exact component={FlashDeal}/>
                    <Route path="/FAQ" exact component={FAQ}/>
                    <Route path="/search" exact component={SearchListing}/>
                    <Route path="/near-campus" exact component={NearByCampus}/>
                    <Route path="/loginUser" component={LoginUser} />
                    <Route path="/registerUser" component={RegisterUser} />
                    <Route path="/profile" component={DetailUser} />
                    <Route path="/owner" component={DashboardOwner} />
                    {/* <Route path="/login" component={Login}/>  */}
                    <Route path="/DetailKamar" component={DetailKamar}/>
                    <Route path="/DetailRumahKos" component={DetailRumahKos} />
                    <Route path="/DetailRumahKos/DetailKamar" component={DetailRumahKos} />
                    {/* <Route path="/login" component={Login}/> */}
                    <Route path="/near-campus/DetailKamar" component={DetailKamar}/>
                    <Route path="/Checkout" component={Checkout}/>
                    <Route path="/Isidata" component={Isidata}/>
                    {/* <Route
                        path="/admin"
                        render={({ match: { url } }) => (
                        <>
                            <Route path={`${url}/login`} exact component={Login} />
                            <Route path={`${url}/dashboard`} component={Admin} /> 
                            <Route path={`${url}/userTable`} component={UserTable} />
                            <Route path={`${url}/listingTable`} component={ListingTable} />
                            <Route path={`${url}/fasilitasTable`} component={FasilitasTable} />
                            <Route path={`${url}/rumahTable`} component={RumahTable} />
                            <Route path={`${url}/keperTable`} component={KeperTable} />
                            <Route path={`${url}/testimoniTable`} component={TestimoniTable} />
                            <Route path={`${url}/promoTable`} component={PromoTable} />
                            <Route path={`${url}/edit`} component={Edit} />
                        </>
                        )}
                    /> */}
                </Switch>
            </Router>
            </ApolloProvider>
        </div>
    )
}
