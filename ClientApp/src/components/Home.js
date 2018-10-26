import React, { Component } from 'react';

export class Home extends Component {
    displayName = Home.name

    constructor(props) {
        super(props);
        this.state = { luvut: [] };
    }

    componentWillMount() {

        let that = this;
        console.log("Aloitetaan datan haku.");
        fetch('/api/Customer/luvut')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(JSON.stringify(myJson));
                // console.log("Lukumäärä: " + myJson.length);
                that.setState({ luvut: myJson });
                // console.log("Tila asetettu.");
            });

    }
    render() {
        console.log("Render-metodisssa.");

        const luvut = this.state.luvut.map((luku) =>
            <li>{luku}</li>
        );
        return (
            <div>
                <h1>Tervetuloa WebDemo sivustolle!</h1>
                <p>Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet käyttävät.
                    Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, jolloin tuntematon
                    tulostaja otti kaljuunan ja sekoitti sen tehdäkseen esimerkkikirjan. Se ei ole selvinnyt vain viittä vuosisataa,
                    mutta myös loikan elektroniseen kirjoitukseen, jääden suurinpiirtein muuntamattomana.
                    Se tuli kuuluisuuteen 1960-luvulla kun Letraset-paperiarkit, joissa oli Lorem Ipsum pätkiä,
                    julkaistiin ja vielä myöhemmin tietokoneen julkistusohjelmissa, kuten Aldus PageMaker
                    joissa oli versioita Lorem Ipsumista.</p>

                <ul style={{ fontSize: 20, color: "blue" }}>
                    {luvut}
                </ul>

            </div>
        );
    }
}