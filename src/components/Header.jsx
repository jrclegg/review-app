import React from 'react'
import HeaderWrapper from '../components/HeaderWrapper'
import '../index.css'

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

export default Header