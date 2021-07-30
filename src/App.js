import React, { Component } from 'react'
import MainNavigation from "./Layout/MainNavigation"
import Modal from "./photo"

// Imports for
import BigTen from "./Photos/bigten.jpg"
import NKP765 from "./Photos/NKP765(2021).jpg"
import Embankment from "./Photos/thamsmsall.jpg"



class App extends Component {

  render() {
    
    return (
      <div className="main">

        {/*Header*/}
        <div className="header-main">
          <div className = "left">
            <div className="logo-title"><a href="./"><h2>ChooChooChen Arts</h2></a></div>
          </div>
          <div className="right">
            <div className="menu"><MainNavigation /></div>
          </div>
        </div>

         
        {/*Photo Gallery Main Page*/}
        <div class="gallery-background">
            <div class="row">
              <div class="column">
                <Modal photo={BigTen} title={"Amtrak"} description={"Amtrak in Chicago, IL"}/>
                <Modal photo={Embankment} title={""} description={""}/>
                <Modal photo={Embankment} title={""} description={""}/>
                <Modal photo={Embankment} title={""} description={""}/>
                <Modal photo={""} title={""} description={""}/>
                <Modal photo={""} title={""} description={""}/>
              </div>
              <div class="column">
                <Modal photo={NKP765} title={""} description={""}/>
                <Modal photo={Embankment} title={""} description={""}/>
                <Modal photo={Embankment} title={""} description={""}/>
                <Modal photo={""} title={""} description={""}/>
                <Modal photo={""} title={""} description={""}/>
              </div>
              <div class="column">
                <Modal photo={Embankment} title={""} description={""}/>
                <Modal photo={Embankment} title={""} description={""}/>
                <Modal photo={""} title={""} description={""}/>
                <Modal photo={""} title={""} description={""}/>
                <Modal photo={""} title={""} description={""}/>
              </div>
              <div class="column">
                <Modal photo={Embankment} title={""} description={""}/>
                <Modal photo={Embankment} title={""} description={""}/>
                <Modal photo={""} title={""} description={""}/>
                <Modal photo={""} title={""} description={""}/>
                <Modal photo={""} title={""} description={""}/>
              </div>
            </div>
        </div>
        
      </div>
    );
  }
  
}

export default App;
