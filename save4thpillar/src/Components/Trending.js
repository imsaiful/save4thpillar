import React from 'react';
import { promised } from 'q';

const Trending = (props) => {
    console.log(props.data);
 
    
    return (
        <div>
            {props.data.map(({ db_keyword, db_frequency }) => <li>Keyword: {db_keyword}, Frequency: {db_frequency}</li>)}

         
        </div>
    ) 
}

export default Trending;