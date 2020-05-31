import React from "react";

class SearchBar extends React.Component {
  state = { text: "Hai there!" };

  onformSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.text);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onformSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.text}
              onChange={(event) => this.setState({ text: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
