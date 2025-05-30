import React from 'react'; // Don't forget to import React
import '../css/home.css';
import Sidebar from './sidebar';
import Top  from './top';


export default function Home() { // Capitalize function names for React components
  return (
    <div className="home-container">
        <div className="container">
            <Top/>
            <Sidebar/>

        </div>
     
     </div>
  )
}