import React from 'react';
import { Link } from 'react-router';

export default class Index extends React.Component {
  render() {
    return (
      <div className="views">
        <div className="view view-main navbar-fixed">
          <div className="pages">
            <div data-page="index" className="page">
              <a href="/search" className="open-popup link floating-button color-blue"><i className="icon icon-plus"></i></a>
              <div className="navbar theme-purple">
                <div className="navbar-inner">
                  <div className="center">Weather7</div>
                </div>
              </div>
              <div className="fake-navbar bg-purple"></div>
              <div className="page-content">
                <div className="list-block places-list">
                  <ul></ul>
                  <div className="list-block-label"><img src="img/yahoo-logo.png" height="20" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}
