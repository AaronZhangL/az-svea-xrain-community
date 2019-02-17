import '@material/react-select/dist/select.css';
import React from 'react';
import Select from '@material/react-select';

const HumanLanguageSelectComponent = () => {
  return (
    <Select
      label='Choose Human Language'
      onChange={(evt) => this.setState({value: evt.target.value})} >
      <option value='zh-cn'>Chinese(Simple)</option>
      <option value='ja-jp'>Japanese</option>
    </Select>
  );
}

export default HumanLanguageSelectComponent
