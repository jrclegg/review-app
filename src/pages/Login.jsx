import React from 'react';
import styled from 'styled-components'
import Header from '../components/Header'
import Button from '../components/Button/Button'
import Facebook from '../components/Facebook';

const LeftDiv = styled.div`
 float: left;
`
const RightDiv = styled.div`
 margin-right: 30px;
 float: right;
`
const FacebookStyle = {
 backgroundColor: '#4267B2',
};

const TwitterStyle = {
 backgroundColor: '#1DA1F2',
};

const LinkedInStyle = {
 backgroundColor: '#0077B5',
};

const Login = () => (
        <div>
         <Header>
         </Header>
         <LeftDiv>
         </LeftDiv>
        <RightDiv>
         <Button type="button" style={FacebookStyle}>Continue with Facebook</Button>
         <Facebook/>
         <Button type="button" style={TwitterStyle}>Login with Twitter</Button>
         <Button type="button" style={LinkedInStyle}>Login with LinkedIn</Button>
        </RightDiv>
        </div>
)

export default Login