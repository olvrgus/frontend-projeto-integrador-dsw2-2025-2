import React from 'react'
import Disco from "../../components/Disco"
import NavBar from '../../components/NavBar'
import { Link } from 'react-router-dom'
import "./discos.css";

const DiscosIndex = () => {
  const [discos, setDiscos] = React.useState([]);

  React.useEffect(() => {
    const fetchDiscos = async () => {
      const response = await fetch("http://localhost:3000/api/discos");
      const data = await response.json();
      setDiscos(data);
    };
    fetchDiscos();
  }, []);

  return (
    <>
      <NavBar />

      <div className="title-custom text-center">
        <h1>DOOM'S DISKS</h1>
      </div>

      <div className="container text-start">
        <div className="card w-100 mx-auto">
          <div className="card-body">
            <img
              src="https://whitescreen.dev/Uploads/images/Logo/black-screen-background.png"
              width="300"
              height="300"
              className="d-inline"
            />

            <h5 className="card-title">Disco: *Som do Fulano*</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Artista: DJ Fulano</h6>

            <p className="card-text">
              Um clássico do rap nacional com batidas marcantes e letras que contam a vida nas ruas.
              Lançado em 2022, esse disco traz a essência da quebra com muito estilo.
            </p>

            <div className="d-flex">
              <button type="button" className="btn btn-success m-4">Editar</button>
              <button type="button" className="btn btn-primary m-4">Remover</button>
            </div>
          </div>
        </div>

        <Link to="/discos/create" className="btn btn-primary m-4">
          Criar Disco
        </Link>

        <div className="row">
          {discos.map((disco) => (
            <Disco key={disco.id} disco={disco} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DiscosIndex;
