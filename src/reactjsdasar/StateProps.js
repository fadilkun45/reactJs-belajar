import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            makanan : 'bakso' 
        }
    }

    gantimakanan = (makanan_baru) => {
        this.setState({
            makanan : makanan_baru
        })
    }
    
    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                <h2>p</h2>
                <button onClick = {() => this.setState({makanan: "kebab" })}>Ganti Makanan</button>
                <button onClick = {() => this.gantimakanan("mie ayam")}>Ganti Makanan lagi</button>
                <Operan makanan={this.state.makanan} gantimakanan={this.gantimakanan}/>
            </div>
        )
    }
}
