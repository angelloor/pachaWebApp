import React from 'react';
import { connect } from 'react-redux';
import iconCamera from '../assets/static/edit.svg';
import newImg from '../assets/static/newImg.png';
import '../assets/styles/BackgroundImage.scss';
import '../assets/styles/components/Home.scss';
import '../assets/styles/components/News.scss';
import InputSearch from '../components/InputSearch';
import Layout from '../components/Layout';
import ItemStore from '../components/Store/ItemStore';

const Store = (props) => {

    const click = () => {
        console.log('click')
    }

    const handleChange = () => {
        console.log('change')

    }

    return (
        <div className="containerHome">
            <Layout>
                <div className="titleSection">
                    <h1 className="title">Tienda</h1>
                </div>
                <div className="containerNews">
                    <div className="containerCard">
                        <div className="containerElement">
                            <div className="containerImg">
                                <img src={newImg} alt="Imagen de noticia" />
                                <label htmlFor="upload-photo">
                                    <img src={iconCamera} alt="imgCamera" />
                                </label>
                                <input type="file" name="photo" id="upload-photo" />
                            </div>
                            <div className="containerInputBox">
                                <input className="input" type="text" placeholder="Nombre" onChange={handleChange} />
                            </div>
                            <div className="containerInputBox area">
                                <textarea className="input" name="" id="" cols="30" rows="10" placeholder="Descripcion" onChange={handleChange}></textarea>
                            </div>
                            <div className="containerInputBox">
                                <input className="input" type="text" placeholder="Precio" onChange={handleChange} />
                            </div>
                            <div className="containerBtns">
                                <a className="btn" onClick={click}>Agregar</a>
                                <a className="btn" onClick={click}>Actualizar</a>
                            </div>
                        </div>
                    </div>
                    <div className="containerItems">
                        <InputSearch />
                        <ItemStore />
                        <ItemStore />
                        <ItemStore />
                        <ItemStore />
                        <ItemStore />
                        <ItemStore />
                        <ItemStore />
                        <ItemStore />
                        <ItemStore />
                        <ItemStore />
                        <ItemStore />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        autor: state.autor,
    };
};

export default connect(mapStateToProps, null)(Store);
