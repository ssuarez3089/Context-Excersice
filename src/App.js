import React, { Component } from 'react';
import Equipos from './Components/Equipos';
import Laliga from './Components/Laliga';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Laliga>
          <Equipos />
        </Laliga>
      </div>
    );
  }
}

export default App;
