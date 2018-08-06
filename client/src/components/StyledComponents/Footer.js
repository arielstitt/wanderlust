import React, { Component } from 'react';
import styled from 'styled-components';


const FooterWrapper = styled.div`
    width: 100vw;
    height: 10vh;
    background-color: black;
    color: white;
`


class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                Ariel Stitt 2018
            </FooterWrapper>
        );
    }
}

export default Footer;