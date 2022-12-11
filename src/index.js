import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Layout from "./components/Layout";

import './index.css';

import Homepage from './components/Homepage';
import Categories from './components/Categories';



export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="homepage" element={<Homepage />} /> 
                    <Route path="categories" element={<Categories />} />                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render( 
        <App />,

    document.getElementById('root')
);

