import React, { Component } from 'react';
import Prueba from './Prueba';


const Caca = props => (<div onClick = {props.onClick}>{props.name}</div>);

class App extends Component {

    constructor(props){

      super(props)
  
     

    }

    render() {
    
      return (
        <div className="App">
          <header className="App-header">
          <Caca name='pija' onClick={this.elClick2 } />
          <Prueba puto={this.state.puto} />
          </header>
        </div>
      );
    } 
}






export default App;
