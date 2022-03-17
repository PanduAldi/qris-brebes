import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{padding:10}}>
        <a className="navbar-brand">Qris Brebes</a>
        <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div id="my-nav" className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/" >Home </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" tabIndex={-1} to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" tabIndex={-1} to="/scan">Scan Barcode</Link>
                </li>
            </ul>
        </div>
        </nav>
    </>);
}