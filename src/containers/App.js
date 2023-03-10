import React, { Component } from 'react';
import CardList from '../components/CardList';
import { robots } from '../components/robots';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { requestRobots } from '../actions'
import './App.css';

import { setSearchField } from '../actions';


const mapStateToProps = state => {
	return { 
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error,
	}
}
const mapDispatchToProps = (dispatch) => {
	return{
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())	 
	}
}


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: []
		}
	}

	componentDidMount() {
		this.setState({ robots: robots })
		// this.props.onRequestRobots();
	}

	// componentDidMount() {
	// 	fetch(jsonplaceholder.typicode.com/users)
	// 	.then(response =>  response.json())
	// 	.then(users =>  this.setState({ robots: users})
	// 	);
	// } 


	

	render() {
		const { robots } = this.state;
		const { searchField, onSearchChange,  isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		});
		
		if (isPending) {
			return (
				<h1> Loading...</h1>
			)
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'> RoboFriends </h1>
					<SearchBox searchChange={onSearchChange} />
					<Scroll>
						<ErrorBoundary>
							<CardList robots={ filteredRobots } />							
						</ErrorBoundary>
					</Scroll>
				</div>
			)
		};
		
	}
	
}




export default connect(mapStateToProps, mapDispatchToProps)(App);