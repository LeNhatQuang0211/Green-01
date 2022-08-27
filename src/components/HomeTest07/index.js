import {useState, useMemo, useEffect} from "react";
import Form from "./Form";
import List from "./List";
import './style.css'

import { getOrganizations, createOrganization, editOrganization, deleteOrganization } from "../../apis/organizations";
import ModalView from "./ModalView";

// Một mảng object
// có một form để nhập id, name và phone
// thực hiện đầy đủ thao tác thêm xóa sửa

// khi nguoi đang edit du liệu, nếu ok thì hiển thị submit
// kiểm tra khi ng dùng đã submit
// kiem tra phia fontend, kiem tra đúng format
// kiem tra phia backend, kiểm tra trung



const DEFAULT_FORM_DATA = { name: ''}

const validate = (list, data) => {
    console.log(data)
        if (data.name === '') {
            return false
        }

        // validate Create: kiểm tra trùng ở nút Create
        if (!data.id) { // newItem là dữ liệu mới, sẽ duyệt qua 1 danh sách item đã nhập vào trc đó, (return 1) -> lấy newItem xét với điều kiện đã cho 
            //  -> sau đó (return 2): nếu newItem phù hợp với điều kiện đã cho thì newItem có giá trị trùng thì sẽ là false(k cho submit)  
            // ngược lại là không có giá trị trùng thì sẽ là true(được submit)
            const newItem = list.find((item) => {
                return item.name === data.name
            })
            return newItem ? false : true
        }


        // validate nút Edit: kiểm tra trùng ở nút Edit
        if (data.id) {
            const newItem = list.find((item) => {
                return item.id !== data.id && (item.name === data.name)
            })
            return newItem ? false : true
        }
}




const HomeTest07 = () => {
    
    const [selectedId, setSelectedId] = useState([])
    const [data, setData] = useState (DEFAULT_FORM_DATA)
    const [search, setSearch] = useState ('')
    const [list, setList] = useState ([ ])
    const [error, setError] = useState (false)

    useEffect(() => {
       fetchData()
    }, [])
    
// Dùng useEffect khi xử lí đồng thời 2 biến trở lên.
// dùng useMemo khi chỉ xử lí 1 biến và return ra 1 kết quả 
    const resultList = useMemo(() => {
        if(search) {
            const newResultList = list.filter((item) => {
            return item.name.includes(search)
        })
        return  newResultList
        } 
        return list
        

    }, [search, list])

    const fetchData = () => {
        getOrganizations().then((response) => {
            setList(response.data)
            
        }).catch((error) => {
            console.log(error)
        })
    }
  
    const onChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setData({
            ...data,
            [name]: value
        })
    }
    const onSubmit = () => {
        const isValidated = validate(list, data)
        console.log(isValidated)

        if(!isValidated) {
            setError(true)
        }

        if(isValidated) {
        
        if(!data.id) { // nút Create
            createOrganization(data).then((res) => {
                fetchData()
                setData(DEFAULT_FORM_DATA)
            }).catch((error) => { console.log(error) })
        //     setList([
        //     ...list,
        //     {
        //         ...data,
        //         id: Math.random()
        //     }
        // ])
        
        }
        if(data.id) { // nút Edit
            editOrganization(data.id, data).then((res) => {
                fetchData()
                setData(DEFAULT_FORM_DATA)
            }).catch(error => { console.log(error) 
            })
           
        }
        const element = document.querySelector('#modal-form-organizations')
        const modal = window.bootstrap.Modal.getOrCreateInstance(element);
        modal.hide();
        }
    }
    const onCreate = () => {
        setData(DEFAULT_FORM_DATA)
        const element = document.querySelector('#modal-form-organizations')
        const modal = window.bootstrap.Modal.getOrCreateInstance(element);
        modal.show();
    }

    const onView = id => {
        setSelectedId(id)
        const element = document.querySelector('#modal-view-organizations')
        const modal = window.bootstrap.Modal.getOrCreateInstance(element);
        modal.show();
    }


    const onDelete = (id) => {
        console.log(id)
        deleteOrganization(id).then((res) => {
            fetchData()
        })
        .catch((error) => { 
            console.log(error) }
            )
            fetchData()
        // const newList = list.filter((item) => {
        //     return item !== str
        // })
        // setList(newList)
    }
    
    const onEdit = (data) => {
        setData(data)
        const element = document.querySelector('#modal-form-organizations')
        const modal = window.bootstrap.Modal.getOrCreateInstance(element);
        modal.show();
    }

    const onSearch = (e) => {
        const value = e.target.value

        setSearch(value)

    }

    return (
        <div>
            <div>
            <header className="header row">
                <h4 className="col-7">Organizations</h4>
                <div className="col-3">
                    <input className='form-control' value={search} placeholder='Type to search...' onChange={onSearch} />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-primary" onClick={onCreate}>
                    Create
                    </button>
                </div>
                
            </header>
                
                 {resultList.length === 0 && (
                     <div>No Data found</div>
                 )}

                < List 
                list={resultList}
                onView={onView}
                onDelete={onDelete}
                onEdit={onEdit} />

                <Form 
                 data = {data}
                 error={error}
                 onSubmit={onSubmit}
                 onChange={onChange}/>
                 <ModalView id={selectedId} />
            </div>
        
        </div>
    )
}

export default HomeTest07;