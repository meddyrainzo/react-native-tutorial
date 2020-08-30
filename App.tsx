import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Homescreen from './components/Homescreen';
import {rootReducer} from './reducers/reducers';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <Homescreen />
  </Provider>
);

export default App;
