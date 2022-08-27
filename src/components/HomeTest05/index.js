import {useState, useMemo, useEffect} from "react";
import List from "./List";
import { Link } from 'react-router-dom';
import './style.css'
import { getUsers, deleteUser } from '../../apis/users'
// import { getOrganizations, createOrganization, editOrganization, deleteOrganization } from "../../apis/organizations";


// Một mảng object
// có một form để nhập id, name và phone
// thực hiện đầy đủ thao tác thêm xóa sửa

// khi nguoi đang edit du liệu, nếu ok thì hiển thị submit
// kiểm tra khi ng dùng đã submit
// kiem tra phia fontend, kiem tra đúng format
// kiem tra phia backend, kiểm tra trung

const HomeTest05 = () => {
    const [search, setSearch] = useState ('')
    const [list, setList] = useState ([ ])
    

    useEffect(() => {
       fetchData()
    }, [])
    
// Dùng useEffect khi xử lí đồng thời 2 biến trở lên.
// dùng useMemo khi chỉ xử lí 1 biến và return ra 1 kết quả 
    const resultList = useMemo(() => {
        if(search) {
            const newResultList = list.filter((item) => {
            return item.name.includes(search) || item.email.includes(search)
        })
        return  newResultList
        } 
        return list
        

    }, [search, list])

    const fetchData = () => {
        getUsers().then((response) => {
            setList(response.data)
            
        }).catch((error) => {
            console.log(error)
        })
    }


    const onDelete = (id) => {
        console.log(id)
        deleteUser(id).then((res) => {
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
    const onSearch = (e) => {
        const value = e.target.value

        setSearch(value)

    }

    return (
        <div>
            <div>
            <header className="header row">
                <h4 className="col-7">Users</h4>
                <div className="col-3">
                    <input className='form-control' value={search} placeholder='Type to search...' onChange={onSearch} />
                </div>
                <div className="col-2">
                    <Link to="/user/create">
                       <button type="button" className="btn btn-primary">
                    Create
                    </button> 
                    </Link>
                    
                </div>
                
            </header>
                
                 {resultList.length === 0 && (
                     <div>No Data found</div>
                 )}

                < List 
                list={resultList}
                onDelete={onDelete}/>

            </div>
        
        </div>
    )
}

export default HomeTest05;