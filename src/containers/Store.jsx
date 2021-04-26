import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/BackgroundImage.scss';
import '../assets/styles/components/Home.scss';
import Layout from '../components/Layout';

const Store = (props) => {

    return (
        <div className="containerHome">
            <Layout>
                <div className="titleSection">
                    <h1 className="title">Tienda</h1>
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
