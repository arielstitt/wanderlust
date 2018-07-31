import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'



const LondonContainer = styled.div`
    width: 100vw;
    height: 75vh;
    background-image: url(https://images.unsplash.com/photo-1505848551149-03e10fbcf1ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc3e8a432e1d90a9afbff6b5e12cc5c1&auto=format&fit=crop&w=1601&q=80);
    display: flex;
    justify-content: center;
    align-items: center;
`

class London extends Component {
    render() {
        return (
            <LondonContainer id='london'>
                <div><h1><Link to='atlanta'>London</Link></h1></div> 
            </LondonContainer>
        );
    }
}

export default London;