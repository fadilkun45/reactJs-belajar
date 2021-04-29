import React, { Component } from 'react'
import Content from './Content'
import Navbar from './Navbar'
import Footer from './footer'
import styles from './style.css'

export default class index extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <Content />
            <Footer />
            </div>
        )
    }
}
