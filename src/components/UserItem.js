const UserItem = ({name,age, status}) => {
    const style = {  
        color: status ? "green" : "blue"
    }
    return (
            <li style={style}>Name: {name}, Age: {age}</li>
    )
}

export default UserItem