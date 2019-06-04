import React from 'react';
import DocumentTitle from 'react-document-title';
import { HashRouter } from 'react-router-dom';

import App from './Components/App';

export default class HomepageApp extends React.Component {
  render() {
    return (
      <DocumentTitle title="StarterApp">
        <HashRouter>
          <App />
        </HashRouter>
      </DocumentTitle>
    );
  }
}
