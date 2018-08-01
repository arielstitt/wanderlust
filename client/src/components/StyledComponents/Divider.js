import React, { Component } from 'react';
import styled from 'styled-components';


const CityDivider = styled.div`
    width: 100vw;
    height: 25vh;
    background-color: aliceblue;
`

class Divider extends Component {
    render() {
        return (
            <CityDivider>
                <h1>Divider</h1>
            </CityDivider>
        );
    }
}

export default Divider;