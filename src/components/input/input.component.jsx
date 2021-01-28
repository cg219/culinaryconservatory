import React, { Component } from "react";
import styles from "./input.style.scss";


class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        let field = this.props.field == 'textarea' ? <textarea {...this.props.config} id={this.props.label} onChange={this.props.changed} required={this.props.required} /> : <input {...this.props.config} id={this.props.label} onChange={this.props.changed} required={this.props.required} />;

        return (
            <div className={styles.Input}>
                <label htmlFor={this.props.label}>{this.props.label}</label>
                {field}
            </div>
        )
    }
}

export { Input };
