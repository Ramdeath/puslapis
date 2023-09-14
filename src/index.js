import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/lessons.css';

//import AppRouter from './router';
//import { RouterProvider } from 'react-router-dom';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';

import Desimtokai from './pages/pamokos/desimtokai/desimtokai';
import Vienuoliktokai from './pages/pamokos/vienuoliktokai/vienuoliktokai';
import Dvyliktokai from './pages/pamokos/dvyliktokai/dvyliktokai';
import Grafika from './pages/pamokos/grafika/grafika';

import NavBar from './components/navbar';

import reportWebVitals from './reportWebVitals';

import ScrollToTop from './components/scrolltotop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pamokos/desimtokai" element={<Desimtokai/>} />
        <Route path="/pamokos/vienuoliktokai" element={<Vienuoliktokai />} />
        <Route path="/pamokos/dvyliktokai" element={<Dvyliktokai/>} />
        <Route path="/pamokos/grafika" element={<Grafika/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
