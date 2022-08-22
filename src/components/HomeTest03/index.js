import { useState } from "react";
import User from './User'

const HomeTest03 = () => {
    const [users, setUser] = useState([{name:'', phone:''}])


    const OnCreate = () => {
        setUser([
            ...users,
            {   id: Math.random(),
                name: 'Quang',
                phone: '0374793586'
            }]
        )
    }
    const OnDelete = (id) => {
        const newData = users.filter(item => {
            return item.id !== id
           
        })
        setUser(newData)
    }





    return (
        <div>
            <div>
                {users.map(item => {
                return (
                    <User key={item.id} 
                    data={item}
                    OnDelete={OnDelete}/>
                )                
                })}
            </div>
            

            <button onClick={OnCreate}> Nhấn giúp 1 cái đi</button>
                
        </div>
    )
}

export default HomeTest03
