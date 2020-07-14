import React from 'react';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import createSagaMiddleware from 'redux-saga';
import Form from './components/Form'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from './sagas';
import rootReducer from './reducers';


function App() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return (
    <Provider store={store}>
    <div className="App">
     <Form/>
    </div>
    </Provider>
  );
}

export default App;
