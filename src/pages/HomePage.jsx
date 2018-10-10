import React from 'react';
import styled from 'styled-components'
import Header from '../components/Header'
import Button from '../components/Button/Button'

const LeftDiv = styled.div`
 float: left;
`
const RightDiv = styled.div`
 margin-right: 30px;
 float: right;
`
const FacebookStyle = {
 backgroundColor: '#3897f0',
};

const TwitterStyle = {
 backgroundColor: '#1DA1F2',
};

const LinkedInStyle = {
 backgroundColor: '#0077B5',
};

const Home = () => (
        <div>
         <Header>
         </Header>
         <LeftDiv>
         </LeftDiv>
        <RightDiv>
        <Button type="button" style={FacebookStyle}>Login with Facebook</Button>
        <Button type="button" style={TwitterStyle}>Login with Twitter</Button>
        <Button type="button" style={LinkedInStyle}>Login with LinkedIn</Button>
        {/* <Button type="button">Login</Button>
        <Button type="button">Register</Button> */}
        </RightDiv>
        </div>
)


export default Home