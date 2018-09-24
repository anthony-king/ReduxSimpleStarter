import React, { Component } from 'react';

class SearchBar extends Component {
  // onInputChange = onInputChange.bind(this);

  onInputChange(e) {
    console.log(e.taget.value);
  }

  render() {
    return <input onChange={this.onInputChange} />
  }
}

export default SearchBar;