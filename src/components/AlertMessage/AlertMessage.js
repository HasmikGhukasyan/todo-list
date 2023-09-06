import { Component } from "react";
import "./alertMessage.css"

export default class AllertMessage extends Component {
    render() {

        const { type, text } = this.props
        const style = {}
        switch (type) {
            case "error":
                style.backgroundColor = "#F7DBDB";
                style.color = "#721C24";
                break;
            case "info":
                style.backgroundColor = "#D7F0FD";
                style.color = "#125965";
                break;
            default: style.backgroundColor = "#eee";
                break
        }

        return (
            <div className="alert-container" style={style}>
                <span>{text}</span>
            </div>
        )
    }
}