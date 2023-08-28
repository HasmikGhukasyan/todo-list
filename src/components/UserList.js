import UserItem from "./UserItem"

const UserList = () => {
    const users = [
        { name: 'John', age: 25, status: true },
        { name: 'Bob', age: 30, status: false },
        { name: 'Tom', age: 20, status: true },
        { name: 'Sam', age: 28, status: false },
        { name: 'Ann', age: 24, status: true },
      ]

      const data = users.map(el=> {
        return <UserItem name={el.name} age={el.age} status={el.status}/>
      })

      return (
            <ol>
                {data}
            </ol>
      )
}
export default UserList