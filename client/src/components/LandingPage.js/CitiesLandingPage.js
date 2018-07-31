import React, { Component } from 'react';
import styled from 'styled-components';
import SplashImage from './SplashImage'




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

          {/* splash image */}
            <SplashImage />

            <CitiesLandingPage
              
            />
          {/* Cities: refactor and create A SINGLE wrapper for the cities */}

        </LadingPageContainer>
        );
    }
}

export default CitiesLandingPage;