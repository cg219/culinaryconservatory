import React from "react";
import "./contact-form.style.scss";

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
                    <div className="input-wrapper">
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="input-wrapper">
                        <input type="text" placeholder="State" />
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
