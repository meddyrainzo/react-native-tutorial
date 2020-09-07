import 'react-native-gesture-handler';

import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './reducers/reducers';
import {TabNavigator} from './Routes/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
