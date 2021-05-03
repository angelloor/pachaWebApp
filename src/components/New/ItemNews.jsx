import React from 'react';
import iconDelete from '../../assets/static/delete.svg';
import iconEdit from '../../assets/static/edit.svg';
import '../../assets/styles/components/News.scss';


const ItemNews = props => {
    const click = () => {
        console.log('click')
    }
    return (
        <div className="containerItem">
            <p className="title">Titulo</p>
            <a className="btnItem" onClick={click}>
                <img className="imgItem" src={iconEdit} alt="imgEdit" />
            </a>
            <a className="btnItem" onClick={click}>
                <img className="imgItem" src={iconDelete} alt="imgDelete" />
            </a>
        </div>
    );
};

export default ItemNews;