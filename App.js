import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, reduxStore } from './src/store';

import MainStackNavigator from './src/navigation/AppNavigator';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <PersistGate loading={null} persistor={persistor}>
          <MainStackNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
