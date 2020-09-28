import React, { Component } from "react";
import styles from "./input.style.scss";


class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        let field = this.props.field == 'textarea' ? <textarea {...this.props.config} onChange={this.props.changed} required={this.props.required} /> : <input {...this.props.config} onChange={this.props.changed} required={this.props.required} />;

        return (
            <div className={styles.Input}>
                {field}
            </div>
        )
    }
}

export { Input };
