import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/BackgroundImage.scss';
import '../assets/styles/components/Home.scss';
import InputSearch from '../components/Home/InputSearch';
import Layout from '../components/Layout';
import ItemUser from '../components/User/ItemUser';

const Users = (props) => {

    return (
        <div className="containerHome">
            <Layout>
                <div className="titleSection">
                    <h1 className="title">Usuarios</h1>
                </div>
                <InputSearch />
                <div className="containerItemUser">
                    <ItemUser />
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

export default connect(mapStateToProps, null)(Users);
