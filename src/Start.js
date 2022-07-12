import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Project from './Project';
import Resume from './Resume';
import './App.css';
export default class Start extends Component {
  render() {
    return (
      <div>
        <Router>
    <Routes>
        <Route exact path='/' element={<Resume></Resume>}></Route>
        <Route exact path='/project' element={<Project></Project>}></Route>
        <Route exact path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
 
  </Router>
      </div>
    )
  }
}

