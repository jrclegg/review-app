import React, { Component } from 'react'
import styled from 'styled-components';
import Button from './Button/Button'
import { Redirect } from 'react-router';

const Input = styled.input`
  padding: 1em;
  margin-top: 1.5em;
  width: 80%;
  background: #D3D3D3;
`;

const initialState = {
  name: '',
  email: '',
  emailValid: false,
  nameValid: false,
  formValid: false,
  formErrors: { email: '', name: ''}
}

export default class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = initialState;
    }

    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let nameValid = this.state.nameValid;

      switch (fieldName) {
        case 'email':
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? '' : ' is invalid';
          break;
        case 'name':
          nameValid = value.length >= 6;
          fieldValidationErrors.name = nameValid ? '' : ' is too short';
          break;
        default:
          break;
      }
      this.setState({
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        nameValid: nameValid
      }, this.validateForm);
    }

    validateForm() {
      this.setState({ formValid: this.state.emailValid && this.state.nameValid });
    }

    handleUserInput = (e) =>  {
      const name = e.target.name;
      const value = e.target.value;
      this.validateField(name, value)
    }

    render(){
      const { name, email} = this.state
      console.log(this.state.formValid);
        return(
            <form>
                <Input 
                  name="name" 
                  placeholder="Enter your name"
                  type="text"
                  required
                  autoComplete="on"
                  onChange={this.handleUserInput}
                  defaultValue={name}
                />
                <Input 
                  name="email" 
                  placeholder="jonsmith@example.com"
                  type="email"
                  required
                  autoComplete="on"
                  onChange={this.handleUserInput}
                  defaultValue={email}
                />
                {this.state.formErrors.email !== '' ?
                <h2>{this.state.formErrors.email}</h2>
                : ''
                }
                <Button
                  type="submit"
                  disabled={!this.state.formValid}
                  onClick={this.submit}>Login
                </Button>
            </form>
        )
    }
} 