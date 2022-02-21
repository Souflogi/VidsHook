import React from "react";
import "./SearchBar.css";
class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }
  onSearchSubmit(e) {
    e.preventDefault();
    this.props.SearchSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSearchSubmit.bind(this)}>
          <div className="field">
            <label htmlFor="">Search here :</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange.bind(this)}
            />
          </div>
        </form>
        {/* {this.state.term} */}
      </div>
    );
  }
}

export default SearchBar;

// Youtube  public API
// AIzaSyA2QZBYm2kMpYJKfyFgX9kmr67DAiPveOo
