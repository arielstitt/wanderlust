import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import NavBar from './components/LandingPage.js/NavBar';
import styled from 'styled-components';
import London from './components/LandingPage.js/London';
import Atlanta from './components/LandingPage.js/Atlanta'
import SanFransisco from './components/LandingPage.js/SanFransisco';
import NewYork from './components/LandingPage.js/NewYork';
import SplashImage from './components/LandingPage.js/SplashImage';
import Scrollspy from 'react-scrollspy'

const LadingPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
`

class App extends Component {

  state = {
    cities: [],
  }

  componentDidMount() {
    this.getAllCities()
  }

  getAllCities = async () => {
    try {
      const response = await axios.get("/api/cities");
      console.log(response.data);
      this.setState({
        cities: response.data.cities,
      });
    } catch (err) {
      console.log(err);
      this.setState({ err: err.message });
    }
  };
  render() {
    return (
      <Router>
        <LadingPageContainer>



          {/* splash image */}
            <SplashImage />

          {/* Cities */}
          <Atlanta/>
          <SanFransisco />
          <NewYork />
          <London />

          <Switch>
            <Route></Route>
            <Route></Route>
            <Route></Route>

          </Switch>
        </LadingPageContainer>
      </Router>
    );
  }
}

export default App;
