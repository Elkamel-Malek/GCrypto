// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import CoursePage from './pages/CoursePage';
// Définissez les styles globaux en tant que constantes JavaScript
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #343a40;
    color: white;
    font-family: Arial, sans-serif;
  }

  /* Ajoutez d'autres styles globaux si nécessaire */
`;

function App() {
  return (
    <Router>
      {/* Utilisez les styles globaux dans votre composant App */}
      <GlobalStyle />
      
      {/* Le reste de votre application */}
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course/:courseId" element={<CoursePage />}/>
      </Routes>
    </Router>
  );
}

export default App;
