import { useMemo } from "react"

const Form = ({data, onSubmit, onChange, error}) => {



    const disabled = useMemo(() => {
        return data.name === ''
    }, [data])

// không có dependence [] là chạy vô tận --> useEffect(() => {})
// useEffect(() => {}, []) chạy 1 lần. 
// useEffect(() => {}, [data]) sẽ chạy khi dữ liệu data thay đổi.
    return (
<div id="modal-form-organizations" className="modal fade">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{data.id ? 'Edit' : 'Create'} Organizations</h5>
                <button className="btn-close" data-bs-dismiss="modal"/>
            </div>
            <div className="modal-body">
                <div>
                    {error && (
                        <div>Error: Lỗi trùng name or email. Vui lòng nhập lại!!!!</div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="form-name" className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" value={data.name} id="form-name" placeholder="Green Academy" onChange={onChange}/>
                </div>
                
            </div>
        <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button className="btn btn-primary" disabled={disabled} onClick={onSubmit}>Submit</button>
        </div>
    </div>
  </div>
</div>





        
    )
    
}
export default Form;