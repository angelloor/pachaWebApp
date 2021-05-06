import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import iconCamera from '../assets/static/edit.svg'
import newImg from '../assets/static/newImg.png'
import noAutorizado from '../assets/static/noAutorizado.svg'
import '../assets/styles/BackgroundImage.scss'
import '../assets/styles/components/Home.scss'
import '../assets/styles/components/News.scss'
import '../assets/styles/noFound.scss'
import InputSearch from '../components/InputSearch'
import Layout from '../components/Layout'
import ItemStore from '../components/Store/ItemStore'

const Store = (props) => {
    const username = sessionStorage.getItem('username')

    const click = () => {
        console.log('click')
    }

    const handleChange = () => {
        console.log('change')

    }

    return (
        <>
            {(username)
                ?
                <div className="containerHome">
                    <Layout>
                        <div className="titleSection">
                            <p>Inicio / </p>
                            <p className="title">Tienda</p>
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
                                <div className="containerI">
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
                        </div>
                    </Layout>
                </div>
                :
                <>
                    <div className="containerNofount display">
                        <img src={noAutorizado} alt="No Fount" width="250px" />
                        <Link to="/">Iniciar sesión</Link>
                    </div>
                </>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        autor: state.autor,
    }
}

export default connect(mapStateToProps, null)(Store)
