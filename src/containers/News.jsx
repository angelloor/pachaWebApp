import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Alert } from 'reactstrap'
import iconCamera from '../assets/static/edit.svg'
import newImg from '../assets/static/newImg.png'
import noAutorizado from '../assets/static/noAutorizado.svg'
import '../assets/styles/BackgroundImage.scss'
import '../assets/styles/components/Home.scss'
import '../assets/styles/components/News.scss'
import '../assets/styles/noFound.scss'
import InputSearch from '../components/InputSearch'
import Layout from '../components/Layout'
import ModalConfirm from '../components/ModalConfirm'
import ItemNews from '../components/New/ItemNews'
import SimpleModal from '../components/SimpleModal'
import Http from '../libs/http'

const News = (props) => {
    const username = sessionStorage.getItem('username')

    useEffect(() => {
        getNews()
    }, [])

    //selectore
    const inputFile = document.getElementById('upload-photo')
    const imageElement = document.getElementById('imagePreview')

    const stitle = document.getElementById('title')
    const sdescription = document.getElementById('description')
    const snameBtn = document.getElementById('nameBtn')
    const slink = document.getElementById('link')





    const [news, setNews] = useState([])
    const [query, setQuery] = useState('')

    //inputs
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [nameBtn, setNameBtn] = useState('')
    const [url, setUrl] = useState('')

    //modal
    const [modal, setModal] = useState(false)
    const [titleModal, setTitleModal] = useState('')
    const [text, setText] = useState('')

    const filterNews = news.filter((news) => {
        return news.title.toLowerCase().includes(query)
    })

    //modal
    const openModal = (title, text) => {
        setTitleModal(title)
        setText(text)
        setModal(true)
    }

    const closeModal = () => {
        setTitleModal('')
        setText('')
        setModal(false)
    }

    //modal Confirm
    const [modalConfirm, setModalConfirm] = useState(false)
    const [titleConfirm, setTitleConfirm] = useState('')
    const [textConfirm, setTextConfirm] = useState('')
    const [select, setSelect] = useState(0)
    const [itemSelect, setItemSelect] = useState('')

    //modal
    const openModalConfirm = (title, text, select, id) => {
        setTitleConfirm(title)
        setTextConfirm(text)
        setModalConfirm(true)
        setSelect(select)
        console.log(select)
        setItemSelect(id)
    }

    const closeModalConfirm = () => {
        setTitleConfirm('')
        setTextConfirm('')
        setModalConfirm(false)
        setSelect(0)
        setItemSelect('')

    }


    //change input
    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleChangeNameBtn = (e) => {
        setNameBtn(e.target.value)
    }

    const handleChangeUrl = (e) => {
        setUrl(e.target.value)
    }

    const getNews = () => {
        Http.instance.get('/news')
            .then((response) => {
                setNews(response.body)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleChangeImage = (e) => {
        const selectedFile = inputFile.files[0]
        const urlImg = URL.createObjectURL(selectedFile)
        imageElement.setAttribute('src', urlImg)
    }

    const handleSubmit = () => {
        const selectedFile = inputFile.files[0]

        if (!selectedFile && select == 2) {
            openModal('', 'Tienes que seleccionar una foto de la noticia')
            return
        }

        if (!title) {
            openModal('', 'Tienes que ingresar el titulo de la noticia')
            return
        }

        if (!description) {
            openModal('', 'Tienes que ingresar la descripcion de la noticia de la noticia')
            return
        }

        if (!nameBtn) {
            openModal('', 'Tienes que ingresar el nombre de boton de la noticia')
            return
        }

        if (!url) {
            openModal('', 'Tienes que ingresar la url de la noticia')
            return
        }

        var formData = new FormData()

        formData.append('image', selectedFile)
        formData.append('title', title)
        formData.append('description', description)
        formData.append('nameBtn', nameBtn)
        formData.append('url', url)

        Http.instance.postFormData('/webApp/saveImageNew', formData)
            .then((response) => {
                if (response.body) {
                    openModal('', 'Noticia agregada correctamente')
                }
                getNews()
            })
            .catch((err) => {
                console.log(err)
            })
    }


    //actualizar
    const handleUpdateSend = () => {
        const selectedFile = inputFile.files[0]

        if (!selectedFile && select == 2) {
            openModal('', 'Tienes que seleccionar una foto de la noticia')
            return
        }

        if (!title) {
            openModal('', 'Tienes que ingresar el titulo de la noticia')
            return
        }

        if (!description) {
            openModal('', 'Tienes que ingresar la descripcion de la noticia de la noticia')
            return
        }

        if (!nameBtn) {
            openModal('', 'Tienes que ingresar el nombre de boton de la noticia')
            return
        }

        if (!url) {
            openModal('', 'Tienes que ingresar la url de la noticia')
            return
        }

        console.log(title)
        console.log(description)
        console.log(nameBtn)
        console.log(url)

        console.log('todo Ok');

    }

    const handleDelete = (id) => {
        openModalConfirm('', 'estas seguro de elimar?', 1, id)
    }

    const handleUpdate = (id) => {
        openModalConfirm('', 'estas seguro de actualizar?', 2, id)
    }

    const confirm = () => {
        if (select == 1) {
            Http.instance.delete(`/news`, itemSelect)
                .then((response) => {
                    if (response.body) {
                        openModal('', 'Noticia Eliminada')
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            Http.instance.get(`/news?idNews=${itemSelect}`)
                .then((response) => {
                    stitle.value = response.body[0].title
                    sdescription.value = response.body[0].description
                    snameBtn.value = response.body[0].nameButton
                    slink.value = response.body[0].linkButton

                    setTitle(response.body[0].title)
                    setDescription(response.body[0].description)
                    setNameBtn(response.body[0].nameButton)
                    setUrl(response.body[0].linkButton)

                    const url = `${Http.instance.server}${response.body[0].imageUrl}`
                    imageElement.setAttribute('src', url)

                })
                .catch((err) => {
                    console.log(err)
                })
        }
        closeModalConfirm()
    }

    return (
        <>
            {(username)
                ?
                <div className="containerHome">
                    <Layout>
                        <SimpleModal modal={modal} title={titleModal} text={text} toggle={closeModal} />
                        <ModalConfirm modal={modalConfirm} title={titleConfirm} text={textConfirm} toggle={closeModalConfirm} confirm={confirm} select={select} />
                        <div className="titleSection">
                            <p>Inicio / </p>
                            <p className="title">Noticias</p>
                        </div>
                        <div className="containerNews">
                            <div className="containerCard">
                                <div className="containerElement">
                                    <div className="containerImg">
                                        <img src={newImg} alt="Imagen de noticia" id="imagePreview" />
                                        <label htmlFor="upload-photo">
                                            <img src={iconCamera} alt="imgCamera" />
                                        </label>
                                        <input type="file" name="photo" id="upload-photo" onChange={handleChangeImage} />
                                    </div>
                                    <div className="containerInputBox">
                                        <input className="input" type="text" id="title" placeholder="Titulo" onChange={handleChangeTitle} />
                                    </div>
                                    <div className="containerInputBox area">
                                        <textarea className="input" name="" id="description" cols="30" rows="10" placeholder="Descripcion" onChange={handleChangeDescription}></textarea>
                                    </div>
                                    <div className="containerInputBox">
                                        <input className="input" type="text" id="nameBtn" placeholder="Nombre Boton" onChange={handleChangeNameBtn} />
                                    </div>
                                    <div className="containerInputBox">
                                        <input className="input" type="text" id="link" placeholder="Url" onChange={handleChangeUrl} />
                                    </div>
                                    <div className="containerBtns">
                                        <a className="btn" onClick={handleUpdateSend}>Actualizar</a>
                                        <a className="btn" onClick={handleSubmit}>Agregar</a>
                                    </div>
                                </div>
                            </div>
                            <div className="containerItems">
                                <InputSearch query={query} setQuery={setQuery} />
                                <div className="containerI">
                                    {
                                        (filterNews.length != 0)
                                            ?
                                            filterNews.map((item) =>
                                                <ItemNews key={item._id} item={item} handleDelete={handleDelete} handleUpdate={handleUpdate} />
                                            )
                                            :
                                            <Alert color="success">No se ha encontrado resultados</Alert>
                                    }
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

export default connect(mapStateToProps, null)(News)
