import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from './components/read';
import Update from './components/update';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Read />} />
        </Routes>
        <Routes>
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>    
  );
}

export default App;