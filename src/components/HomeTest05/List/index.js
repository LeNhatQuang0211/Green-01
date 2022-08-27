
import { Link } from 'react-router-dom';
import './style.css'
const List = ({list, onDelete}) => {

    return (
        <div className='row'>
            {list.map((item) => {
                return (
                    <div key={item.id} className='user col-4'>
                        <div className='user'>
                            <main className='user-main'>
                                <h6>Name:{item.name}</h6>
                                <h6>Email:{item.email}</h6>
                            </main>
                            
                            <footer>
                            <div>
                            <button className='btn btn-secondary btn-sm mx-3' onClick={() => {
                                    onDelete(item.id)}}>Delete</button>

                            <Link to={`/user/${item.id}`}>
                                <button className='btn btn-danger btn-sm mx-3'>View</button>
                            </Link>

                            <Link to={`/user/${item.id}/edit`}>
                                <button className='btn btn-info btn-sm mx-3'>Edit</button>
                            </Link>
                            </div>
                            
                                
                            </footer>
                            

                        </div>
                    </div>
                )
            })}
        </div>
    )

}
export default List;