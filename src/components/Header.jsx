import React from 'react'
import styled from 'styled-components'
import LoginModal from '../components/Modals/LoginModal'
import HeaderWrapper from '../components/HeaderWrapper'
import NavWrapper from '../components/NavWrapper'
import Wrapper from '../layouts/Wrapper'
import '../index.css'

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
        <HeaderWrapper >
        </HeaderWrapper>
    )
  }
}
{/* <Button type="button" onClick={this.showModal}>Login</Button>
<Button type="button" onClick={this.showModal}>Register</Button> */}
// { this.state.show ? 
//   <LoginModal handleClose={this.hideModal}>
//   </LoginModal>
//   : null }

export default Header