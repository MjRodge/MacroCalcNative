import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ThemeProvider } from 'react-native-elements';
import { persistor, reduxStore } from './src/store';
import { theme } from './src/theme';

import MainStackNavigator from './src/navigation/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <MainStackNavigator />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}
