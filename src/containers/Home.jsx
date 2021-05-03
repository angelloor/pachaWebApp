import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/BackgroundImage.scss';
import '../assets/styles/components/Home.scss';
import Layout from '../components/Layout';
const Home = (props) => {

  const loading = true

  return (
    <div className="containerHome">
      <Layout>
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
