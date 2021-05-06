import React, { Component } from 'react'
import '../assets/styles/components/Loader.scss'

export default class Loader extends Component {
    render() {
        return (
            <div className="lds-ripple"><div></div><div></div></div>
        )
    }
}