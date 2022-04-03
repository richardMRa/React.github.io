import React, { Component } from 'react'
import '../styles/index.css'

export default class Opciones extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='opcion'>
                <button id={this.props.id} onClick={this.props.clickEvent} className="botones">
                    {this.props.botonTexto}
                </button>
                <h2 className="opciones">{this.props.texto}</h2>
            </div>
        )
    }
}