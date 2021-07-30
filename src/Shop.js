import { useState } from 'react'
import React from 'react'
import { render } from "react-dom";
import MainNavigation from "./Layout/MainNavigation"
import { Route, Switch } from 'react-router-dom';
import picture1 from './Images/Profile Pic 2.jpg';
import { FaInstagram } from 'react-icons/fa';
import { FaAnchor } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaFlickr } from 'react-icons/fa';

function Shop() {
  // Return:
  return (
    <div className="main">
        <header className="header-main">
          <div className="logo-title"><a href="./"><h2>ChooChooChen Arts</h2></a></div>
          <div className="menu"><MainNavigation /></div>
        </header>
        <p>Purchase NFTs on OpenSea or Engines of Time coming soon. Get physical copies through RedBubble.</p>
       
    </div>
  );
}

export default Shop;
