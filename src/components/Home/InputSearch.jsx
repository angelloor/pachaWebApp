import React from 'react';
import '../../assets/styles/components/Home.scss';

const InputSearch = props => {
    return (
        <div className="rowImputSearch">
            <div className="containerInputSearch">
                <input className="inputSearch" type="text" placeholder="Buscar" />
            </div>
        </div>
    );
};


export default InputSearch;