import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/static/logoMenu.png';
import '../assets/styles/components/Header.scss';

const Header = (props) => {

    const handleOpenOptions = () => {
        console.log('abrir opciones')
    }
    return (
        <div className="body">
            <div className="header">
                <div className="containerLogo">
                    <Link to="/Home">
                        <img className="logo" src={Logo} alt="" />
                    </Link>
                </div>
                <div className="containerBtns">
                    <Link className="btn" to="/Users">Usuarios</Link>
                    <Link className="btn" to="/News">Noticias</Link>
                    <Link className="btn" to="/Store">Tienda</Link>
                </div>
                <div className="containerOptions">
                    <Link className="btn" to="/">Salir</Link>
                </div>
            </div>
        </div>
    );
};


export default Header;