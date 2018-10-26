import React, { Component } from 'react';

export class Client extends Component {
    displayName = Client.name

    constructor(props) {
        super(props);
        this.state = { customers: [] };
    }




    componentWillMount() {

        let reactKomponentti = this;

        console.log("Aloitetaan fetch-kutsu");
        fetch('/api/Customer/Client')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(JSON.stringify(myJson));

                reactKomponentti.setState({ customers: myJson });
            });

    }

    render() {

        console.log("Render()-metodissa.");

        const asiakkaat = this.state.customers.map((c) =>
            <tr>
                <td style={{ color: "blue" }}>{c.customerId}</td>
                <td>{c.companyName}</td>
                <td>{c.contactTitle}</td>
                <td>{c.contactName}</td>
                <td>{c.phone}</td>
                <td>{c.city}</td>
                <td>{c.country}</td>
            </tr>

        );

        return (
            <div>
                <h1>Northwind asiakkaat!</h1>
                <p>Listaus asiakkaista:</p>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Customer ID</th>
                            <th>Company Name</th>
                            <th>Contact Title</th>
                            <th>Contact Name</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {asiakkaat}
                    </tbody>
                </table>
            </div>
        );
    }
}