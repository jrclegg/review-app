import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { Redirect } from 'react-router-dom'

export default class Facebook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            userID: '',
            name: '',
            email: '',
            picture: ''
           
        };
      }


    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
        console.log(response)
    }
    componentClicked = () => console.log()

    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
            fbContent = (
                <Redirect to="/home">
                    <FacebookLogin
                    appId="1689199874542550"
                    autoLoad={false}
                    version="3.1"
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
                </Redirect>
            );
        } else {
            fbContent = (<FacebookLogin
                appId="1689199874542550"
                autoLoad={false}
                version="3.1"
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />)
        }
        return (
            <div>{fbContent}</div>
        )
    }
}
