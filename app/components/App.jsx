import React from 'react';

import $ from 'jquery';

console.log($("#app"));

export default class App extends React.Component {
  render() {
    return (
      <div id="content">
        <h1>Foundation React Component</h1>
        <button className="button" onClick={() => { alert("sup"); }}>Do a new thing</button>
      </div>
    );
  }
}
