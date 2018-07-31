import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


const NewYorkContainer = styled.div`
    width: 100vw;
    height: 75vh;
    background-image: url(https://images.unsplash.com/photo-1519121785383-3229633bb75b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c454615ee9dd1e126ead3cbf59349e86&auto=format&fit=crop&w=700&q=80);
    display: flex;
    justify-content: center;
    align-items: center;
`

class Seatle extends Component {
    render() {
        return (
            <NewYorkContainer id='new-york'>
                <div><h1><Link to='newYork'>New York</Link></h1></div>
            </NewYorkContainer>
        );
    }
}

export default Seatle;