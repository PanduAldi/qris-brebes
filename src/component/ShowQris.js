import React from "react";
import axios from "axios";
import bgQris from '../assets/image/bg-01.jpg';
import { useLocation, Link } from 'react-router-dom';
import QRCode from "qrcode.react";
import Swal from "sweetalert2";

export default function ShowQris()
{
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);

    const location = useLocation();
    const idBilling = location.state.idBilling;

    React.useEffect(() => {
         axios.get(`https://bimaqris.bankjateng.co.id/welcome/responseGenerate/73${idBilling}`).then((response) => {
            console.log(response);
            setData(response.data);

            setLoading(false);
         });
    }, []);

    

    return (<>
    <div className="container">
        <div className="row justify-content-center mt-2" >
            <div className="col-lg-6" >
                <div className="card">
                    <div className="card-body">
                        <img src={bgQris} className="img-fluid mb-5" />
                        <center>
                           {  loading  ? <span> memuat QR code Pembayaran ...</span> : 
                              (data.err_code !== "00" ? 
                                  <div className="alert alert-danger"> {data.err_desc} </div>
                                  : 
                                  <>
                                    <QRCode value={data.data} size={230} />
                                    <table className="table table-light table-striped mt-3">

                                    <tbody>
                                        <tr>
                                            <td>ID Billing </td>
                                            <td>:</td>
                                            <td> {idBilling}  </td>
                                        </tr>
                                        <tr>
                                            <td>Nama </td>
                                            <td>:</td>
                                            <td> {data.nama}  </td>
                                        </tr>
                                        <tr>
                                            <td>Nominal </td>
                                            <td>:</td>
                                            <td> Rp. {data.bill_amount}  </td>
                                        </tr>
                                        <tr>
                                            <td> Jenis </td>
                                            <td>:</td>
                                            <td> {data.payment_type}  </td>
                                        </tr>
                                    </tbody>

                                    </table>
                                  </>
                               )                            
                           }
                           <br />
                           <Link className="btn btn-success mt-3" to="/" >Cari Lagi</Link>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>);
}