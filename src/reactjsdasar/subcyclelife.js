import React, { Component } from 'react'

export default class subcyclelife extends Component {

    componentWillUnmount () {
        this.props.ubahmakanan("sate")
    }

    render() {
        return (
            <div>
                <h2>component sub lifecycle</h2>
            </div>
        )
    }
}
