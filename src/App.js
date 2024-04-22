import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './styles'
import Routing from "./core/Routing";
import UriProvider from "./contexts/UriProvider";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UriProvider>
          <Routing/>
        </UriProvider>
      </BrowserRouter>
    )
  }
}

export default App
