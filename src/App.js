import React from 'react';
import './bootstrap.min.css';
class App extends React.Component {
  state = {
    list: [],
    distancia: '',
    tiempo: '',
    velocidad: ''
  };

  handleInputChange = event => {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    const { distancia, tiempo, list } = this.state;

    const id = list.length + 1;
    const velocidad =  distancia/tiempo;
    this.setState({
      list: [...list, { id, distancia, tiempo, velocidad}], 
      distancia: '',
      tiempo: ''
    });
    
    e.preventDefault();
  };

  eliminar = () => {
    var opcion = true;
    //var opcion = window.confirm("Estás seguro que deseas eliminar los elementos de la lista ");
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state;
          arreglo.splice(contador, 1);
        
        contador++;
      
      this.setState({ state: false });
    }
  };

  render() {
    const { distancia, tiempo, list} = this.state;
    return (
      <>
        <div className="container">
          <div className='row'>
            <div className='col-3'></div>
            <div className='col-6'>
              <form onSubmit={this.handleSubmit}>
                  <label htmlFor="distancia" className='form-label'>
                    Ingrese la distancia
                    <input
                      type="number"
                      className="form-control"
                      id="distancia"
                      name="distancia"
                      value={distancia}
                      onChange={this.handleInputChange}
                    />
                  </label>
                  <br></br>
                  <label htmlFor="tiempo" className='form-label'>
                    Ingrese el tiempo
                    <input
                      type="number"
                      className="form-control"
                      id="tiempo"
                      name="tiempo"
                      value={tiempo}
                      onChange={this.handleInputChange}
                    />
                  </label>
                  <br></br>
                  <button type="submit" className="btn btn-outline-success mb-3">
                    Calcular
                  </button>
                  <button type="submit" className='btn btn-outline-success mb-3' id="limpiar">Eliminar</button>
              </form>
                <table className="table table-ligth table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Distancia</th>
                      <th scope="col">Tiempo</th>
                      <th scope="col">Velocidad</th>
                    </tr>
                  </thead>
                  <tbody id='tbody'>
                    {list.map(tabla => (
                      <tr key={tabla.id}>
                        <td>{tabla.distancia}</td>
                        <td>{tabla.tiempo}</td>
                        <td>{tabla.velocidad}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
      </>
    );
  }
}

export default App;
