import React, { Component } from 'react'
import '../styles/index.css'
import Opciones from './Opciones.jsx';
export default class Historia extends Component {
    //indexes
    index = 0;
    fixedIndex = 2;

    constructor(props) {
        super(props);
        this.state = {
            texto: this.props.historiaArray[this.index].historia,
            opcionA: this.props.historiaArray[this.index].opciones.a,
            opcionB: this.props.historiaArray[this.index].opciones.b,
            eleccion: '',
            renderizarBotones: true,
            historialElecciones: []
        }
    }

    handleButton = (e) => {
        //Obtener el índice del objeto de la lista a partir del atributo ID
        try {
            this.index = this.props.historiaArray.map(element => element.id).indexOf(this.fixedIndex + e.currentTarget.choice);
            this.setState({
                texto: this.props.historiaArray[this.index].historia,
                opcionA: this.props.historiaArray[this.index].opciones.a,
                opcionB: this.props.historiaArray[this.index].opciones.b,
                eleccion: e.currentTarget.choice,
                historialElecciones: this.state.historialElecciones == '' ? [e.currentTarget.choice] : [...this.state.historialElecciones, e.currentTarget.choice]
            });

            this.fixedIndex++;

        } catch (error) {
            this.componentWillUnmount();
        }
    }
    componentWillUnmount() {
        //Desmontar componentes, renderizar texto FIN.
        this.setState({
            texto: "FIN",
            renderizarBotones: false
        })
    }
    componentDidMount() {
        //Setear eventos e ids
        let componentA = document.getElementById("a");
        let componentB = document.getElementById("b");
        componentA.choice = "a";
        componentB.choice = "b";
        componentA.addEventListener('click', this.handleButton);
        componentB.addEventListener('click', this.handleButton);
    }
    render() {
        return (
            <div className="layout">
                <h1 className="historia">
                    {this.state.texto}
                </h1>
                <div id="botones">
                    {this.state.renderizarBotones ? <Opciones id="a" botonTexto="A" texto={this.state.opcionA} /> : null}
                    {this.state.renderizarBotones ? <Opciones id="b" botonTexto="B" texto={this.state.opcionB} /> : null}
                </div>
                <div className="recordatorio">

                    <h3>Seleccion anterior:{this.state.eleccion}</h3>

                    <h3>Historial</h3>
                    {this.state.historialElecciones.map((ele, i) => {
                        return <span key={ele + i}> {ele.toUpperCase()} </span>
                    })}

                </div>
            </div>
        );
    }


}
