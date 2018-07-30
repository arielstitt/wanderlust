import React, { Component } from 'react';
import styled from 'styled-components';


const LondonContainer = styled.div`
    width: 100vw;
    height: 75vh;
    background-color: blue;
`

class London extends Component {
    render() {
        return (
            <LondonContainer id='london'>
                London
            </LondonContainer>
        );
    }
}

export default London;