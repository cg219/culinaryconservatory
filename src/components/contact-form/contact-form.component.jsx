import React from "react";
import "./contact-form.style.scss";

// Name entry.2127806314
// Email entry.399317233
// Body entry.10262297
// City entry.1669405955
// State entry.1155721484
// Phone entry.2108076832
// https://docs.google.com/forms/d/e/1FAIpQLScYJSQomGuAgxgcmCU1kWyNv0Z1pD1JfFFjp8dd5jfqCXIk3A/formResponse

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {}
        }
    }

    sendForm = event => {
        event.preventDefault();

        let data = {
            'entry.2127806314': 'Name',
            'entry.399317233': 'Email',
            'entry.10262297': 'Body',
            'entry.2108076832': 'Phone'
        };

        let fm = new FormData();

        fm.append('entry.2127806314', 'Name');
        fm.append('entry.399317233', 'Email');
        fm.append('entry.10262297', 'Body');
        fm.append('entry.2108076832', 'Phone');

        let options = {
            method: 'POST',
            body: fm,
            responseType: 'json',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch('https://docs.google.com/forms/d/e/1FAIpQLScYJSQomGuAgxgcmCU1kWyNv0Z1pD1JfFFjp8dd5jfqCXIk3A/formResponse', options)
            .then(response => response.xml())
            .then(data => console.log(`Success: ${data}`))
            .catch(error => console.log(`Error: ${error}`))
    }

    render() {
        return (
            <div className="contact-form">
                <h3 className="contact-form-title">Contact Us</h3>
                <form onSubmit={ this.sendForm }>
                    <div className="input-wrapper">
                        <input type="text" name="entry.2127806314" placeholder="Name" />
                    </div>
                    <div className="input-wrapper">
                        <input type="text" name="entry.399317233" placeholder="Email" />
                    </div>
                    <div className="input-wrapper">
                        <input type="text" name="entry.2108076832" placeholder="Phone" />
                    </div>
                    <div className="input-wrapper">
                        <textarea name="entry.10262297" placeholder="Message"></textarea>
                    </div>
                    <input className="input-submit" value="Submit" type="submit" />
                </form>
            </div>
        )
    }
}

export { ContactForm };
