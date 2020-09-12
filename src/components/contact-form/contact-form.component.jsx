import React from "react";
import styles from "./contact-form.style.scss";
import { Input } from "./../input/input.component";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showThankyou: false,
            inputs: [{
                id: 'entry.1090562520',
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
                id: 'entry.552902496',
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
                id: 'entry.1509799615',
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
                id: 'entry.1555435740',
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

        fetch('https://docs.google.com/forms/d/e/1FAIpQLSdjBK_HZBt4veZoH24SZHsZMcPHbhjOkoPtQVw-qAPHtaaiWw/formResponse', options)
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
