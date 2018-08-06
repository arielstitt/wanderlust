import React, { Component } from 'react';
import Axios from 'axios';


class SingleCityView extends Component {



    state = {
        city: {},
        posts: []
    }
    
    componentDidMount () {
        this.getSingleCity();
    }

    getSingleCity = async() => {
        const cityId = this.props.match.params.id
        const res = await Axios.get(`/api/issues/${cityId}`)
        this.setState({
            city: res.data
        })
    
    }

    // getSingleIssue = async () => {
    //     const issueId = this.props.match.params.id
    //     const res = await axios.get(`/api/issues/${issueId}`)
    //     this.setState({
    //         issue: res.data
    //     })
    //     // console.log("hello?")
    //     console.log(this.state);
    // }


    render() {
        return (
            <div>
                <h1>This is the single city view</h1>
            </div>
        );
    }
}

export default SingleCityView;