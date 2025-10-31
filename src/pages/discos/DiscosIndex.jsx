// src/App.jsx
import React from "react"
import NavBar from "../../components/NavBar"
import Disco from "../../components/Disco";
import { Link } from "react-router-dom";

const DiscosIndex = () => {
  const [discos, setDiscos] = React.useState([]);

  //cria o useEffect (serve para fazer consultas em APIS)
  React.useEffect(() => {
    // Dentro do useEffect crio a função abaixo e declaro ela como async
    // declaramos ela como async pois iremos utilizar await dentro dela
    const fetchDiscos = async() => {
      const response = await fetch("http://localhost:3000/api/discos");
      //console.log(response);
      const data = await response.json();
      console.log(data);
      setDiscos(data); 
    }
    fetchDiscos(); // chamando a função que foi declarada acima
  }, []); // [] significa que o useEffect vai rodar apenas 1 vez depois do primeiro render

  return (
    <>
      <NavBar />
      {discos.map(disco => <div> {disco.id} - {disco.album} - {disco.artista}</div>)}
      
      <button type="button" className="btn btn-success m-4">Adicionar disco</button>
      <div className="container text-start">

        {/* Card mt bala */}
        <div className="card w-100 mx-auto" style={{ width: "18rem" }}>
          <div className="card-body">
            <img src="https://whitescreen.dev/Uploads/images/Logo/black-screen-background.png" width="300" height="300" className="d-inline"></img>
            <h5 className="card-title">Disco: *Som do Fulano*</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Artista: DJ Fulano</h6>
            <p className="card-text">
              Um clássico do rap nacional com batidas marcantes e letras que contam a vida nas ruas.
              Lançado em 2022, esse disco traz a essência da quebra com muito estilo.
            </p>
            <div className="d-flex ">
              <button type="button" className="btn btn-success m-4 ">Editar</button>
              <button type="button" className="btn btn-primary m-4 ">Remover</button>
            </div>
          </div>
        </div>
        <Link to="/discos/create" className='btn btn-primary m-4'>Criar Disco</Link>
        <div className='row'>
        {discos.map(disco => <Disco key={disco.id} disco={disco} />)}
        </div>
      </div>
    </>
  )
}
export default DiscosIndex