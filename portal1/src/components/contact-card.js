import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ContactCard({contact, deleteContact}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon className='user outline'/> {contact.name.first} {contact.name.last}
        </Card.Header>
        <Card.Description>
          <p><Icon className='phone'/> {contact.phone}</p>
          <p><Icon className='mail outline'/> {contact.email}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link to={`/contacts/edit/${contact._id}`} className="ui basic button green">Edit</Link>
          <Button basic color="red" onClick={() => deleteContact(contact._id)} >Delete</Button>
        </div>
      </Card.Content>
    </Card>
  )
}

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired
}
