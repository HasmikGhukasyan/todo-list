const Button = ({text,color}) => {
    const style = {
        color: color
    }
    return (
        <button style={{color}}>{text}</button>
    )
}

export default Button