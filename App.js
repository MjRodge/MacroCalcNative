import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './src/reducers';
import MainStackNavigator from './src/navigation/AppNavigator';


export default class App extends React.Component {
  render() {
    const reduxStore = createStore(reducers, applyMiddleware());
    return (
      <Provider store={reduxStore}>
        <MainStackNavigator />
      </Provider>
    );
  }
}
