import React from 'react';
import './SeasonDisplay.css';


const seasonConfig = {
    summer:{
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    winter:{
        text: 'Burr it is cold!',
        iconName: 'snowflake'
    }
}


//Best to define a new function as to extract as much logic out of functional components as possible
const getSeason = (lat, month) =>{
    if (month > 2 && month < 9){
        //this is a JS terary expression to be evaluated.  this says that if lat is greater than 0 then return summer, otherwise return winter.  Similar to an if/then.
        return lat > 0 ? 'summer' : 'winter';
    } else{
        return lat < 0 ? 'winter' : 'summer';
}

}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());

    const {text, iconName} = seasonConfig[season] //this returns an object with our text and iconName inside of it {text, iconName}

    return (
    <div className={`season-display ${season}`}>
        <i className ={`icon-left massive ${iconName} icon`}/>
        <h1>{text}</h1>
        <i className ={`icon-right massive ${iconName} icon`}/>
        </div>
    );
};
//first half of import/export between files
export default SeasonDisplay;