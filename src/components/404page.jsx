import React, { Fragment } from 'react';
import Header from './Landingheader';

const NotFound = (props) => {
  const { text } = props;
  return (
    <Fragment>
      <Header
        page="landingpage"
        navClass="nav_header"
      />
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h3>
            Oops!
              {
              text || ' Page '
            }
              not found

            </h3>
            <h1>
              <span>4</span>
              <span>0</span>
              <span>4</span>
            </h1>
          </div>
          <h2>
          we are sorry, page you requested was not found
          </h2>
          <a href="/" className="homeLink">home</a>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
