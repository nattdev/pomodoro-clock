import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown, faArrowUp, faPlay, faPause, faArrowsRotate} from '@fortawesome/free-solid-svg-icons';

library.add(faArrowDown, faArrowUp, faPlay, faPause, faArrowsRotate);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
