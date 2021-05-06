import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/components/Users.scss'
import { getLevel } from '../../Utils/index'

const ItemUser = props => {
    const { names, coint, experience, _id } = props.user

    const level = getLevel(experience)

    return (
        <div className="containerItem">
            <div className="name">
                <p>{names}</p>
            </div>
            <div className="level">
                <p>{`Nivel ${level.level}`}</p>
            </div>
            <div className="coint">
                <p>{`Ambiental Coint ${coint}`}</p>
            </div>
            <div className="containerBtn">
                <Link className="btn" to={`/detailUser/${_id}`}>Ver más</Link>
            </div>
        </div>
    )
}

export default ItemUser