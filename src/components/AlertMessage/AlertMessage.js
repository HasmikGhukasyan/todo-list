import { Component } from "react";
import "./alertMessage.css"

export default class AllertMessage extends Component {
    render() {

        const { type, text } = this.props
        const style = {
            backgroundColor: type === "error" ? "#EF6262" : "#468B97"
        }
        return (
            <div className="alert-container" style={style}>
                <span>{text}</span>
            </div>
        )
    }
}