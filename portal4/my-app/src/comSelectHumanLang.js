import '@material/react-select/dist/select.css';
import React, { Component } from 'react';

import Select from '@material/react-select';

class SelectHumanLangComponent extends React.Component {
  state = {value: 'en-us'};

  render() {
    const options = [{
      label: 'English',
      value: 'en-us',
    }, {
      label: 'Chinese(Simple)',
      value: 'zh-cn',
      disabled: false,
    }, {
      label: 'Japanese',
      value: 'ja-jp',
      disabled: false,
    }, {
      label: 'France',
      value: 'fr',
      disabled: true,
    }];

    return (
      <Select
        label='Choose human language'
        onChange={(evt) => this.setState({value: evt.target.value})}
        options={options}
      />
    );
  }
}

export default SelectHumanLangComponent
