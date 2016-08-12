import React from 'react';
import framework7 from 'framework7';
import { Link } from 'react-router';
import Search from './Search';

export default class Index extends React.Component {
  componentDidMount(){
    var myApp = new Framework7({
      modalTitle: 'Weather7',
      material: true,
      materialPageLoadDelay: 200
    });
// Export selectors engine 
    var $$ = Dom7;
  }

  searchLocation(e){
    var $$ = Dom7;
    var search = e.target.value;
    var query = encodeURIComponent('select * from geo.places where text="' + search + '"');
    var q = 'http://query.yahooapis.com/v1/public/yql?q=' + query + '&format=json';
    $$('.popup .preloader').show();
    $$.get(q, function (results) {
      var html = '';
      results = JSON.parse(results);
      $$('.popup .preloader').hide();
      if (results.query.count > 0) {
        var places = results.query.results.place;
        console.log(places);
      }
      $$('.popup .search-results').html(html);
    });
  }

  render() {
    return (
      <div className="wrap">
        <div className="views">
          <div className="view view-main navbar-fixed">
            <div className="pages">
              <div data-page="index" className="page">
                <a href="#" className="open-popup link floating-button color-blue"><i className="icon icon-plus"></i></a>
                <div className="navbar theme-purple">
                  <div className="navbar-inner">
                    <div className="center">Weather7</div>
                  </div>
                </div>
                <div className="fake-navbar bg-purple"></div>
                <div className="page-content">
                  <div className="list-block places-list">
                    <ul></ul>
                    <div className="list-block-label"><img src="img/yahoo-logo.png" height="20"/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="popup">
          <div className="view">
            <div className="pages">
              <div className="page navbar-fixed">
                <div className="navbar">
                  <div className="navbar-inner">
                    <form className="searchbar">
                      <div className="searchbar-input">
                        <input type="search" placeholder="Search" onChange={this.searchLocation}/><a href="#" className="searchbar-clear"></a>
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
            </div>
          </div>
        </div>
      </div>
    )
  }
}
