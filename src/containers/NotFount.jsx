import React from 'react'
import { Link } from 'react-router-dom'
import noAutorizado from '../assets/static/noAutorizado.svg'
import NotFounts from '../assets/static/nofound.svg'
import '../assets/styles/Background.scss'
import '../assets/styles/noFound.scss'

const NotFount = () => {
  const username = sessionStorage.getItem('username')

  return (
    <>
      {(username)
        ?
        <>
          <div className="containerNofount">
            <img src={NotFounts} alt="No Fount" width="500px" />
          </div>
        </>
        :
        <>
          <div className="containerNofount display">
            <img src={noAutorizado} alt="No Fount" width="250px" />
            <Link to="/">Iniciar sesión</Link>
          </div>
        </>
      }
    </>

  )
}

export default NotFount