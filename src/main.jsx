import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Entry from './Pages/Entry.jsx';
import Home from './Component/home.jsx';
import Gamehub from './Pages/Gamehub.jsx';
import Quiz from './Pages/Quiz.jsx';
import './css/home.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entry" element={<Entry />} />
            <Route path="/gamehub" element={<Gamehub />} />
             <Route path="/quiz" element={<Quiz/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
