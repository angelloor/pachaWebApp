import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Alert } from 'reactstrap'
import { cambiarUsers } from '../actions/index.js'
import noAutorizado from '../assets/static/noAutorizado.svg'
import '../assets/styles/BackgroundImage.scss'
import '../assets/styles/components/Home.scss'
import '../assets/styles/components/Users.scss'
import '../assets/styles/noFound.scss'
import InputSearch from '../components/InputSearch'
import Layout from '../components/Layout'
import PageLoading from '../components/PageLoading'
import ItemUser from '../components/User/ItemUser'
import Http from '../libs/http'

const Users = ({ cambiarUsers }) => {
    const username = sessionStorage.getItem('username')

    useEffect(async () => {
        await getUsers()
    }, [])

    //estado
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [query, setQuery] = useState('')

    //function
    const getUsers = async () => {
        setLoading(true)
        Http.instance.post('/webApp/listUsers')
            .then(response => {
                setLoading(false)
                cambiarUsers(response.body)
                setUsers(response.body)
            })
            .catch((error) => {
                setLoading(false)
                console.log(error)
            })
    }

    const filterUsers = users.filter((user) => {
        return user.names.toLowerCase().includes(query)
    })

    return (
        <>
            {(username)
                ?
                <div className="containerHome">
                    <Layout>
                        {(loading) ? <PageLoading /> :
                            <>
                                <div className="titleSection">
                                    <p>Inicio /</p>
                                    <p className="title">Usuarios</p>
                                </div>
                                <InputSearch query={query} setQuery={setQuery} />
                                <div className="containerItemUser">
                                    {(filterUsers.length != 0)
                                        ?
                                        filterUsers.map(user =>
                                            <ItemUser key={user._id} user={user} />
                                        )
                                        :
                                        <Alert color="success">No se ha encontrado resultados</Alert>
                                    }
                                </div>
                            </>}
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

const mapDispatchToProps = {
    cambiarUsers
}

const mapStateToProps = state => {
    return {
        users: state.users,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
