import React, { Component } from 'react';
import styled from 'styled-components';

const AtlantaContainer = styled.div`
    width: 100vw;
    height: 75vh;
    background-image: url('https://images.unsplash.com/photo-1453301109223-3e2085a1e69d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f3e07d16e1e5020f05c4ea28b32cddcf&auto=format&fit=crop&w=634&q=80')
`
const AtlantaBlip = styled.div`
    width: 100vw;
    height: 50vh;
`

class Atlanta extends Component {
    render() {
        return (
            <AtlantaContainer id='atlanta'>
                Atlanta
            </AtlantaContainer>

        );
    }
}

export default Atlanta;