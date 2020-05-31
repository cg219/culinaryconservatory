import React from "react";
import styles from "./contact-form.style.scss";
import { Input } from "./../input/input.component";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputs: [{
                id: 'entry.2127806314',
                config: {
                    placeholder: 'Name',
                    type: 'text',
                    value: ''
                },
                validation: {
                    required: true
                },
                field: 'input'
            }, {
                id: 'entry.399317233',
                config: {
                    placeholder: 'Email',
                    type: 'email',
                    value: ''
                },
                validation: {
                    required: true
                },
                field: 'input'
            }, {
                id: 'entry.2108076832',
                config: {
                    placeholder: 'Phone',
                    type: 'text',
                    value: ''
                },
                validation: {
                    required: true
                },
                field: 'input'
            }, {
                id: 'entry.10262297',
                config: {
                    placeholder: 'Message',
                    value: ''
                },
                validation: {
                    required: true
                },
                field: 'textarea'
            }]
        }
    }

    updateInput = (event, id) => {
        let newValue = event.target.value;
        let newState = { ...this.state };

        newState.inputs = this.state.inputs.filter(element => {
            if (element.id === id) element.config.value = newValue;
            return element;
        });

        this.setState(newState);
    }

    clearInputs = () => {
        let newState = { ...this.state };

        newState.inputs = this.state.inputs.map(element => {
            element.config.value = "";
            return element;
        });

        this.setState(newState);
    }

    sendForm = event => {
        event.preventDefault();

        let fm = new FormData();

        this.state.inputs.map(input => fm.append(input.id, input.config.value));

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
            .then(response => this.clearInputs())
            .catch(error => console.log(`Error: ${error}`))
    }

    render() {
        let inputs = this.state.inputs.map(data => {
            return <Input
                key={data.id}
                config={data.config}
                changed={event => this.updateInput(event, data.id)}
                field={data.field}
                required={data.validation.required} />
        });

        return (
            <div className={styles.ContactForm}>
                <h3 className="contact-form-title">Contact Us</h3>
                <form onSubmit={ this.sendForm }>
                    { inputs }
                    <input className={styles.InputSubmit} value="Submit" type="submit" />
                </form>
            </div>
        )
    }
}

export { ContactForm };
