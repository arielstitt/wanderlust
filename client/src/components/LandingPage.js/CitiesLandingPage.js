import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
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

const Atlanta = styled.div`
width: 100vw;
height: 75vh;
background-image: url(https://images.unsplash.com/photo-1453301109223-3e2085a1e69d?ixlib=rb-0.3.5…jEyMDd9&s=f3e07d1…&auto=format&fit=crop&w=634&q=80);
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
                        <Atlanta>
                            {city.name}

                        </Atlanta>
                    )
                })}
            
            </div>
        );
    }
}

export default CitiesLandingPage;