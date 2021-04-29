import React, { Component } from 'react'

export default class operan extends Component {
    render() {
        const {makanan,gantimakanan } = this.props
        return (
            <div>
                <button onClick = {() => gantimakanan("soto")}>Ganti Makanan lagi</button>
                <h2>operan yang jadi props : {makanan}</h2>
            </div>
        )
    }
}
