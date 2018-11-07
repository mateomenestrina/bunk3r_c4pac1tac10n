import React, { Component } from 'react';


const Post = (props) => {

    return <div className='post'>
            
            <img src={props.picture} alt=""/>
            <div className='title'>{props.title}</div>
            <div className='desc'>{props.desc}</div>

    </div>

}

export default class PostContainer extends Component {
    

    constructor(props){
        super(props)
        this.state = {'open': false}
    }
   
    render() {
        return (
        <div>
            <h2 onClick={() => this.setState({'open': !this.state.open}) }>Publicaciones</h2>

            {this.state.open ? 

            (<div className='posts-container'>

                {
                    this.props.posts.map( post => <Post {...post} />)
                }

            </div>) : '' }

            </div>
        );
    }
}