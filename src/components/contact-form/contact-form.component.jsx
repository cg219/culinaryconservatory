import React from "react";
import styles from "./contact-form.style.scss";
import { Input } from "./../input/input.component";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showThankyou: false,
            inputs: [{
                id: 'name',
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
                id: 'email',
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
                id: 'phone',
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
                id: 'message',
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
        newState.showThankyou = false;

        this.setState(newState);
    }

    clearInputs = () => {
        let newState = { ...this.state };

        newState.inputs = this.state.inputs.map(element => {
            element.config.value = "";
            return element;
        });

        newState.showThankyou = true;

        this.setState(newState);
    }

    sendForm = event => {
        event.preventDefault();

        let body = {};

        this.state.inputs.map(input => body[input.id] = input.config.value);

        let options = {
            method: 'POST',
            body: JSON.stringify(body),
            responseType: 'json',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch('https://us-central1-culinary-conservatory.cloudfunctions.net/email', options)
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
                <h3 className={styles.ContactFormTitle}>Contact Us</h3>
                <form onSubmit={ this.sendForm }>
                    { inputs }
                    <input className={styles.InputSubmit} value="Submit" type="submit" />
                </form>
                <div className={`${styles.ThankYou} ${this.state.showThankyou ? styles.Show : ''}`}><span>Thank You for your Inquiry</span></div>
            </div>
        )
    }
}

export { ContactForm };
