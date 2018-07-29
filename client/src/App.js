import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios'


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
        cityname: response.data.cityname
      });
    } catch (err) {
      console.log(err);
      this.setState({ err: err.message });
    }
  };
  render() {
    return (
      <Router>
        <div>
          <Switch>

            <Route></Route>
            <Route></Route>
            <Route></Route>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
