import React from 'react'
import iconDelete from '../../assets/static/delete.svg'
import iconEdit from '../../assets/static/edit.svg'
import '../../assets/styles/components/News.scss'

const ItemNews = ({ item, handleDelete, handleUpdate }) => {
    return (
        <div className="containerItem">
            <p className="title">{item.title}</p>
            <a className="btnItem" onClick={() => handleUpdate(item._id)}>
                <img className="imgItem" src={iconEdit} alt="imgEdit" />
            </a>
            <a className="btnItem" onClick={() => handleDelete(item._id)}>
                <img className="imgItem" src={iconDelete} alt="imgDelete" />
            </a>
        </div>
    )
}

export default ItemNews