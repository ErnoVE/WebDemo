import React, { Component } from 'react';

export class FetchData extends Component {
  displayName = FetchData.name

  constructor(props) {
    super(props);
    this.state = { customers: [], loading: true };

    fetch('api/Customer')
      .then(response => response.json())
      .then(data => {
        this.setState({ customers: data, loading: false });
      });
  }

  static renderCustomerTable(customers) {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Company Name</th>
            <th>Contact Name</th>
            <th>Contact Title</th>
            <th>Phone</th>
            <th>country</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customers =>
            <tr key={customers.CustomerID}>
              <td>{customers.CustomerID}</td>
              <td>{customers.CompanyName}</td>
              <td>{customers.ContactName}</td>
              <td>{customers.ContactTitle}</td>
              <td>{customers.Phone}</td>
              <td>{customers.Country}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderCustomerTable(this.state.customers);

    return (
      <div>
        <h1>Customer</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
