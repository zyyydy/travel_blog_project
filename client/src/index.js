import React from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import {reducers} from './reducers';

import App from './App';
import './index.css';

const store = configureStore({reducer: reducers })

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Provider store = {store}>
        <App />
    </Provider>
);

