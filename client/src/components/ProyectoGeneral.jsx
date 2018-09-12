import React, { Component } from "react";

class ProyectoGeneral extends Component {

  render() {
    const proyecto = this.props.proyecto;
    const nombre = proyecto.nombre;
    const region = proyecto.region;
    const departamento = proyecto.departamento;
    const municipio = proyecto.municipio;
    const sector = proyecto.sector;
    const inicio = proyecto.anioInicioEjecucion;
    const fin = proyecto.anioFinEjecucion;

    return (
      <div className="col-12 mt-4">
        <div className="card w-100 shadow">
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <hr />
            <p className="card-text">
            <i className="fas fa-map-marker-alt fa-lg text-danger"></i>&nbsp;
              {region}, {departamento}, {municipio}
            </p>
            <p className="card-text">
            <i className="fas fa-list-ul fa-lg text-primary"></i>&nbsp;{sector}
            </p>
            <p className="card-text">
            <i className="fas fa-calendar fa-lg text-success"></i>&nbsp;{inicio} - {fin}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProyectoGeneral;
