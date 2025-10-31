import React from 'react'

const Disco = ({ disco }) => {
    return (
        <div className='col-6 p-0'>
            <div class="card w-75 mb-3">
                <div class="card-body">
                    <p>{disco.id} - {disco.artista}</p>
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button className="btn btn-secondary m-1">Ativo</button>
                    <button className="btn btn-info m-1" >Editar</button>
                    <button className="btn btn-danger m-1">Excluir</button>
                </div>
            </div>
        </div>
    )
}

export default Disco