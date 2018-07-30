import React, { Component } from 'react';
import styled from 'styled-components';
import Scrollspy from 'react-scrollspy'


const NavBarContainer = styled.div`
    height: 15vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    color: white;

`

const LogoContainer = styled.div`
`

const CityContainer = styled.div`
    display: flex;
    width: 50vw;
    align-items: flex-end;
    justify-content: space-evenly;
`

const NavWrap = styled.div`
    display: flex;
    justify-content: space-around;
`

class NavBar extends Component {
    render() {
        return (
            <NavBarContainer>
                <LogoContainer>
                    <div>Logo</div>
                </LogoContainer>

                <CityContainer>
                    <div><li><a href="#section-1">section 1</a></li></div>
                    <div><li><a href="#section-1">section 1</a></li></div>
                    <div><li><a href="#section-1">section 1</a></li></div>
                    <div><li><a href="#section-1">section 1</a></li></div>

                </CityContainer>

            </NavBarContainer>
        );
    }
}

export default NavBar;
