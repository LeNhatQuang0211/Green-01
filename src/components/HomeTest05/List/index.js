import './style.css'
const List = ({list, onView, onDelete, onEdit}) => {

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

                            <button className='btn btn-danger btn-sm mx-3' onClick={() => {
                                    onView(item.id)}}>View</button>

                                <button className='btn btn-info btn-sm mx-3' onClick={() => {
                                    onEdit(item)}}>Edit</button></div>
                            </footer>
                            

                        </div>
                    </div>
                )
            })}
        </div>
    )

}
export default List;