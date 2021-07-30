import { useState } from 'react'
import React from 'react'
import { render } from "react-dom";
import MainNavigation from "./Layout/MainNavigation"
import Gallery from 'react-photo-gallery';
import photos from './components/photo';

function App() {
  
  
  // Return:
  return (
    <div className="main">
        <header className="header-main">
          <div className="logo-title"><a href="./"><h2>ChooChooChen Arts</h2></a></div>
          <div className="menu"><MainNavigation /></div>
        </header>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div className="blurb">
          <p>A quiet night in Madison, Wisconsin, U.S.A. finds the evening Wisconsin and Southern T5 train rolling into town. Taken: Fall 2020.</p>
        </div>
    </div>
  );
  
}

export default App;
