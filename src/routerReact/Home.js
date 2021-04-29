import React from 'react'
import Navbar from './navbar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Section1 from "./Section1";
  import Section2 from "./section2" ;

export default function Home() {
    return (
        <div>
            <Navbar />
            <Router>
            {/* <Switch>
            <Route path="/section1">
                <Section1 />
            </Route>
            <Route path="/section2">
                <Section2 />
            </Route>
            <Route  path="/">
                <Home />
            </Route>
            </Switch> */}
           </Router>
        </div>
    )
}
