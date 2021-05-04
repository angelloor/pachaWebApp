import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/BackgroundImage.scss';
import '../assets/styles/components/Home.scss';
import '../assets/styles/components/Users.scss';
import InputSearch from '../components/InputSearch';
import Layout from '../components/Layout';
import PageLoading from '../components/PageLoading';
import ItemUser from '../components/User/ItemUser';

const Users = (props) => {
    const loading = false
    return (
        <div className="containerHome">
            <Layout>
                {(loading) ? <PageLoading /> :
                    <>
                        <div className="titleSection">
                            <p>Inicio /</p>
                            <p className="title">Usuarios</p>
                        </div>
                        <InputSearch />
                        <div className="containerItemUser">
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                            <ItemUser />
                        </div>
                    </>}
            </Layout>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        autor: state.autor,
    };
};

export default connect(mapStateToProps, null)(Users);
