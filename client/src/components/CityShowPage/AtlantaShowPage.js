import React, { Component } from 'react';
import Axios from 'axios';

class AtlantaShowPage extends Component {

    state = {
        atlanta: [{}],
        posts: []
      }

    componentWillMount(){
        this.getSingleCity()
    }

    getSingleCity = async () => {
        const res = await Axios.get(`/api/ciites/`)
        this.setState({
            city: res.data
        
        })
    }

    render() {
        return (
            <div>
                This is atlanta
            </div>
        );
    }
}

export default AtlantaShowPage;