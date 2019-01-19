import React, { Component } from 'react';
import AddForm from './AddForm'
import CharacterList from './CharacterList'
//xRain
//import Select from 'react-select';


class App extends Component {
  //xRain strat

  //XRain end

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
