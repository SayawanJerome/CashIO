import React from 'react';
import Categories from './Categories';
import { BrowserRouter, Route, Link } from "react-router-dom";


function SignIn() {
    return (
        <div class="header-center">
            <img src="https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/cash-i-o-g0pdt4/assets/e7n18epwp7kk/cashIO-removebg-preview.png" id="arrow" />
            <h1 class="header">Cash.IO</h1>
            <p class="subtext">Type in your phone number below to register.</p>
            <input class="numberInput" type="text" placeholder="Your Phone Number..."></input><br /><br />
            <Link to="homepage" class="phone">Sign In with Phone</Link><br /><br />
            <Link to="homepage" class="subtext2" href="#">Sign up with Email</Link>
        </div>
    );
}


export default SignIn;
