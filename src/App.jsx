// App.js
import React from 'react';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteDecider from './App/RouteDecider';
import { Provider } from 'react-redux';
import { persistor, store } from './Store/Store';

import { PersistGate } from 'redux-persist/integration/react';
const App = () => {
  return (
    <>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Router>
      <RouteDecider />
    </Router>
    </PersistGate>
    </Provider>
    </>
  );
}

export default App;