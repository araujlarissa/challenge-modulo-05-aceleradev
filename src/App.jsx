import React from 'react';

import Topbar from './components/Topbar';
import Filter from './components/Filter';
import Contacts from './components/Contacts';
import Contact from './components/Contact';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Topbar />

        <div className="container">
          <Filter />
        </div>

        <div className="container">
          <Contacts> 
            <Contact />
          </Contacts>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
