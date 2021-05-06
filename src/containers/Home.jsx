import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import noAutorizado from '../assets/static/noAutorizado.svg'
import '../assets/styles/BackgroundImage.scss'
import '../assets/styles/components/Home.scss'
import '../assets/styles/noFound.scss'
import Layout from '../components/Layout'

const Home = (props) => {
  const username = sessionStorage.getItem('username')

  return (
    <>
      {(username)
        ?
        <div className="containerHome">
          <Layout>
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
    userLogin: state.userLogin,
  }
}

export default connect(mapStateToProps, null)(Home)
