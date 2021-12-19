import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import { PENYEWAAN_LUNAS, LISTING_RENTED } from '../graphql/mutation';
import { useMutation, useQuery } from '@apollo/client';
import React, {useEffect, useState} from 'react';

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm(data) {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    console.log(data.data.id_penyewaan)
    const [pembayaran_lunas, data_bayar] = useMutation(PENYEWAAN_LUNAS);
    const [status_listing, data_listing] = useMutation(LISTING_RENTED);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if(!error) {
            try {
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: data.data.total,
                    id
                })

                if(response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                    pembayaran_lunas({ variables: { 
                        id_penyewaan : data.data.id_penyewaan, 
                        status_pembayaran : 1,
                    }});
                    status_listing({ variables: { 
                        id_kamar : data.data.id_kamar, 
                    }});
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }
    useEffect(() => {
        if(!data_bayar.loading ){
            if ( data_bayar.data && data_bayar.data?.penyewaanLunas != null){
                console.log("status pembayaran berhasil diupdate")
                alert(data_bayar.data.penyewaanLunas.message)
            }
        }
    }, [!data_bayar.loading])

    useEffect(() => {
        if(!data_listing.loading ){
            if ( data_listing.data && data_listing.data?.listingRented != null){
                console.log("status kamar berhasil diupdate")
                alert(data_listing.data.listingRented.message)
            }
        }
    }, [!data_listing.loading])

    const backToHome = async (e) => {
        e.preventDefault()
        window.location.replace("/");
    }

    return (
        <>
            {!success ? 
                <div>
                    <form onSubmit={handleSubmit}>
                        <fieldset className="FormGroup">
                            <div className="FormRow">
                                <CardElement options={CARD_OPTIONS}/>
                            </div>
                        </fieldset>
                        <button className="btnStripe">Pay</button>
                    </form>
                    <form onSubmit={backToHome}>
                        <button className="btnStripe">bayar nanti</button>
                    </form>
                </div> 
                :
            <div>
                <form onSubmit={backToHome}>
                    <button className="btnStripe">back to home</button>
                </form>
            </div> 
            }
        </>
    )
}
