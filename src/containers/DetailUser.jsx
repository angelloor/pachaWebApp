import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Alert } from 'reactstrap'
import { cambiarYourShopping } from '../actions/index.js'
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
import { getDate } from '../utils/otherUtils.js'

const DetailUser = (props) => {
    const username = sessionStorage.getItem('username')
    let { id } = useParams();

    const [user, setUser] = useState({})
    const [content, setContent] = useState([])

    useEffect(() => {
        getData(id)
    }, [])

    const getData = (id) => {
        Http.instance.post('/webApp/getData', { _id: id })
            .then(response => {
                console.log(response.body.yourShopping)
                setUser(response.body.user)
                props.cambiarYourShopping(response.body.yourShopping)
                setContent(response.body.content)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleDelivery = (id, index) => {
        setIndex(index)
        openModal('', 'Estas seguro de entregar el premio?', 1, id)
    }

    const handleReturnDelivery = (id, index) => {
        setIndex(index)
        openModal('', 'Estas seguro retornar el premio?', 2, id)
    }

    const changeStateYourShopping = (id) => {
        const array = props.yourShopping

        console.log(array)

        const item = array.filter((item) => item._id == id)
        const newItem = {
            ...item[0],
            deliveryStatus: !item[0].deliveryStatus,
            deliveryDate: (item[0].deliveryDate) ? '' : getDate()
        }

        array.splice(index, 1)
        array.splice(index, 0, newItem)
        return array
    }


    const confirm = (select) => {
        const body = {
            itemBuy: itemSelect
        }
        if (select == 1) {
            Http.instance.post('/webApp/delivery', body)
                .then((response) => {
                    let newArray = changeStateYourShopping(itemSelect)
                    props.cambiarYourShopping(newArray)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            Http.instance.post('/webApp/returnDelivery', body)
                .then((response) => {
                    let newArray = changeStateYourShopping(itemSelect)
                    props.cambiarYourShopping(newArray)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        closeModal()
    }
    //modal
    const [modal, setModal] = useState(false)

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [select, setSelect] = useState(0)
    const [itemSelect, setItemSelect] = useState('')
    const [index, setIndex] = useState(undefined)

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
                                <div className={(props.yourShopping.length == 0 ? 'otherCss' : '')}>
                                    {(props.yourShopping.length == 0) ?
                                        <Alert color="success">No tiene compras aún</Alert>
                                        :
                                        props.yourShopping.map((item, index) => <YourShoppingItem key={item._id} item={item} index={index} handleDelivery={handleDelivery} handleReturnDelivery={handleReturnDelivery} />)

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

const mapStateToProps = state => {
    return {
        yourShopping: state.yourShopping,
    }
}

const mapDispatchToProps = {
    cambiarYourShopping,
}


export default connect(mapStateToProps, mapDispatchToProps)(DetailUser)
