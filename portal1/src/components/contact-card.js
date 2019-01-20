import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ContactCard({contact, deleteContact}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <p><Icon className='mail outline'/> {contact.hl_type}</p>
          <p><Icon className='mail outline'/> {contact.human_language_request}</p>
        </Card.Header>
        <Card.Description>
          <p><Icon className='mail outline'/> {contact.human_language_summary}</p>
          <p><Icon className='mail outline'/> {contact.ml_type}</p>
          <p><Icon className='mail outline'/> {contact.machine_language_response}</p>
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
