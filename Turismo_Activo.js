import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Tarjet from "./Tarjet";
import icon_activo from "./Tarjet/icon_activo.png";
import { useState } from "react";
import { useEffect } from "react";

const Turismo_Activo = () => {
  
  const [negocio, setNegocio] = useState(null);

  useEffect(function () {
    async function fetchApi() {
      const response = await fetch("http://localhost:3001/empresas");
      const json = await response.json();
      setNegocio(json.filter((empresa) => empresa.categoria === "turismo_activo"));
    }
    fetchApi();
  }, []);

  return (
    <div>
      <header>
        <Box textAlign="center">
          <Button variant="contained">Turismo Activo</Button>
        </Box>
        <div className="container borde">
          <img
            className="img-fluid d-block mx-auto"
            width="300-center"
            height="auto"
            src={icon_activo}
          />
        </div>
        <form style={{ textAlign: "center" }}>
          <input type="text-center" placeholder="Buscar por Nombre" />

          <button variant="contained" type="submit">
            Search
          </button>
        </form>
      </header>

      {negocio && negocio.map((sitioTurismoActivo) => <Tarjet empresa={sitioTurismoActivo} />)}
    </div>
  );
};

export default Turismo_Activo;
