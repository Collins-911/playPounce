import React from 'react';
import '../css/home.css';
import Sidebar from './sidebar';
import Top from './top';
import Latest from './latest';

export default function Home() {
  return (
    <div className="home-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="top-container">
        <Top />
        <Latest />
      </div>
    </div>
  );
}
