import React, { Component } from 'react'
import Subcyclelife from './subcyclelife'

export default class lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             makanan : 'bakso' ,
             data : {},
             tampilhalamansub : false
        }
    }
    
    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            this.setState({data : json })
        })
    }
    
    ubahmakanan(value){
        this.setState({
            makanan: value 
        })
    }

    render() {
        console.log("data : ", this.state.data)
        return (
            <div>
                <h1>lifecycle</h1>
                <p>{this.state.data.title}</p>
                <p>{this.state.makanan}</p>

                {this.state.tampilhalamansub && <Subcyclelife ubahmakanan={(value) => this.ubahmakanan(value)}/>}

                <button onClick={() => this.setState({tampilhalamansub : !this.state.tampilhalamansub})}>Tampilkan halaman sub</button>
            </div>
        )
    }
}
