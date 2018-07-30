import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from '../LandingPage.js/NavBar'
import Scrollspy from 'react-scrollspy'




const LadingPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: yellow;
  background-image: url('https://images.unsplash.com/photo-1523065144972-e5f5c9ea6ed9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4f0025299a23f1423e55bd6036a1e03&auto=format&fit=crop&w=1050&q=80');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const LandingPageBlip = styled.div`
display: flex;
align-items: center;
height: 50vh;
width: 80vw;
justify-content: center;
color: white;
flex-direction: column;
`
const FlexWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    height: 100vh;
`

class SplashImage extends Component {
    render() {
        return (
            <LadingPageContainer>
                
                    <NavBar />

                <FlexWrapper>
                    <LandingPageBlip>
                        <div>
                            <h1>WaanderLust</h1>
                        </div>
                        <div>
                            <h3>Let curiosity wander unleashed</h3>
                        </div>

                    </LandingPageBlip>
                </FlexWrapper>
            </LadingPageContainer>
        );
    }
}

export default SplashImage;