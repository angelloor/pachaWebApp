import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Alert } from 'reactstrap'
import iconCamera from '../assets/static/edit.svg'
import newImg from '../assets/static/newImg.svg'
import noAutorizado from '../assets/static/noAutorizado.svg'
import '../assets/styles/BackgroundImage.scss'
import '../assets/styles/components/Home.scss'
import '../assets/styles/components/News.scss'
import '../assets/styles/noFound.scss'
import InputSearch from '../components/InputSearch'
import Layout from '../components/Layout'
import ModalConfirm from '../components/ModalConfirm'
import SimpleModal from '../components/SimpleModal'
import ItemStore from '../components/Store/ItemStore'
import Http from '../libs/http'

const Store = (props) => {
    const username = sessionStorage.getItem('username')

    useEffect(() => {
        getStoreItem()
    }, [])

    //selectore
    const inputFile = document.getElementById('upload-photo')
    const imageElement = document.getElementById('imagePreviewStore')

    const sname = document.getElementById('name')
    const sdescription = document.getElementById('description')
    const sprice = document.getElementById('price')

    //estado
    const [query, setQuery] = useState('')
    const [storeItem, setStoreItem] = useState([])

    //inputs
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    //modal
    const [modal, setModal] = useState(false)
    const [titleModal, setTitleModal] = useState('')
    const [text, setText] = useState('')

    //modal Confirm
    const [modalConfirm, setModalConfirm] = useState(false)
    const [titleConfirm, setTitleConfirm] = useState('')
    const [textConfirm, setTextConfirm] = useState('')
    const [select, setSelect] = useState(0)
    const [itemSelect, setItemSelect] = useState('')

    //change input
    const handleName = (e) => {
        setName(e.target.value)
        console.log(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
        console.log(e.target.value)
    }

    const handlePrice = (e) => {
        setPrice(e.target.value)
        console.log(e.target.value)
    }

    //funciones
    const getStoreItem = () => {
        Http.instance.get('/storeItem')
            .then((response) => {
                setStoreItem(response.body)
                console.log(response.body);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleDelete = (id) => {
        console.log(id)
        openModalConfirm('', 'estas seguro de elimar?', 1, id)
    }

    const handleUpdate = (id) => {
        console.log(id)
        sessionStorage.setItem('option', 'actualizar')
        openModalConfirm('', 'estas seguro de actualizar?', 2, id)
    }

    const filterStoreItem = storeItem.filter((storeItem) => {
        return storeItem.title.toLowerCase().includes(query)
    })

    const handleChangeImage = (e) => {
        const selectedFile = inputFile.files[0]
        const urlImg = URL.createObjectURL(selectedFile)
        imageElement.setAttribute('src', urlImg)
    }

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

    //modal
    const openModalConfirm = (title, text, select, id) => {
        setTitleConfirm(title)
        setTextConfirm(text)
        setModalConfirm(true)
        setSelect(select)
        setItemSelect(id)
    }

    const closeModalConfirm = () => {
        setTitleConfirm('')
        setTextConfirm('')
        setModalConfirm(false)
        setSelect(0)
        setItemSelect('')
    }

    const clearStatus = () => {
        imageElement.setAttribute('src', newImg)
        inputFile.value = ''
        sname.value = ''
        sdescription.value = ''
        sprice.value = ''
        setName('')
        setDescription('')
        setPrice('')
        sessionStorage.removeItem('option')
        sessionStorage.removeItem('itemSelect')
    }

    const handleSubmit = () => {
        const iSelect = sessionStorage.getItem('itemSelect')

        const selectedFile = inputFile.files[0]

        const option = sessionStorage.getItem('option')

        if (option != 'actualizar') {
            console.log('tienes que comprobar')
            if (!selectedFile) {
                openModal('', 'Tienes que seleccionar una foto para el item')
                return
            }
        }

        if (!name) {
            openModal('', 'Tienes que ingresar el nombre del item')
            return
        }

        if (!description) {
            openModal('', 'Tienes que ingresar la descripcion del item')
            return
        }

        if (!price) {
            openModal('', 'Tienes que ingresar el precio del item')
            return
        }

        if (option == 'actualizar') {
            console.log('actualizar');
            if (selectedFile) {
                console.log('http con imagen')

                var formData = new FormData()

                formData.append('name', name)
                formData.append('description', description)
                formData.append('price', price)
                formData.append('id', iSelect)
                formData.append('image', selectedFile)

                Http.instance.postFormData('/webApp/saveCImageStoreItem', formData)
                    .then((response) => {
                        if (response.body) {
                            openModal('', 'Item actualizado correctamente')
                        }
                        getStoreItem()
                    })
                    .catch((err) => {
                        console.log(err)
                    })

            } else {
                console.log('http sin imagen')
                const body = {
                    name,
                    description,
                    price,
                    id: iSelect,
                }
                Http.instance.post('/webApp/saveSImageStoreItem', body)
                    .then((response) => {
                        if (response.body) {
                            openModal('', 'Noticia actualizada correctamente')
                        }
                        getStoreItem()
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }


        } else {
            console.log('agregar');
            var formData = new FormData()

            formData.append('image', selectedFile)
            formData.append('name', name)
            formData.append('description', description)
            formData.append('price', price)

            Http.instance.postFormData('/webApp/saveImageStoreItem', formData)
                .then((response) => {
                    if (response.body) {
                        openModal('', 'Item agregado correctamente')
                    }
                    getStoreItem()
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        clearStatus()
    }

    const confirm = () => {
        if (select == 1) {
            console.log('eliminar');
            console.log(itemSelect)
            Http.instance.delete(`/storeItem`, itemSelect)
                .then((response) => {
                    if (response.body) {
                        openModal('', 'Item Eliminado Eliminada')
                        clearStatus()
                    }
                    getStoreItem()
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            console.log('traer info item para ctualizar');
            console.log(itemSelect)
            Http.instance.get(`/storeItem?idStoreItem=${itemSelect}`)
                .then((response) => {
                    console.log(response);

                    sname.value = response.body[0].title
                    sdescription.value = response.body[0].description
                    sprice.value = response.body[0].price

                    setName(response.body[0].title)
                    setDescription(response.body[0].description)
                    setPrice(response.body[0].price)

                    sessionStorage.setItem('itemSelect', response.body[0]._id)
                    const url = `${Http.instance.server}${response.body[0].urlImage}`
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
                            <p className="title">Tienda</p>
                        </div>
                        <div className="containerNews">
                            <div className="containerCard">
                                <div className="containerElement">
                                    <div className="containerImg">
                                        <img src={newImg} alt="Imagen de noticia" id="imagePreviewStore" />
                                        <label htmlFor="upload-photo">
                                            <img src={iconCamera} alt="imgCamera" />
                                        </label>
                                        <input type="file" name="photo" id="upload-photo" onChange={handleChangeImage} />
                                    </div>
                                    <div className="containerInputBox">
                                        <input className="input" id="name" type="text" placeholder="Nombre" onChange={handleName} />
                                    </div>
                                    <div className="containerInputBox area">
                                        <textarea className="input" id="description" cols="30" rows="10" placeholder="Descripcion" onChange={handleDescription}></textarea>
                                    </div>
                                    <div className="containerInputBox">
                                        <input className="input" id="price" type="number" placeholder="Precio" onChange={handlePrice} />
                                    </div>
                                    <div className="containerBtns">
                                        <a className="btn" onClick={clearStatus}>Cancelar</a>
                                        <a className="btn" onClick={handleSubmit}>Guardar</a>
                                    </div>
                                </div>
                            </div>
                            <div className="containerItems">
                                <InputSearch query={query} setQuery={setQuery} />
                                <div className="containerI">
                                    {
                                        (filterStoreItem.length != 0)
                                            ?
                                            filterStoreItem.map((item) =>
                                                <ItemStore key={item._id} item={item} handleDelete={handleDelete} handleUpdate={handleUpdate} />
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

export default connect(mapStateToProps, null)(Store)
