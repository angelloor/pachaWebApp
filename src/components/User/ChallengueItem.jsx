import React from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import Http from '../../libs/http';

const ChallengueItem = ({ item }) => {

    const { imageUrl, imageCategory, name } = item

    const urlServer = Http.instance.server
    const urlImgCategory = `${urlServer}/green${imageCategory}`
    const urlImgChallenge = `${urlServer}${imageUrl}`

    const options = {
        thumbnails: {
            showThumbnails: false,
        }
    }

    return (
        <>
            <div className="containerElement">
                <div className="containerCategory">
                    <img src={urlImgCategory} alt="imagen de categoria" />
                </div>
                <div className="containerTitle">
                    <p>{name}</p>
                </div>
                <div className="containerImg">
                    <SRLWrapper options={options}>
                        <img src={urlImgChallenge} alt="imagen del reto" />
                    </SRLWrapper>
                </div>
            </div>
        </>
    );
};

export default ChallengueItem;