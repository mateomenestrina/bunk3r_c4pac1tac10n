import React, { Component } from 'react';
import Network from './Network';

class Dashboard extends Component {


    constructor(props){  
      super(props)
      this.state = { networks: [] };
    }
    
    componentDidMount(){   

      // setInterval(() => {
        
        //fetch('https://local.bunkerdb.com/bunker-api/capacitacion')
        fetch('apiResponse.json')
        .then(response => response.json())
        .then(json => this.setState({networks: json.data.networks})   )

      //}, 500);
        
    }

    render() {
  
      return (
        
        <div id="netowrks-list">
            { this.state.networks.map( (una_network, index) => <Network data={una_network}  /> ) }
        </div>

      );
    } 
}






export default Dashboard;
