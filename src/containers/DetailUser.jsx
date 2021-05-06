import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Alert } from 'reactstrap'
import noAutorizado from '../assets/static/noAutorizado.svg'
import '../assets/styles/BackgroundImage.scss'
import '../assets/styles/components/DetailUser.scss'
import '../assets/styles/components/Home.scss'
import '../assets/styles/noFound.scss'
import Layout from '../components/Layout'
import ModalConfirm from '../components/ModalConfirm'
import CardUser from '../components/User/CardUser'
import ChallengueItem from '../components/User/ChallengueItem'
import TopicItem from '../components/User/TopicItem'
import YourShoppingItem from '../components/User/YourShoppingItem'
import Http from '../libs/http'

const DetailUser = (props) => {
    const username = sessionStorage.getItem('username')
    let { id } = useParams();

    const [user, setUser] = useState({})
    const [yourShopping, setYourShopping] = useState([])
    const [content, setContent] = useState([])

    useEffect(() => {
        getData(id)
    }, [])

    const getData = (id) => {
        Http.instance.post('/webApp/getData', { _id: id })
            .then(response => {
                console.log(response.body);
                setUser(response.body.user)
                setYourShopping(response.body.yourShopping)
                setContent(response.body.content)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleDelivery = (id) => {
        openModal('', 'Estas seguro de entregar el premio?', 1, id)
    }

    const handleReturnDelivery = (id) => {
        openModal('', 'Estas seguro retornar el premio?', 2, id)
    }

    const confirm = (select) => {
        const body = {
            itemBuy: itemSelect
        }
        if (select == 1) {
            Http.instance.post('/webApp/delivery', body)
                .then((response) => {
                    console.log(response)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            Http.instance.post('/webApp/returnDelivery', body)
                .then((response) => {
                    console.log(response)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        getData(id)
        closeModal()
    }
    //modal
    const [modal, setModal] = useState(false)

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [select, setSelect] = useState(0)
    const [itemSelect, setItemSelect] = useState('')

    const openModal = (title, text, select, id) => {
        setTitle(title)
        setText(text)
        setModal(true)
        setSelect(select)
        setItemSelect(id)
    }

    const closeModal = () => {
        setTitle('')
        setText('')
        setModal(false)
        setSelect(0)
        setItemSelect('')
    }

    return (
        <>
            {(username)
                ?
                <div className="containerHome">
                    <Layout>
                        <ModalConfirm modal={modal} title={title} text={text} toggle={closeModal} confirm={confirm} select={select} />
                        <div className="titleSection">
                            <p>Inicio / </p>
                            <p className="title">Detalle de usuario</p>
                        </div>
                        <div className="containerDetailUser">
                            <div className="containerCard">
                                <div>
                                    <CardUser user={user} />
                                </div>
                            </div>
                            <div className="containerShopping">
                                <div className={(yourShopping.length == 0 ? 'otherCss' : '')}>
                                    {(yourShopping.length == 0) ?
                                        <Alert color="success">No tiene compras aún</Alert>
                                        :
                                        yourShopping.map((item) => <YourShoppingItem key={item._id} item={item} handleDelivery={handleDelivery} handleReturnDelivery={handleReturnDelivery} />)

                                    }
                                </div>
                            </div>
                            <div className="containerComun">
                                {(user.age < 15)
                                    ?
                                    <div className={content.length == 0 ? 'otherCss' : ''}>
                                        {
                                            (content.length == 0) ?
                                                <Alert color="success">No tiene clases finalizadas aún</Alert>
                                                :
                                                content.map((item) => <TopicItem key={item._id} item={item} />)
                                        }
                                    </div>

                                    :
                                    <div className={content.length == 0 ? 'otherCss' : ''}>
                                        {
                                            (content.length == 0) ?
                                                <Alert color="success">No tiene retos finalizados aún</Alert>
                                                :
                                                content.map((item) => <ChallengueItem key={item._id} item={item} />)
                                        }
                                    </div>


                                }
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

export default DetailUser
