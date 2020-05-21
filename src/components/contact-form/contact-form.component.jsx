import React from "react";
import "./contact-form.style.scss";

// Name entry.2127806314
// Email entry.399317233
// Body entry.10262297
// City entry.1669405955
// State entry.1155721484
// Phone entry.2108076832

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    sendForm = event => {
        event.preventDefault();
        console.log(event);
    }

    render() {
        return (
            <div className="contact-form">
                <h3 className="contact-form-title">Contact Us</h3>
                <form onSubmit={ this.sendForm }>
                    <div className="input-wrapper">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="input-group">
                        <div className="input-wrapper">
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="input-wrapper">
                            <input type="text" placeholder="Phone" />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-wrapper">
                            <input type="text" placeholder="City" />
                        </div>
                        <div className="input-wrapper">
                            <input type="text" placeholder="State" />
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <input className="input-submit" value="Submit" type="submit" />
                </form>
            </div>
        )
    }
}

export { ContactForm };
