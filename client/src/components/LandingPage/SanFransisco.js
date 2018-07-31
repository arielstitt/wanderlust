import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const SanFransiscoContainer = styled.div`
    width: 100vw;
    height: 75vh;
    background-image: url(https://images.unsplash.com/photo-1531693171789-af74eaefaaa5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2094c919c8887c4a30e60b0b3b0c5b41&auto=format&fit=crop&w=634&q=80);
    display: flex;
    justify-content: center;
    align-items: center;
    `

class SanFransisco extends Component {
    render() {
        return (
            <SanFransiscoContainer id='san-fransisco'>
                <div><h1><Link to='atlanta'>San Fransisco</Link></h1></div>
            </SanFransiscoContainer>
        );
    }
}

export default SanFransisco;