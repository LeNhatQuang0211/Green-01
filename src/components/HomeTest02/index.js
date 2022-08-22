import { useState } from "react";

const HomeTest02 = () => {
    const [users, setuser] = useState(["tùng", 'Nam'])
    console.log(users, setuser)

return (
    <div>
        {users.map((user) => {
            return (
                <div>{user}</div>
            )
        })}
        <button onClick={() => {
            setuser([
                ...users,
                'Quang'
            ])
        }}> Click me to change </button>
            
    </div>
)
    
}
export default HomeTest02
