import React, { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import styles from "./contact-form.style.scss";
import { Input } from "./../input/input.component";

export const ContactForm = props => {
    const [ showThankYou, setShowThankYou ] = useState(false);
    const [ showClient, setShowClient ] = useState(false);
    const [ inputs, setInputs ] = useState([
        {
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
            changed: onFileAdded
        }
    ]);

    const getInputs = isClient => inputs.filter(state => isClient ? state.config.type != 'file' : state);
    const onTypeClick = event => {
        let type = event.target.id;
        setShowClient(type == 'client' ? true : false)
    };
    const onFileAdded = (event, id) => updateInput(event, id, event.target.files[0]);
    const updateInput = (event, id, file) => {
        let newValue = event.target.value;
        let newInputs = inputs.filter(element => {
            if (element.id === id) element.config.value = newValue;
            if (file && element.id === id) element.config.file = file;
            return element;
        });

        setShowThankYou(false);
        setInputs(newInputs);
    }
    const clearInputs = () => {
        let newInputs = inputs.map(element => {
            element.config.value = "";
            element.config.file = null;
            return element;
        });

        setShowThankYou(true);
        setInputs(newInputs);
    }

    const sendForm = event => {
        event.preventDefault();

        let body = {};
        let formData = new FormData();

        inputs.map(input => {
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
            .then(response => clearInputs())
            .catch(error => console.log(`Error: ${error}`))
    }

    let inputStates = getInputs(showClient);
    // let transition = useTransition(inputStates, {
    //     from: { opacity: 0 },
    //     enter: { opacity: 1 },
    //     leave: { opacity: 0 }
    // });
    let inputsMarkup = inputStates.map((data, index) => {
        return <Input
            key={data.id}
            config={data.config}
            changed={data.changed ? event => data.changed(event, data.id) : event => updateInput(event, data.id)}
            field={data.field}
            required={data.validation.required}
            label={data.label} />
    });

    useEffect(() => {
        setShowClient(props.showClient || false);
    }, [props.showClient])

    return (
        <div className={styles.ContactForm}>
            <div className={styles.ContactFormHeader}>
                <h3 className={styles.ContactFormTitle}>Contact Us</h3>
                <span className={styles.ContactFormSubTitle}>Inquiry Type: </span>
                <button className={`${styles.Button} ${showClient ? styles.ButtonPressed : '' }`} onClick={onTypeClick} id='client'>Client</button>
                <button className={`${styles.Button} ${showClient ? '' : styles.ButtonPressed }`} onClick={onTypeClick} id='candidate'>Candidate</button>
            </div>

            <form onSubmit={ sendForm }>
                { inputsMarkup }
                <input className={styles.InputSubmit} value="Submit" type="submit" />
            </form>
            <div className={`${styles.ThankYou} ${showThankYou ? styles.Show : ''}`}><span>Thank You for your Inquiry</span></div>
        </div>
    )
}
