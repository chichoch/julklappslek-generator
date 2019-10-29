import * as React from "react";
import "./AddNames.css";

export default class AddNames extends React.Component {
  state = {
    names: [],
    currentName: ""
  };

  onAddName = event => {
    const { names, currentName } = this.state;
    if (!currentName) {
      return;
    }
    names.push(currentName);
    console.log("Names", names);
    this.setState({
      names,
      currentName: ""
    });
    event.preventDefault();
  };

  handleCurrentName = event => {
    this.setState({
      currentName: event.target.value
    });
  };

  onRandomize = event => {
    this.props.onRandomize(this.state.names);
  };

  render() {
    const { names } = this.state;
    return (
      <div>
        <form onSubmit={this.onAddName}>
          <label>
            Namn:
            <input
              type="text"
              value={this.state.currentName}
              onChange={this.handleCurrentName}
            />
          </label>
          <input type="submit" value="Lägg till" />
        </form>
        {names.map((x, i) => (
          <h2 key={i}>{x}</h2>
        ))}
        {names.length > 1 ? (
          <button className="GenerateButton" onClick={this.onRandomize}>
            <span role="img" aria-label="Santa">
              🎅
            </span>
            {" Generera "}
            <span role="img" aria-label="Santa">
              🤶
            </span>
          </button>
        ) : null}
      </div>
    );
  }
}
