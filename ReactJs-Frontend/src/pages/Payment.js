import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm"
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router';
import { Link, useRouteMatch } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { useCookies } from 'react-cookie';
const PUBLIC_KEY = "pk_test_51K83XoL7RdeulGGWq3M5D4CvwE2Daloepp5dMxm78jxBn8Nr1hxn4YON3H524ZOjRDUtMHc74BR9u1dlSodRz0uq004VMuxRIa"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    let { path, url } = useRouteMatch();
    const [cookies, setCookie, removeCookie] = useCookies(['userLogin']);
    useEffect(() => {

		if(cookies.userLogin){
            
		} else{
           window.location.replace("/");
        } 
    }, []);
    const search = useLocation().search;
    const id_kamar = new URLSearchParams(search).get('id_kamar');
    const total = new URLSearchParams(search).get('total');
    const id_penyewaan = new URLSearchParams(search).get('id_penyewaan');
    console.log(id_penyewaan)
    const [data, setData] = useState({
        id_kamar : id_kamar,
        total : total,
        id_penyewaan : id_penyewaan,
    });
	return (
        <div>
            <Header/>
                <Elements stripe={stripeTestPromise}>
                    <PaymentForm data={data} />
                </Elements>
            <Footer/>
        </div>
	)
}
