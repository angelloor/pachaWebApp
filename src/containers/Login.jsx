import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/static/iso.png';
import '../assets/styles/Background.scss';
import '../assets/styles/components/Login.scss';

const Login = props => {
    console.log(props)
    const handleChange = (e) => {
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log('enviados')
    }

    return (
        <div className="containerMainCenter">
            <div className="containerLogin">
                <div className="containerLogo">
                    <img className="imgLogo" src={Logo} alt="Logo" />
                    <p className="textLogo">INICAR <strong>SESIÓN</strong> </p>
                    <div className="barLogo"></div>
                </div>
                <div className="containerInput">
                    <div className="containerInputBox">
                        <input className="input" type="text" placeholder="Nombre de usuario" onChange={handleChange} />
                    </div>
                    <div className="containerInputBox">
                        <input className="input" type="password" placeholder="Contraseña" onChange={handleChange} />
                    </div>
                    <div className="containerInputBtn">
                        <input className="btnSubmit" type="submit" name="submit" onClick={handleSubmit} />
                    </div>
                    <Link className="link" to="/Home">ir a home</Link>
                </div>
            </div>
        </div>
    );
};

Login.propTypes = {

};

export default Login;