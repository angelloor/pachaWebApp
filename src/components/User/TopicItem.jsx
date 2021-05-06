import React from 'react'
import Http from '../../libs/http'

const TopicItem = ({ item }) => {
    const { imageUrl, name } = item
    const urlServer = Http.instance.server
    const urlImgCategory = `${urlServer}${imageUrl}`

    return (
        <>
            <div className="containerElement">
                <div className="containerCategory">
                    <img src={urlImgCategory} alt="imagen de categoria" />
                </div>
                <div className="containerTitle">
                    <p>{name}</p>
                </div>
            </div>
        </>
    )
}

export default TopicItem