import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Homescreen from './components/Homescreen';

const initialState = {
  action: 'open-menu',
};

const reducer = (state = initialState) => {
  return state;
};

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Homescreen />
  </Provider>
);

export default App;
