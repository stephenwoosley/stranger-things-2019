import React from 'react';
import { Header, HeaderName } from "carbon-components-react";
import logo from "./images/stanger-things_raw.png";
import './App.css';

function App() {
  return (
    <div>
     <Header aria-label="Stranger-Things-Logo">
        <HeaderName href="#" prefix="">
          <img src={logo} alt="stranger-things-logo" className="logo"/>
        </HeaderName>
      </Header>
    </div>
  );
}

export default App;
