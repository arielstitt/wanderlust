import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Atlanta from './Atlanta';
import SanFransisco from './SanFransisco';
import London from './London'
import NewYork from './NewYork'

const CityContainer = styled.div`
    width: 100vw;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

class CitiesLandingPage extends Component {
    render() {
        return (
            <div>
                {/* refactor these compoenents into a single style  */}
                {this.props.cities.map(city =>{
                    return (
                    <div></div>
                    )
                })}
                <Atlanta/>
                <SanFransisco/>
                <London/>
                <NewYork/>
                
            </div>
        );
    }
}

export default CitiesLandingPage;