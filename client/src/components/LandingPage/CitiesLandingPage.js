import React, { Component } from 'react';
import styled from 'styled-components';
import SplashImage from './SplashImage'
import Atlanta from './Atlanta'
import London from './London'
import Sanfransisco from './SanFransisco'
import NewYork from './NewYork'
import Divider from '../StyledComponents/Divider';
import Footer from '../StyledComponents/Footer'




const CityContainer = styled.div`
    width: 100vw;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const LadingPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
`

class CitiesLandingPage extends Component {

    render() {
        return (
            <LadingPageContainer>
            <SplashImage />
            <Divider/>
            <Atlanta/>
            <Divider/>
            <London/>
            <Divider/>
            <Sanfransisco/>
            <Divider/>
            <NewYork/>
            <Footer/>

        </LadingPageContainer>
        );
    }
}

export default CitiesLandingPage;