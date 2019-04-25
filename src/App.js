import React from 'react';
import logo from './logo.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nota3: 0}
  }

  nota1Ref = React.createRef();
  nota2Ref = React.createRef();  

  calcularNota(e) {
    e.preventDefault();    

    let nota1 = this.nota1Ref.current.value;
    let nota2 = this.nota2Ref.current.value;

    this.setState({
      nota3: (3 - (nota1 * .25) - (nota2 * .25)) / 0.5
    });

    return this.state.nota3;
  }

  mostrarResultado = () => {

    if (this.state.nota3 === 0) return null;

    return (
      <h3 className="text-center alert alert-info">
        La nota que debo obtener para aprobar mi asignatura es:<br/><h2><strong className="">{this.state.nota3}</strong></h2>
      </h3>
    )
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center text-white">
          <div className="col-md-6">
            <img src={logo} alt="Logo" className="img-fluid mb-5"/>
            <h1 className="text-center">Calculadora</h1>
            <h2 className="text-center">¿Cuánto debo obtener en el 3er corte para aprobar mi asignatura?</h2>
            <div className="card">
              <div className="card-body">
                <form onSubmit={this.calcularNota.bind(this)}>
                  <div className="form-group">
                    <label htmlFor="nota1" className="text-secondary">Nota 1er Corte</label>
                    <input
                      className="form-control"
                      type="number"
                      step=".01"
                      name="nota1"
                      placeholder="Digita la nota del primer corte"
                        ref={this.nota1Ref}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nota2" className="text-secondary">Nota 2do Corte</label>
                    <input
                      className="form-control"
                      type="number"
                      step=".01"
                      name="nota1"
                      placeholder="Digita la nota del segundo corte"
                      ref={this.nota2Ref}
                    />
                  </div>
                  <div className="form-group text-center">
                    <input type="submit" value="Calcular Nota 3er Corte" className="btn btn-success mr-2" />
                    <a href="/" className="btn btn-info">Reiniciar</a>
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-2">
              {this.mostrarResultado()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
