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

const LadingPageContainer = styled.div `
  height: 100vh;
  width: 100vw;
  background-color: yellow;
  background-image: url('https://images.unsplash.com/photo-1523065144972-e5f5c9ea6ed9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4f0025299a23f1423e55bd6036a1e03&auto=format&fit=crop&w=1050&q=80');
  background-size: cover;
`

class App extends Component {

  state = {
    cities: []
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
          {/* Navigation */}
          <NavBar/>
          {/* Cities */}

          <Atlanta />
          <SanFransisco/>
          <NewYork/>
          <London/>

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
