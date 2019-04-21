import React,{Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Trending extends Component{

   
   
    data= {
            labels:this.props.keyword,
            datasets: [
                {
                    label: "Trending Keyword",
                    data: this.props.frequency,
                    backgroundColor:['#64B5F6','#E3F2FD','#F06292','#CDDC39','#EA80FC','#FF8A65','#81C784',
                                    '#64B5F6','#E3F2FD','#F06292','#CDDC39','#EA80FC','#FF8A65','#81C784',
                                    '#64B5F6','#E3F2FD','#F06292'],
                    borderWidth:3,
                    borderColor:'#777',
                    hoverBorderWidth:6,
                    hoverBorderColor:'#000'
                }
     ]
    }
    render(){

    return (
        <div>
            {/* {props.data.map(({ db_keyword, db_frequency }) => <li>Keyword: {db_keyword}, Frequency: {db_frequency}</li>)} */}
            <Bar data={this.data} onElementsClick={this.onKeywordClick}   
                width={100}
                height={40} 
                onElementsClick={elems => {
                    // if required to build the URL, you can 
                    // get datasetIndex and value index from an `elem`:
                    console.log(elems[0]._datasetIndex + ', ' + elems[0]._index);
                    console.log(elems[0]._model.label);
                    // and then redirect to the target page:
                    //window.location = "https://example.com";
                }}
            />
           
            
        </div>
    ) 

   }

   
}


export default Trending;