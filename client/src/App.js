import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components';
import CitiesLandingPage from './components/LandingPage/CitiesLandingPage';
import SingleCityView from './components/SingleCityView'


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

    const CityList = (props) => (
      <CitiesLandingPage cities={this.state.cities} {...props}/>
    )
    
    const CityShowPage = (props) => (
      <SingleCityView {...props}/>
    )
    
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={CityList} />
          <Route exact path="/cities/:id" render={CityShowPage}/>

        </Switch>
      </Router>
    );
  }
}

export default App;