import React from 'react';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import configureStore from './store/ConfigStore';
import {Provider} from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
const App = () =>(
    <div>
    <Provider store={store}>
      <AppRouter />
      </Provider>
      </div>
)
export default App;
