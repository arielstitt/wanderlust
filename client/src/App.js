import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components';
import SplashImage from './components/LandingPage.js/SplashImage';
import CitiesLandingPage from './components/LandingPage.js/CitiesLandingPage';
import AtlantaShowPage from './components/CityShowPage/AtlantaShowPage'


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

=

          <Switch>
            <Route exact path="/" component={CitiesLandingPage} />
            <Route exact path="/cities/atlanta" component={AtlantaShowPage} />
            
          </Switch>
      </Router>
    );
  }
}

export default App;
