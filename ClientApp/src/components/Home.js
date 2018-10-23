import React, { Component } from 'react';
// import './tyyli.css'; lisää tänne tyylitiedosto

export class Home extends Component {
  displayName = Home.name
/* 
  constructor(props) {
    super(props);
    this.state = {Customer: []};
  } */

  componentWillMount() {

/*     let that = this;
    console.log("Aloitetaan datan haku.");
    fetch('/api/Customer')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(JSON.stringify(myJson));
        that.setState({ Customer: myJson });
        // console.log("Tila asetettu.");
      }); */

  }



  render() {

    console.log("Render metodissa");
/*     const Customer = this.state.Customer.map((c) =>
    <tr>
        <td style={{ color: "blue" }}>{c.CustomerID}</td>
              <td>{c.CustomerID}</td>
              <td>{c.CompanyName}</td>
              <td>{c.ContactName}</td>
              <td>{c.ContactTitle}</td>
              <td>{c.Phone}</td>
              <td>{c.Country}</td>
    </tr> 
); */

    return (
      <div>
        <h1>Tietokanta DEMO</h1>
{/*         <p>Tervetuloa!</p>
        <table className="table table-striped">
          <tbody>
            {Customer}
          </tbody>
        </table> */}
      </div>
    );
  }
}
