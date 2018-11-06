import React, { Component } from 'react';
import Dashboard from './Dashboard.js';


class App extends Component {

    constructor(props){

      super(props)
     
    }

    render() {
    
      return (
        <div className="App">

           <div className="header"><img src="https://bunkerdb.com/theme/landing/img/logo_new.svg"/></div>
          
           <Dashboard />

        </div> 
      );
    } 
}



export default App;
