import React, { Component } from 'react'
import './style.css';
import Navbar from './navbar';
import Container from './container';
import { BrowserRouter as Router, Route, BrowserRouter, } from "react-router-dom";
import './style.css'
import Section2 from './section2';
import Section1 from './Section1';


export default class index extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Navbar />
                <Route exact path="/" component={Container}/>
                <Route path="/section1" component={Section1} />
                <Route  path="/section2" component={Section2}  />
                </BrowserRouter>
            </div>
        )
    }
}
