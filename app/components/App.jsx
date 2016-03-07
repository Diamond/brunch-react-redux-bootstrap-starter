import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div id="content">
        <h1>Bootstrap React Component</h1>
        <button className="button" onClick={() => { alert("sup"); }}>Do a new thing</button>
      </div>
    );
  }
}
