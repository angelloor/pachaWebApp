import React from 'react';
import iconUser from '../../assets/static/user.png';
import { getLevel } from '../../Utils/index';

const CardUser = (props) => {
    const { birdOfDate, names, experience, coint, age, numberID, email, phone, registerOfDate } = props.user;
    const level = getLevel(experience)

    return (
        <>
            <div className="sectionOne">
                <div className="containerImg">
                    <img src={iconUser} alt="imagen de usuario" />
                </div>
                <div className="sectionName">
                    <p>{names}</p>
                    <p className="level">{`Nivel ${level.level}`}</p>
                    <p>{`Edad: ${age} años`}</p>
                </div>
            </div>
            <div className="sectionTwo">
                <p><strong>Número de cédula:  </strong>{numberID}</p>
                <p><strong>Fecha de nacimiento: </strong>{birdOfDate}</p>
                <p><strong>Correo: </strong>{email}</p>
                <p><strong>Teléfono: </strong>{phone}</p>
                <p><strong>Fecha de registro: </strong>{registerOfDate}</p>
            </div>
        </>
    );
};

export default CardUser;