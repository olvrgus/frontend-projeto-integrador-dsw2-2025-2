// src/App.jsx
import NavBar from "../../components/NavBar"

const App = () => {
  return (
    <>
      <NavBar />
      <button type="button" className="btn btn-success m-4">Adicionar disco</button>
      <div className="container text-start">

        {/* Card mt bala */}
        <div className="card w-100 mx-auto" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Disco: *Som do Fulano*</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Artista: DJ Fulano</h6>
            <p className="card-text">
              Um clássico do rap nacional com batidas marcantes e letras que contam a vida nas ruas.
              Lançado em 2022, esse disco traz a essência da quebra com muito estilo.
            </p>
            <div class="d-flex ">
              <button type="button" className="btn btn-success m-4 ">Editar</button>
              <button type="button" className="btn btn-primary m-4 ">Remover</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App