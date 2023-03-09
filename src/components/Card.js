// import React from 'react';
import React from 'react';
import './Card.css';
// import Jane from './Jane.png';


const card = (props) => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5'>
			<img src={props.photo} alt='robots' />
			<div>
				<h2>{props.name}</h2>
				<a href='mailto:{ props.email }'> <p>{props.email}</p></a>
			</div>
		</div>
	);
}










export default card;




// const animals = {
// 	tiger: 23,
// 	Lion: 10,
// 	Monkey: 2
// }
// const {tiger, ...rest} = animals;



