import { Component } from "react";
import "./alertMessage.css"

export default class AllertMessage extends Component {
    render() {

        const { type, text } = this.props
        const style = {}
        switch (type) {
            case "error":
                style.backgroundColor = "#EF6262";
                break;
            case "info":
                style.backgroundColor = "#468B97";
                break;
            default: style.backgroundColor = "#eee"; break
        }

        return (
            <div className="alert-container" style={style}>
                <span>{text}</span>
            </div>
        )
    }
}