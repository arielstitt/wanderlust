import React, { Component } from 'react';
import styled from 'styled-components';


const NewYorkContainer = styled.div`
    width: 100vw;
    height: 75vh;
    background-color: green;
`

class Seatle extends Component {
    render() {
        return (
            <NewYorkContainer id='new-york'>
                New York
            </NewYorkContainer>
        );
    }
}

export default Seatle;