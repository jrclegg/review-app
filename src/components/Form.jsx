import React, { Component } from 'react'
import styled from 'styled-components';
import Button from '../components/Button/Button'

const Input = styled.input`
  padding: 1em;
  margin-top: 1.5em;
  width: 80%;
  background: #D3D3D3;
`;

export default class LoginForm extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <form>
                <Input type="text" placeholder="Full Name"/>
                <Input type="email" placeholder="Email"/>
                <Button>Register</Button>
            </form>
        )
    }
} 