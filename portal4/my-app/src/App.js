import './App.css';
import '@material/react-button/dist/button.min.css';
import '@material/react-text-field/dist/text-field.css';
import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';
import React, { Component } from 'react';
import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Button from '@material/react-button';

import logo from './logo.svg';

import TopBarComponent from './comTopBar.js'
import SelectHumanLangComponent from './comSelectHumanLang.js'

class App extends React.Component {
  state = {value: 'Woof'};

  render() {
    return (
    <div>
      <TopBarComponent />
      <SelectHumanLangComponent />
      </div>
    );
  }
}

export default App;
