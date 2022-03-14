import React from "react";
import imageQris from '../assets/image/QRIS.jpg'
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function FrontQris()
{

    const nav = useNavigate();

    const [input, setInput] = React.useState('');

    const searchHandler = (e) => {
        e.preventDefault();
        if(input === "") {
            Swal.fire("Peringatan","idBilling tidak boleh kosong", "error")
        } else {
           //const idBilling = input;
           nav(`/qris`, { state: { idBilling: input}});
        }
    }

    return (<>
        <div className="container">
            <div className="row mt-5">
                <div className="col-6">
                    <h1>QRis eRetribusi</h1>
                    <p> bayar eRetribusi di Kabupaten Brebes pake eWallet aja!! </p>
                    <form onSubmit={searchHandler}>
                        <input type="number" name="idbilling" onChange={(e) => {
                            setInput(e.target.value);
                        }} className="form-control" placeholder="masukan ID Billing" autoComplete="off" />
                        <div className="d-grid gap-2">
                        <button className="btn btn-primary mt-2" type="submit">Pay Billing</button>
                        </div>
                    </form>
                </div>
                <div className="col-6">
                    <img src={imageQris} className="img-fluid" />
                </div>
            </div>
        </div>
    </>);
}