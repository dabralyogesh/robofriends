import React from 'react';
import Cardlist from '../Components/Cardlist';
import Searchbox from '../Components/Searchbox';

class App extends React.Component {
	constructor(){
		super();
		this.state={
		  robots: [],
		  searchfield:''
		}
	}

    componentDidMount(){
    	fetch('https://jsonplaceholder.typicode.com/users')
    	.then(response => response.json())
    	.then(users =>this.setState({robots:users}))
    }
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	  
	}
	  render() {
		   const filteredRobots = this.state.robots.filter(robot => {
		  	return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		  })

		  if(this.state.robots.length === 0)
		  {
		  	return <h1>Loading</h1>
		  }
		  else{
		  return(
		  	<div className="tc">
		  		<h1>RoboFriends</h1>
		  		<Searchbox searchChange={this.onSearchChange}/>
		    	<Cardlist robots= {filteredRobots}/>
		    </div>
		    );
		}
	}
}

export default App;