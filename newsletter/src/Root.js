import React from 'react';
import { HashRouter } from 'react-router-dom';
import App from './App';

const Root = () => ( // wrap App in Router
    <HashRouter>
        <App />
    </HashRouter>
);

export default Root;