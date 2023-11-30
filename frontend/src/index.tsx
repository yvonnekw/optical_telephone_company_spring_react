
import React from 'react'
import ReactDOM from 'react-dom';

import { App } from './App';
import './assets/global.css';
import { Home } from '@mui/icons-material';


//@ts-ignore
const root = ReactDOM.createRoot (
    document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)