import React, { Component } from 'react';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div>
        <h1>Janin Oma Web-Demo!</h1>
        <p>Tervetuloa!</p>
        <div class="alert alert-success" role="alert">
          A simple success alert—check it out!
        </div>
      </div>
    );
  }
}
