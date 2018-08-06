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
            // {props.cities.map(city => (
            //     <div key={city.id}>
            //         <CityPhoto>
            //             <a href={`/cities/${city.id}`}><img src={city.image} alt={city.name + "City Photo"} /> </a>
            //             <ATag>
            //                 <a href={`/cities/${city.id}`}> {city.name} </a>
            //             </ATag>
            //         </CityPhoto>
        
            <LadingPageContainer>
                {this.props.cities.map(city => {
                    <div key={city}>
                        {city.name}
                    </div>
                })}
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