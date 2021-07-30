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

function About() {
  // Return:
  return (
    <div className="main">
        <header className="header-main">
          <div className="logo-title"><a href="./"><h2>ChooChooChen Arts</h2></a></div>
          <div className="menu"><MainNavigation /></div>
        </header>
        <div className="about-page">
          <div className="slider-section">
            <div className="left-about">
              <img src={picture1} />
            </div>
            <div className="right-about">
              <div className="right-text">
                <h1>Steven Chen</h1>
                <div class="left-o-paragraph">
                  <p>Trains have always captivated my interest since a kid and have become exciting subjects of my photography today. From there, my interests have expanded to include a wide range of creative topics such as digital media, film, writing, and games. </p>
                </div>
                <div class="left-o-paragraph">
                  <p>My work is currently open for purchase on OpenSea, and available to view on Instagram and Flickr. Enjoy the art!</p>
                </div>
                <div class="symbols">
                  <p><FaInstagram />
                    &nbsp;&nbsp;<FaAnchor />&nbsp;&nbsp;
                    <FaYoutube />&nbsp;&nbsp;
                    <FaFlickr />
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="slider-section">
            <div className="right-about">
              <img src={picture1} />
            </div>
            <div className="left-about">
              <div className="right-text">
                <h1>Steven Chen</h1>
                <div class="left-o-paragraph">
                  <p>Trains have always captivated my interest since a kid and have become exciting subjects of my photography today. From there, my interests have expanded to include a wide range of creative topics such as digital media, film, writing, and games. </p>
                </div>
                <div class="left-o-paragraph">
                  <p>My work is currently open for purchase on OpenSea, and available to view on Instagram and Flickr. Enjoy the art!</p>
                </div>
                <div class="symbols">
                  <p><FaInstagram />
                  &nbsp;&nbsp;<FaAnchor />&nbsp;&nbsp;
                  <FaYoutube />&nbsp;&nbsp;
                  <FaFlickr />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
    </div>
  );
}

export default About;
