import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/static/logoMenu.svg'
import '../assets/styles/components/Header.scss'

const Header = (props) => {
    const handleClose = () => {
        sessionStorage.clear()
    }

    return (
        <div className="body">
            <div className="header">
                <div className="containerLogo">
                    <Link to="/homeApp">
                        <img className="logo" src={Logo} alt="" />
                    </Link>
                </div>
                <div className="containerBtns">
                    <Link className="btn" to="/usersApp">Usuarios</Link>
                    <Link className="btn" to="/newsApp">Noticias</Link>
                    <Link className="btn" to="/storeApp">Tienda</Link>
                </div>
                <div className="containerOptions">
                    <Link className="btn" to="/" onClick={handleClose}>Salir</Link>
                </div>
            </div>
        </div>
    )
}


export default Header