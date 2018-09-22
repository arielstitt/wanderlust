import React, { Component } from 'react';
import styled from 'styled-components';


const CityDivider = styled.div`
    width: 100vw;
    height: 25vh;
    background-color: #b9d2de;
    box-shadow: inset -6px -1px 10px #888888;
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