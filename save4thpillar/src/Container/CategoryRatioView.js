import React, { Component } from 'react'
import CategoryRatio from '../Components/CategoryRatio'
import axios from 'axios';
class CategoryRatioView extends Component {
    state = {
        data:[],
        value: [],
        category: []
    }
  componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/category')
        .then(res => {
        const data = res.data;
   

        data.map(d => {
            this.state.category.push(d.category)
            this.state.value.push(d.value);
        })

        this.setState({
            data: res.data
                });
        }) 
    } 
    render() {
        return (
            <div>
                <CategoryRatio category={this.state.category} value={this.state.value}/>
            </div>
        )
    }
}
export default CategoryRatioView