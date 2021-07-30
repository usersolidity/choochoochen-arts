import React from 'react';
import Popup from 'reactjs-popup';
import { FaInstagram } from 'react-icons/fa';
import { FaAnchor } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaFlickr } from 'react-icons/fa';


const Modal = (props) => (
  <Popup
    trigger={<div class="container-for-image">
    <img class = "gallery-image" src={props.photo} alt=""></img>
    <div class="overlay">
      <div class="image-text">{props.title}</div>
    </div>
    </div>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <div className="photo-group">
          <img src={props.photo} className="fullsize-photo" alt="error."/>
        <div className="header-photo-popup"><h5>{props.title}</h5></div>
        <div className="content">
          <p>{props.description}</p>
        </div>
        
        <div className="actions">
          <a href=""><FaInstagram /></a>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            Close
          </button>
        </div>

        </div>
      </div>
    )}
  </Popup>
);

export default Modal;