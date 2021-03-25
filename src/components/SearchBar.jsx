import React from "react";

class SearchBar extends React.Component {
  handleChange = (e) => {
    return this.props.searchFunction(e.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control form-search"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchBar;
