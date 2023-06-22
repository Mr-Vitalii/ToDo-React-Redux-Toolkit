import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App/App';

import { Provider } from "react-redux";
import store, {persistor } from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <PersistGate loading={null} persistor={persistor}>
                <Provider store={store}>
                        <App />
                </Provider>
        </PersistGate>


);


