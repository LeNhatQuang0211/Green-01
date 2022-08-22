import { useState } from 'react';


const HomeTest01 = () => {
  const [user, setuser] = useState({
    name: "Kha",
    phone: '123456578'
  })
  
  return (

    <div className='App'>
      <div><h1>{user.name}</h1></div>
      <div><h1>{user.phone}</h1></div>
      <div>
        <button type='button' onClick= {() => {
          setuser({
            ...user,
          name: "Tùng" })
          }}>Click to Change The Name</button>
      </div>
    </div>
  );
}
export default HomeTest01;