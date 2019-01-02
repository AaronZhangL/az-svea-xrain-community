import React, { Component } from 'react';
import AddForm from './AddForm'
import CharacterList from './CharacterList'
//xRain
//import Select from 'react-select';


class App extends Component {
  //xRain
  constructor(props) {
    super(props);
    this.state = {value: 'js-jp'};

    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
          <div>
            <AddForm store={this.props.store} />
            <CharacterList store={this.props.store} />
          </div>
    );
  }
}

export default App
