import React, {Component} from 'react';

import Header from '../components/Header';
import Facebook from '../components/Facebook';
import LoginForm from '../components/Form';
import FormWrapper from '../components/FormWrapper'

class Home extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
		<div>
			<Header/>
			<FormWrapper>
				<Facebook/>
				<LoginForm/>
			</FormWrapper>
		</div>
		)
	}

}

export default Home