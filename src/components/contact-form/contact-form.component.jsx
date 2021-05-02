import React from "react";
import styles from "./contact-form.style.scss";
import { Input } from "./../input/input.component";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showThankyou: false,
            showClient: true,
            inputs: [{
                id: 'name',
                label: 'Name',
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
                label: 'Email',
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
                label: 'Phone',
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
                label: 'Message',
                config: {
                    placeholder: 'Message',
                    value: ''
                },
                validation: {
                    required: true
                },
                field: 'textarea'
            }, {
                id: 'resume',
                label: 'Resume',
                config: {
                    placeholder: 'Resume',
                    value: '',
                    file: '',
                    type: 'file',
                    accept: '.doc, .docx, .word, .pdf',
                    className: styles.FileInput
                },
                validation: {
                    required: false
                },
                field: 'input',
                changed: this.onFileAdded
            }]
        }
    }

    onTypeClick = event => {
        let button = event.target;
        let type = event.target.id;
        let newState = { ...this.state };

        newState.showClient = type == 'client' ? true : false;
        this.setState(newState)
    }

    onFileAdded = (event, id) => {
        console.log(event.target.files[0]);
        this.updateInput(event, id, event.target.files[0]);
    }

    getInputs = isClient => {
        return this.state.inputs.filter(state => {
            if (isClient) {
                return state.config.type != 'file';
            } else {
                return state
            }
        })
    }

    updateInput = (event, id, file) => {
        let newValue = event.target.value;
        let newState = { ...this.state };

        newState.inputs = this.state.inputs.filter(element => {
            if (element.id === id) element.config.value = newValue;
            if (file && element.id === id) element.config.file = file;
            return element;
        });
        newState.showThankyou = false;

        this.setState(newState);
    }

    clearInputs = () => {
        let newState = { ...this.state };

        newState.inputs = this.state.inputs.map(element => {
            element.config.value = "";
            element.config.file = null;
            return element;
        });

        newState.showThankyou = true;

        this.setState(newState);
    }

    sendForm = event => {
        event.preventDefault();

        let body = {};
        let formData = new FormData();

        this.state.inputs.map(input => {
            body[input.id] = input.config.file || input.config.value;
            formData.append(input.id, input.config.file || input.config.value);
        });

        let options = {
            method: 'POST',
            body: formData,
            responseType: 'json',
            mode: 'no-cors'
        };

        fetch('https://us-central1-culinary-conservatory.cloudfunctions.net/email', options)
            .then(response => this.clearInputs())
            .catch(error => console.log(`Error: ${error}`))
    }

    render() {
        let inputStates = this.getInputs(this.state.showClient);
        let inputs = inputStates.map(data => {
            return <Input
                key={data.id}
                config={data.config}
                changed={data.changed ? event => data.changed(event, data.id) : event => this.updateInput(event, data.id)}
                field={data.field}
                required={data.validation.required}
                label={data.label} />
        });

        return (
            <div className={styles.ContactForm}>
                <div className={styles.ContactFormHeader}>
                    <h3 className={styles.ContactFormTitle}>Contact Us</h3>
                    <span className={styles.ContactFormSubTitle}>Inquiry Type: </span>
                    <button className={`${styles.Button} ${this.state.showClient ? styles.ButtonPressed : '' }`} onClick={this.onTypeClick} id='client'>Client</button>
                    <button className={`${styles.Button} ${this.state.showClient ? '' : styles.ButtonPressed }`} onClick={this.onTypeClick} id='candidate'>Candidate</button>
                </div>

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
