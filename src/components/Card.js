import React from "react";
import './Card.css';

const Card =({id , name , email})=>{
        //const {id , name , email}=props
           return <div className="tc bg-light-green dib br3  pa3 ma2 grow shadow-5">
                <img src={`https://robohash.org/8TX.png?set=set${id}`} alt="Photo"/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>  
    }

export default Card; 