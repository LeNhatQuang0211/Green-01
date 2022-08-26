import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormUser from '../../components/FormUser';
import { createUser } from '../../apis/users'

const DEFAULT_FORM_DATA = { name: '', email: '' }

const CreateUser = () => {
    const navigate = useNavigate()
    const [data, setData] = useState (DEFAULT_FORM_DATA)

    const onChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setData({
            ...data,
            [name]: value
        })
    }
    const onSubmit = () => {
       createUser(data).then((res) => {
        navigate('/users')
            }).catch((error) => { console.log(error) })
       
        
    }
    return (
        <div>
            Create User
            <FormUser data={data} onChange={onChange} onSubmit={onSubmit}/>
        </div>
    )
}
export default CreateUser;