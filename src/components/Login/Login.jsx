import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { cambiarAutor } from '../actions/index.js';


const Login = props => {
    const [form, setValues] = useState({
        nombre: '',
    });

    const handleChange = (event) => {
        setValues({
            ...form,
            nombre: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
        props.cambiarAutor(form);
    }

    return (
        <div className="container">
            <p>Soy un Login</p>
            <h1>Autor</h1>
            <p>{props.nombre}</p>
            <input type="text" name="nombre" onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Cambiar Autor</button>
        </div>
    );
}

Login.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
}

const mapDispatchToProps = {
    cambiarAutor,
};


export default connect(null, mapDispatchToProps)(Login);