import React, { Component } from 'react';
import styled from 'styled-components';


const SanFransiscoContainer = styled.div`
    width: 100vw;
    height: 50vh;
    background-color: yellow;
`

class SanFransisco extends Component {
    render() {
        return (
            <SanFransiscoContainer>
                San Fransisco
            </SanFransiscoContainer>
        );
    }
}

export default SanFransisco;