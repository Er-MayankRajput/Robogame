import React from "react";
import Card from '../components/Card';

const CardList = ({ Robot }) => {
  if (false){
    throw new  Error('Nooope');
    
  }
  return (
    <div>
      {Robot.map((user, i) => (
        <Card 
          key={i} 
          id={user.id} 
          name={user.name} 
          email={user.email}
        />
      ))}
    </div>
  );
}

export default CardList;
