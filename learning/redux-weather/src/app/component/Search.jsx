import React from 'react';
import { VelocityComponent } from 'velocity-react'

import 'velocity-animate/velocity.ui'

export default class Search extends React.Component {
  render() {
    return (
      <VelocityComponent enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
        <div className="page navbar-fixed">
          <div className="navbar">
            <div className="navbar-inner">
              <form className="searchbar">
                <div className="searchbar-input">
                  <input type="search" placeholder="Search"/><a href="#" className="searchbar-clear"></a>
                  <div className="preloader preloader-white"></div>
                </div>
              </form>
            </div>
          </div>
          <div className="page-content"> 
            <div className="list-block">
              <ul className="search-results"></ul>
            </div>
          </div>
        </div>
      </VelocityComponent>
    )
  }
}
