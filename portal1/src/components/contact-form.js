import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

const validate = (values) => {
  const errors = {name:{}};
  if(!values.name || !values.name.first) {
    errors.name.first = {
      message: 'You need to provide First Name'
    }
  }
  if(!values.phone) {
    errors.phone = {
      message: 'You need to provide a Phone number'
    }
  } else if(!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(values.phone)) {
    errors.phone = {
      message: 'Phone number must be in International format'
    }
  }
  if(!values.email) {
    errors.email = {
      message: 'You need to provide an Email address'
    }
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = {
      message: 'Invalid email address'
    }
  }
  //xRain

  if(values.hl_type == 'hl-none') {
    errors.hl_type = {
      message: 'You need to choose a human language type'
    }
  }

  if(!values.human_language_request) {
    errors.human_language_request = {
      message: 'You need to input your request by human language'
    }
  }
  if(values.ml_type == 'ml-none') {
    errors.ml_type = {
      message: 'You need to choose a machine language type'
    }
  }

  return errors;
}

class ContactForm extends Component {

  componentWillReceiveProps = (nextProps) => { // Load Contact Asynchronously
    const { contact } = nextProps;
    if(contact._id !== this.props.contact._id) { // Initialize form only once
      this.props.initialize(contact)
    }
  }

  renderField = ({ input, label, textarea, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <textarea {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )

  renderSelectFieldHL = ({ input, label, type, meta: { touched, error }, children }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <select {...input} type='select' placeholder={label} >
      <option value="hl-none">Please select a language</option>
      <option value="en-us">English</option>
      <option value="ja-jp">日本語</option>
      <option value="zh-hans">简体中文</option>
      <option value="zh-hant" disabled>繁體中文</option>
      <option value="zh-cn" disabled>大陆简体</option>
      <option value="zh-tw" disabled>台灣正體</option>
      <option value="zh-hk" disabled>港澳繁體</option>
      <option value="zh-sg" disabled>马新简体</option>
      <option value="ko-kr" disabled>한국어</option>
      </select>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )

  renderSelectFieldML = ({ input, label, type, meta: { touched, error }, children }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <select {...input} type='select' placeholder={label} >
      <option value="ml-none" defaultValue>Please select a language</option>
      <option value="java">Java</option>
      <option value="php">Php</option>
      <option value="ruby">Ruby</option>
      <option value="python">Python</option>
      <option value="nodejs" disabled>NodeJS</option>
      <option value="c-sharp" disabled>C#</option>
      <option value="c-language" disabled>C</option>
      <option value="c-plus-plus" disabled>C++</option>
      <option value="virtual-basic" disabled>Virtual Basic</option>
      <option value="delphi" disabled>delphi</option>
      <option value="lisp" disabled>LISP</option>
      <option value="shell" disabled>SHELL</option>
      <option value="bash" disabled>BASH</option>
      <option value="ms-power-shell" disabled>MS Power Shell</option>
      <option value="oracle-db" disabled>Oracle Database</option>
      <option value="ms-sql-server" disabled>MS SQL Server</option>
      <option value="mysql" disabled>MySQL</option>
      </select>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )

  render() {
    const { handleSubmit, pristine, submitting, loading, contact } = this.props;
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>{contact._id ? 'Edit Contact' : 'Add New Contact'}</h1>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Form.Group widths='equal'>
              <Field name="name.first" type="text" component={this.renderField} label="First Name"/>
              <Field name="name.last" type="text" component={this.renderField} label="Last Name"/>
            </Form.Group>
            <Field name="phone" type="text" component={this.renderField} label="Phone"/>
            <Field name="email" type="text" component={this.renderField} label="Email"/>
            <Field name="hl_type" type="select" component={this.renderSelectFieldHL} label="Human language type"/>
            <Field name="human_language_request" type="text" component={this.renderField} label="Human Lanugage"/>
            <Field name="human_language_summary" type="text" component={this.renderField} label="Summary By xRain"/>
            <Field name="ml_type" type="select" component={this.renderSelectFieldML} label="Machine language type"/>
            <Field name="machine_language_response" type="text" component={this.renderField} label="Machine Lanugage"/>
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'contact', validate})(ContactForm);
