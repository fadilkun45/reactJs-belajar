import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";
import { ReactDOM } from "react";
import React, { Component } from 'react'

export default class navbar extends Component {
    state = {clicked:false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
         
    }


    render() {
        return (
        <nav>
                <h1>React Router</h1>
                <div className="submenu" className={this.state.clicked ? 'submenu slide ' : 'submenu'}>
                    <ul >
                        <li>
                            <Link to="/" onClick={this.handleClick}>Home</Link>
                        </li>
                        <li>
                            <Link to="/section1" onClick={this.handleClick}>section 1</Link>
                        </li>
                        <li>
                            <Link to="/section2" onClick={this.handleClick}>section 2</Link>
                        </li>
                    </ul>
                </div>
                <div className="toggle" onClick={this.handleClick}>
                    <input type="checkbox"></input>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        )
    }
}
