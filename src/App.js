import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Dashboard from './pages/Dashboard';
import Barang from './pages/Barang';
import Pelelang from './pages/Pelelang';
import DataLelang from './pages/DataLelang';
import Lapor from './pages/Lapor';
import Cetak from './pages/Cetak';
import LogOut from './pages/LogOut';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/barang' component={Barang} />
        <Route path='/pelelang' component={Pelelang} />
        <Route path='/data-lelang' component={DataLelang} />
        <Route path='/lapor' component={Lapor} />
        <Route path='/cetak' component={Cetak} />
        <Route path='/logout' component={LogOut} />
      </Routes>
    </Router>
  );
}

export default App;
