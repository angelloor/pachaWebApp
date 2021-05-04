import React, { useState } from 'react';
import { Spinner } from 'reactstrap';
import Logo from '../assets/static/iso.png';
import '../assets/styles/Background.scss';
import '../assets/styles/components/Login.scss';
import SimpleModal from '../components/SimpleModal';

const Login = props => {
    const [loading, setLoading] = useState(false)

    const [username, setUsename] = useState('')
    const [password, setPassword] = useState('')
    const [modal, setModal] = useState(false)

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const openModal = (title, text) => {
        setTitle(title)
        setText(text)
        setModal(true)
    }

    const closeModal = () => {
        setTitle('')
        setText('')
        setModal(false)
    }

    const handleChangeUsername = (e) => {
        setUsename(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        props.history.push("/homeApp")

        // if (!username) {
        //     openModal('Validaciones', 'Ingese el usuario')
        //     return
        // }

        // if (!password) {
        //     openModal('Validaciones', 'Ingese la contraseña')
        //     return
        // }

        // const body = {
        //     username,
        //     password
        // }
        // setLoading(true)
        // Http.instance.post('/userApp/login', body)
        //     .then((response) => {
        //         console.log(response)
        //         props.history.push("/homeApp")
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
    }

    return (
        <div className="containerMainCenter">
            <SimpleModal modal={modal} title={title} text={text} toggle={closeModal} />
            <div className="containerLogin">
                <div className="containerLogo">
                    <img className="imgLogo" src={Logo} alt="Logo" />
                    <p className="textLogo">INICAR <strong>SESIÓN</strong> </p>
                    <div className="barLogo"></div>
                </div>
                <div className="containerInput">
                    <div className="containerInputBox">
                        <input className="input" type="text" placeholder="Nombre de usuario" onChange={handleChangeUsername} />
                    </div>
                    <div className="containerInputBox">
                        <input className="input" type="password" placeholder="Contraseña" onChange={handleChangePassword} />
                    </div>
                    <div className="containerInputBtn">
                        <input className="btnSubmit" type="submit" name="submit" value="Entrar" onClick={handleSubmit} />
                    </div>
                    {(loading) ?
                        <Spinner color="success" />
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
    );
};

Login.propTypes = {

};

export default Login;