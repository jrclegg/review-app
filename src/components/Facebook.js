import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

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
        console.log(this.state.isLoggedIn)
    }
    componentClicked = () => console.log('clicked')


    render() {
        let fbContent;
        if (this.state.isLoggedIn) {
            fbContent = (
                <div style={{
                    width:'400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px'
                }}>
                <img src={this.state.picture} alt={this.state.name} />
                <h2>Welcome {this.state.name}</h2>
                </div>
            );
        } else if (!this.state.isLoggedIn) {
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
