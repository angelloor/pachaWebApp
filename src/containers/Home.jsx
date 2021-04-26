import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/BackgroundImage.scss';
import '../assets/styles/components/Home.scss';
import Layout from '../components/Layout';

const Home = (props) => {
  return (
    <div className="containerHome">
      <Layout>
        <h1>Inicio</h1>
      </Layout>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    autor: state.autor,
  };
};

export default connect(mapStateToProps, null)(Home);
