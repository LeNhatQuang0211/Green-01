import { useMemo } from "react"

const Form = ({data, onSubmit, onChange}) => {



    const disabled = useMemo(() => {
        return data.name === '' || data.email === ''
    }, [data])

// không có dependence [] là chạy vô tận --> useEffect(() => {})
// useEffect(() => {}, []) chạy 1 lần. 
// useEffect(() => {}, [data]) sẽ chạy khi dữ liệu data thay đổi.
    return (
        <div>
                <div className="mb-3">
                    <label htmlFor="form-name" className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" value={data.name} id="form-name" placeholder="Nguyễn Văn A" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="form-name" className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" value={data.email} id="form-email" placeholder="name@example.com" onChange={onChange}/>
                </div>
            
            <button className="btn btn-secondary">Back</button>
            <button className="btn btn-primary" disabled={disabled} onClick={onSubmit}>Submit</button>
        </div>
        
    





        
    )
    
}
export default Form;