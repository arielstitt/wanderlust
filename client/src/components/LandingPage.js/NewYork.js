import React, { Component } from 'react';
import styled from 'styled-components';


const NewYorkContainer = styled.div`
    width: 100vw;
    height: 25vh;
    background-color: green;
`

class Seatle extends Component {
    render() {
        return (
            <NewYorkContainer>
                New York
            </NewYorkContainer>
        );
    }
}

export default Seatle;