import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home';
import Test from './pages/Test';

const App = () => {
    
    return (
        <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>    
                <Route index element={<Home/>}/>
                <Route path='test' element={<Test/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
    );
};

export default App;