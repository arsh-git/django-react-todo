import React from 'react';
import { Link } from "react-router-dom";
import './css/App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function PageNotFound() {
  return(
    <>
    <Header></Header>
    <div className="login-wrapper">
        <h1>404 Error</h1>
        <h2>404 Page not found</h2>
        <Link to="/">Go back to Home</Link>
    </div>
    <Footer></Footer>
    </>
  )
}
