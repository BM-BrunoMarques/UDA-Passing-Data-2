import React, {Component} from 'react'
import MovLiked from './MovLiked.js';

class MoviesIDS extends Component {
  render(){
   const MoviesIDS = Object.keys(this.props.movies);
    console.log(this.props.movies)
     return(
      <ol className='user-list'>
       {MoviesIDS.map((movieID) =>{     
       <MovLiked />
    	}
		)};
       </ol>
  )
  }}



export default MoviesIDS;