import React, { Component } from 'react'

class SearchBar extends Component {
  state={term:''};
  onInputChange = event =>{
      this.setState({term:event.target.value});
  }; 

  onFormSubmit = event => {
      event.preventDefault();
      this.props.onFormSubmit(this.state.term); 
  };
  render() {
    return (
      <div>
        <form className="navbar-form" onSubmit={this.onFormSubmit }>
        <input type="text" placeholder="Search News"
            value={this.state.value}
            onChange={this.onInputChange}
        />
        </form>
      </div>
    )
  }
}

export default SearchBar;