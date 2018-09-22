import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const AtlantaContainer = styled.div`
    width: 100vw;
    height: 55vh;
    background-image: url(https://images.unsplash.com/photo-1453301109223-3e2085a1e69d?ixlib=rb-0.3.5…jEyMDd9&s=f3e07d1…&auto=format&fit=crop&w=634&q=80);
    display: flex;
    justify-content: center;
    align-items: center;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
const AtlantaBlip = styled.div`
    width: 100vw;
    height: 50vh;
`

class Atlanta extends Component {
    render() {
        return (
            <AtlantaContainer id='atlanta'>
                <div><h1>
                    <Link to="/cities/29"><h1>Atlanta</h1></Link>
                </h1></div>
            </AtlantaContainer>

        );
    }
}

export default Atlanta;