import React, { Component } from 'react';
import styled from 'styled-components';


const CityDivider = styled.div`
    width: 100vw;
    height: 25vh;
    background-color: aliceblue;
    box-shadow: 0 16px 40px rgba(0,0,0,0.12);
`

class Divider extends Component {
    render() {
        return (
            <CityDivider>
            </CityDivider>
        );
    }
}

export default Divider;