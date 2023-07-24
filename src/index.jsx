import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route index path='/home' element={<Home/>}/>
            <Route path='/dentist/:id' element={<Detail/>}/>
            <Route path='/contacto' element={<Contact/>}/>
            <Route path='/favs' element={<Favs/>}/>
        </Routes>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);


