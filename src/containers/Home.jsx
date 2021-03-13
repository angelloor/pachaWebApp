import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/Home.scss';
import Componente from '../components/Componente';

const Home = ({ autor }) => {
  return (
    <>
      <h1>Hola Mundo desde ReactJS</h1>
      <Componente nombre={autor.nombre} />
    </>
  )
}

Home.propTypes = {
  autor: PropTypes.object
};

const mapStateToProps = state => {
  return {
    autor: state.autor,
  };
};

export default connect(mapStateToProps, null)(Home);
