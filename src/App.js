import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import PopularSection from './components/PopularSection/PopularSection';
import Advertising from './components/Advertising/Advertising';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <PopularSection />
        <Advertising />
      </div>
    </div>
  );
};

export default App;
