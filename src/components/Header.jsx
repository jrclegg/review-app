import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button/Button'
import LoginModal from '../components/Modals/LoginModal'
import HeaderWrapper from '../components/HeaderWrapper'
import NavWrapper from '../components/NavWrapper'

const Title = styled.h2`
  font-size: 2em;
  text-align: center;
`

class Header extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      show: false
    }
  }

  showModal = () => {
    this.setState({
      show: true
    })
  }

  hideModal = () => {
    this.setState({ show: false });
  };
  
  render(){
    return (
      <div>
        <HeaderWrapper >
          <Title>Welcome to Travel Reviews</Title>
        <NavWrapper>
        { this.state.show ? 
          <LoginModal handleClose={this.hideModal}>
          </LoginModal>
          : null }
          <Button type="button" onClick={this.showModal}>Login</Button>
          <Button type="button" onClick={this.showModal}>Register</Button>
        </NavWrapper>
        </HeaderWrapper>
      </div>
    )
  }
}

export default Header