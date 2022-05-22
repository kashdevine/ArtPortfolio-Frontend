import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminBiographies from './components/pages/AdminBiographies';
import AdminBiography from './components/pages/AdminBiography';
import AdminProject from './components/pages/AdminProject';
import AdminProjectImage from './components/pages/AdminProjectImage';
import AdminProjectImages from './components/pages/AdminProjectImages';
import AdminProjectLead from './components/pages/AdminProjectLead';
import AdminProjectLeads from './components/pages/AdminProjectLeads';
import AdminProjects from './components/pages/AdminProjects';
import AdminProjectVideo from './components/pages/AdminProjectVideo';
import AdminProjectVideos from './components/pages/AdminProjectVideos';
import Contact from './components/pages/Contact';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Project from './components/pages/Project';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='projects' element={<Projects/>}>
          <Route path=':id' element={<Project/>}/>
        </Route>
        <Route path='dashboard' element={<Dashboard/>}>
          <Route path='projects' element={<AdminProjects/>}>
            <Route path=':id' element={<AdminProject/>}/>
          </Route>
          <Route path='images' element={<AdminProjectImages/>}>
            <Route path=':id' element={<AdminProjectImage/>}/>
          </Route>
          <Route path='videos' element={<AdminProjectVideos/>}>
            <Route path=':id' element={<AdminProjectVideo/>}/>
          </Route>
          <Route path='bios' element={<AdminBiographies/>}>
            <Route path=':id' element={<AdminBiography/>}/>
          </Route>
          <Route path='leads' element={<AdminProjectLeads/>}>
            <Route path=':id' element={<AdminProjectLead/>}/>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
