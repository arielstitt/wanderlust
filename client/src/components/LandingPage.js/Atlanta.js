import React, { Component } from 'react';
import styled from 'styled-components';

const AtlantaContainer = styled.div`
    width: 100vw;
    height: 25vh;
    background-color: red;
`
const AtlantaBlip = styled.div`
    width: 100vw;
    height: 25vh;
`

class Atlanta extends Component {
    render() {
        return (
            <AtlantaContainer>
                Atlanta

            </AtlantaContainer>

        );
    }
}

export default Atlanta;