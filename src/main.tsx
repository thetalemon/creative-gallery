import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './index.css'
// import {
//   BrowserRouter as Router,
// } from 'react-router-dom'
// import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Router> */}
      {/* <HelmetProvider> */}
        <App />
      {/* </HelmetProvider> */}
    {/* </Router> */}
  </React.StrictMode>
)
