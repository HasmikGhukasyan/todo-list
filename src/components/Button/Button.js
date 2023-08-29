import "./button.css"

const Button = ({text,color = "", className}) => {
    const style = {
        color: color
    }
    return (
        <button className={`app-btn ${className}`} style={{color}}>{text}</button>
    )
}

export default Button