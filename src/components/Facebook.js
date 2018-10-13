import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import styled from 'styled-components';

const myDiv = styled.div`
    width: "400px";
    margin: "auto";
    background: '#f4f4f4';
    padding: '20px';
`

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''

    }

    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }
    componentClicked = () => console.log()

    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
            fbContent = (
                <myDiv>
                <img src={this.state.picture} alt={this.state.name}/>
                    <h2>Welcome {this.state.name}</h2>
                    Email: {this.state.email}
                </myDiv>
            );
        } else {
            fbContent = (<FacebookLogin
                appId="1689199874542550"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />)

        }
        return (
            <div>{fbContent}</div>
        )
    }
}
