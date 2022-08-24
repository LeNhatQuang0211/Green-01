import { useState, useEffect} from 'react'
import { getOrganization } from '../../../apis/organizations'

const ModalView = ({ id }) => {
    const [data, setData] = useState ({})

    useEffect(() => {
        if (id) {
            getOrganization(id).then((res) => {
                setData(res.data)
            }).catch((error) => {console.log(error)})
        }
    }, [id])
    
// không có dependence [] là chạy vô tận --> useEffect(() => {})
// useEffect(() => {}, []) chạy 1 lần. 
// useEffect(() => {}, [data]) sẽ chạy khi dữ liệu data thay đổi.
    return (
<div id="modal-view-user" className="modal fade">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">View User</h5>
                <button className="btn-close" data-bs-dismiss="modal"/>
            </div>
            <div className="modal-body">
                
                <div className="mb-3">
                    Name : {data.name}
                </div>
                <div className="mb-3">
                    Email : {data.email}
                </div>
                <div className="mb-3">
                    Phone : {data.phone}
                </div>
            </div>
       
    </div>
  </div>
</div>





        
    )
    
}
export default ModalView;