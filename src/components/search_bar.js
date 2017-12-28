import React, { Component } from "react"

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onInputChange = this.onInputChange.bind(this)
  }

  render() {
      return (
        <div className="col-md-12 col-lg-12">
          <div className="search-bar">
            <input
            value={this.state.term}
            onChange={ event => this.onInputChange(event.target.value)}/>
         </div>
        </div>
      )
  }


  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar
