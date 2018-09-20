import React, { Component } from 'react';
import Axios from 'axios';


class SingleCityView extends Component {



    state = {
        city: {}
    }
    
    componentDidMount () {
        this.getSingleCity();
    }

    getSingleCity = async() => {
        const cityId = this.props.match.params.id
        const res = await Axios.get(`/api/cities/${cityId}`)
        this.setState({
            city: res.data.city
        })
    
    }


    render() {
        return (
            <div>
                <h1>This is the single city view</h1>
              <img src={this.state.city.image} alt='dis shit right here'/>
            </div>
        );
    }
}

export default SingleCityView;