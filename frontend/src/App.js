import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Header from './components/Header'
import NoteList from './pages/NotesList'
import NotePage from './pages/NotePage'
import React from "react";

function App() {
  return (
    <BrowserRouter>
    <div className="container dark">
        <div className="app">
          <Header/>
    <Routes>
      
      <Route path="/" element={<NoteList />}/>
      <Route path="/note/:id" element={<NotePage/>}/>
  
      </Routes>
      </div>
      </div>

      </BrowserRouter>
  );
}

export default App;
