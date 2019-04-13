import React from 'react';
import {Bar} from 'react-chartjs-2';
const Trending = (props) => {
   
    
    const data= {
        labels:props.keyword,
        datasets: [{
        label: "Trending Keyword",
        data: props.frequency,
        backgroundColor:['#64B5F6','#E3F2FD','#F06292','#CDDC39','#EA80FC','#FF8A65','#81C784',
        '#64B5F6','#E3F2FD','#F06292','#CDDC39','#EA80FC','#FF8A65','#81C784',
        '#64B5F6','#E3F2FD','#F06292'
        ],

        borderWidth:3,
        borderColor:'#777',
        hoverBorderWidth:6,
        hoverBorderColor:'#000'
       
        }]
    }
    return (
        <div>
            {/* {props.data.map(({ db_keyword, db_frequency }) => <li>Keyword: {db_keyword}, Frequency: {db_frequency}</li>)} */}
            < Bar data={data} />
           
            
        </div>
    ) 
}

export default Trending;