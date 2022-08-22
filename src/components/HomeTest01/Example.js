import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

const Example = () => {
    const arr = []
    arr.filter((item) => {
        return item !== '' // luôn trả về 1 mảng có thể có phần tử hoặc là rỗng
    })
    // find luôn trả về 1 object
    // map duyet tung phan tu 1 va biến đổi lai theo dieu kien return
    // add: 2 cach add phan tu arr.push(7)
    //      const newList = [
    //      ...arr, 7]
    //      add object
    //      user.push(name: 'd')
    //      const newList = [
    //      ...user,
    //      {name : d}]
    // const {user, setuser} = useState({})//object 
    // const {user, setuser} = useState(0)//number 
    // const {user, setuser} = useState([])//array 
    // const {user, setuser} = useState('')//String 
    // const {user, setuser} = useState(false)//Boolean
    
    Arr.filter() // lọc dữ liệu, trả về array tương ứng
    Arr.find() // tìm kiếm dữ liệu tương ứng, trả về object tương ứng
    
    

return (
    <div>
            
    </div>
)
    
}
export default Example;
// Bootstrap quan trọng playout:
// _ Grid, ant design.
// form botstrap: input, select, checkbox. radio button
// phần Conponent: 
//_Dropdown, Modal,


// du an moi: react + ant design
// sign in page email + password
// Dashboard: sidebar, header, main 
// Sidebar: /users, /organizations
// users: CRUD, fullname, email, phone, gender, organizations
// Organizations: CRUD, name, uniqueName