import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components';
import SplashImage from './components/LandingPage.js/SplashImage';
import Scrollspy from 'react-scrollspy'
import SingleCity from './components/LandingPage.js/SingleCity';
import CitiesLandingPage from './components/LandingPage.js/CitiesLandingPage';


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
            
            <CitiesLandingPage
              {...this.props}
              cities = {this.state.cities}
            />
          {/* Cities: refactor and create A SINGLE wrapper for the cities */}
          

          <Switch>
            {/* <Route exact path="/cities/:id" component={SingleCity} /> */}

          </Switch>
        </LadingPageContainer>
      </Router>
    );
  }
}

export default App;
