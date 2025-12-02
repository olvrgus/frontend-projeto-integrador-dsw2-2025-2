import React from 'react'
import NavBar from '../components/NavBar'

const registrar = () => {
    return (
        <div>
            <NavBar />
            <form className="m-3">
                <div className="form-group">
                    <label for="nome">Nome:</label>
                    <input type="text" class="form-control" id="nome" placeholder="Insira seu Nome" />
                </div>
                <div className="form-group">
                    <label for="email">E-mail:</label>
                    <input type="email" class="form-control" id="email" placeholder="Insira seu Email" />
                </div>
                <div className="form-group">
                    <label for="senha">Senha</label>
                    <input type="password" class="form-control" id="senha" placeholder="Insira sua Senha" />
                </div>

                <div className="form-group">
                    <label for="papel">Papel:</label>
                    <select class="form-control" id="papel">
                        <option value="0">Usuário</option>
                        <option value="1">Administrador</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-success mt-3">Registrar</button>
            </form>
        </div>
    )
}

export default registrar