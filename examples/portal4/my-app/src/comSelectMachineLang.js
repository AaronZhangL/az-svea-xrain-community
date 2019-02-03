import '@material/react-select/dist/select.css';
import React, { Component } from 'react';

import React from 'react';
import Select from '@material/react-select';

class SelectHumanLangComponent extends React.Component {
  state = {value: 'pomsky'};

  render() {
    return (
      <Select
        label='Choose Human Language'
        onChange={(evt) => this.setState({value: evt.target.value})}
      >
        <option value='en'>English</option>
        <option value='zh-cn'>Chinese(Simple)</option>
        <option value='Ja-jp'>Japanese</option>
      </Select>
    );
  }
}

export default SelectHumanLangComponent
