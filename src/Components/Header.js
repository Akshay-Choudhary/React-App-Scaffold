import React from 'react';
import '../Styles/Header.css';

import { withRouter } from 'react-router-dom';
import { Navbar } from 'react-bootstrap/lib';

class Header extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Brand>
          <span>
            Logo Goes here.
          </span>
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default withRouter(Header);
