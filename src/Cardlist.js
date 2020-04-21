import React from 'react';
import Card from './Card'

const cardlist = ({robots}) =>{
	return(
        	robots.map((robot, i) => {
				return (		
					 <Card key = {i}
					 id={robots[i].id}
				 	 name={robots[i].name}
				 	 email={robots[i].username} />
				 	 
				 	 );
				
 })
	);
}

export default cardlist;