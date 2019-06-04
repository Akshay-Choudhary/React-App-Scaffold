import React from 'react';

import Header from '../Components/Header';
import '../Styles/LandingPage.css';
import LandingPageContent from '../Components/LandingPageContent';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <LandingPageContent />
        </div>
      </div>
    );
  }
}
