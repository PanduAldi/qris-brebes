import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    
    return (<>
        <div className="card mt-3">
        <div className="card-body">
            <center>
                <h5 className="card-title">Halaman tidak ditemukan</h5>
                <br />
                <p className="card-text">
                    <Link className="btn btn-warning" to="/">Kembali ke halaman utama</Link>
                </p>
            </center>
        </div>
        </div>
    </>);
}