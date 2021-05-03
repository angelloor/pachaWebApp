import React from 'react';
import '../../assets/styles/components/Users.scss';

const ItemUser = props => {

    const event = () => {
        console.log('open Modal')
    }

    return (
        <div className="containerItem">
            <div className="name">
                <p>Angel Loor</p>
            </div>
            <div className="level">
                <p>Nivel 10</p>
            </div>
            <div className="coint">
                <p>600</p>
            </div>
            <div className="containerBtn">
                <a className="btn" onClick={event}>Ver información</a>
                <a className="btn" onClick={event}>Ver retos</a>
                <a className="btn" onClick={event}>Ver compras</a>
            </div>
        </div>
    );
};

export default ItemUser;