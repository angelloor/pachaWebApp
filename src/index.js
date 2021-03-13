import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  "autor": {
    nombre: 'Angel Loor'
  }
}

// Debugging para Redux en Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./routes/App', () => {
    console.log('Recargando en caliente')
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('app')
    );
  })
}



