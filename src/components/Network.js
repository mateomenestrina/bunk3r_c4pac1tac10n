import React, { Component } from 'react';
import {Metrica} from './Utils';
import PostContainer from './PostContainer';

class Network extends Component {

  
    constructor(posts){

      super(posts)

      this.state = {
        open : false
      }

    }

    render() {
    
      return ( 

        <div className={this.props.data.name}>
        
          <div className='header'>
              <h1>{this.props.data.name}</h1>
          </div>

          <div className='content'>

              <div className='stats'>
                  { this.props.data.stats.map( (metric, index) => <Metrica name={metric.metric}  value ={metric.value}  key={index}   /> ) } 
              </div>


            <PostContainer posts={this.props.data.posts} />
        

        
          </div>
        </div>
     
      )
    } 
}

export default Network;
