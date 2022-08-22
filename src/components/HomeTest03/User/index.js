const User = ({data, OnDelete}) => {
    

    return (
    <div>   
        <div>{data.name}</div>
        <div>{data.phone}</div>
        <div>{data.id}</div>
        <button onClick={() => {
            OnDelete(data.id) 
            
        }}>Delete</button>
    </div>
    )
}

export default User