import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser, editUser } from '../../apis/users'
import FormUser from '../../components/FormUser';

const DEFAULT_FORM_DATA = { name: '', email: '' }

const EditUser = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState (DEFAULT_FORM_DATA)

    useEffect(() => {
        getUser(id)
            .then((res) => {
                setData(res.data) })
            .catch((error) => {
                console.log(error) })
    }, [id])

    const onChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setData({
            ...data,
            [name]: value
        })
    }

    const onSubmit = () => {
        editUser(data.id, data).then((res) => {
       navigate('/users')
        }).catch(error => { console.log(error) 
        })
    }

    


    return (
        <div>
            Edit User
            <FormUser data={data} onChange={onChange} onSubmit={onSubmit}/>
        </div>
    )
}
export default EditUser;