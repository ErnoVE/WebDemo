import React, { Component } from 'react';

export class Customer extends Component {
  displayName = Customer.name

  constructor(props) {
    super(props);
    this.state = { Customer: [], loading: true };

    fetch('api/Customer')
      .then(response => response.json())
      .then(data => {
        this.setState({ Customer: data, loading: false });
      });
  }

  static renderCustomerTable(Customer) {
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
          {Customer.map(Customers =>
            <tr key={Customers.customerId}>
              <td>{Customers.customerId}</td>
              <td>{Customers.companyName}</td>
              <td>{Customers.contactName}</td>
              <td>{Customers.contactTitle}</td>
              <td>{Customers.phone}</td>
              <td>{Customers.country}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Customer.renderCustomerTable(this.state.Customer);

    return (
      <div>
        <h1>Customer</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
