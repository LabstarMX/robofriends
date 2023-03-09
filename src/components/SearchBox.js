import React from 'react';
import magnifyingGlass from '../img/magnifying-glass.png';



const searchBox = ({ searchField, searchChange }) => {
	return (
		<div className='pa2'>
			<input 
			type='search' 
			placeholder='search robots'
			className='pa3 ba b--green bg-lightest-blue'
			onChange={searchChange}
			>
			</input>
		</div>
	);
}


export default searchBox;