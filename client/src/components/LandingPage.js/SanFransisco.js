import React, { Component } from 'react';
import styled from 'styled-components';


const SanFransiscoContainer = styled.div`
    width: 100vw;
    height: 75vh;
    background-color: yellow;
`

class SanFransisco extends Component {
    render() {
        return (
            <SanFransiscoContainer id='san-fransisco'>
                San Fransisco
            </SanFransiscoContainer>
        );
    }
}

export default SanFransisco;