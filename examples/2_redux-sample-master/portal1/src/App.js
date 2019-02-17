import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ContactListPage from './pages/contact-list-page';
import ContactFormPage from './pages/contact-form-page';

import TopBarComponent from './components/TopBar.js'

class App extends Component {
  render() {
    return (
      <Container>
      <TopBarComponent />
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/contacts/new">Request</NavLink>
          <NavLink className="item" activeClassName="active" exact to="/">Request List</NavLink>
        </div>
        <Route exact path="/" component={ContactListPage}/>
        <Route path="/contacts/new" component={ContactFormPage}/>
        <Route path="/contacts/edit/:_id" component={ContactFormPage}/>
      </Container>
    );
  }
}

export default App;