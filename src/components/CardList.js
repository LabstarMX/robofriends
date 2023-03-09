import React from 'react';
import Card from './Card';
import { robots } from './robots';



const cardList = ({ robots }) => {
	// if (true) {
	// 	throw new Error('NOOOOOOO!!')
	// }
	return (
		<div className=''>
			{
				robots.map((user, i) => {
					return (
						<Card key={i} 
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email} 
						photo={robots[i].photo} 
						/>

					)
				})
			}
	    </div>
	);

}




export default cardList;