import React from 'react'
import NavBar from '../../components/NavBar'
import { Link } from 'react-router-dom'

const DiscosCreate = () => {
  return (
    <div>
        <NavBar/>
        <h3>DiscosCreate</h3>
        <Link to="/discos">Voltar</Link>
    </div>
  )
}

export default DiscosCreate