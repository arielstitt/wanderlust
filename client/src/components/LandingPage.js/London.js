import React, { Component } from 'react';
import styled from 'styled-components';


const LondonContainer = styled.div`
    width: 100vw;
    height: 25vh;
    background-color: blue;
`

class London extends Component {
    render() {
        return (
            <LondonContainer>
                London
            </LondonContainer>
        );
    }
}

export default London;