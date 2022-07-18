import * as React from "react";

export default function ImgenMediaCard({empresa}) {
  return (
    <header>
    <div className=" row-cols-md-4">
      <div className="card mb-4">
        <img className="card-img-top" src={empresa.imagen} alt="..." />
        <div className="card-body">
          <h5 className="card-title text-nowrap">{empresa.nombre}</h5>
          <p className="card-text">{empresa.descripcion}</p>
           <p className="card-text">{empresa.direccion}</p>
           <p className="card-text">{empresa.telefono}</p>
          <div />
          <button className="btn btn-warning">Eliminar</button>
          <button type="button" className="btn btn-info">Detalles</button>
        </div>
      </div>
    </div>
    </header>
  );
}
