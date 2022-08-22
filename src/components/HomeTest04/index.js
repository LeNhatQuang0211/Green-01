// Nhập dữ liệu từ 1 thẻ input
// sau khi CLick lấy giá trị đó nhập vào mảng
// đồng thời xóa giá trị trong mảng đi hiển thị gia trị vừa nhập lên màn hình
// nếu name === ' ' || đã từng xuất hiện thì k thêm vào list nữa
import { useState } from "react";

const HomeTest04 = () => {
    const [name, setName] = useState('') // dữ liệu input
    const [list, setList] = useState([]) // dữ liệu output

    const onChange = (e) => {
        setName(e.target.value) // hiển thị giá trị nhập vào, nếu k có setName thì vẫn nhận
                                // giá trị nhưng k hiển thị


    }
    const onDelete = (str) => {
        const newList = list.filter((item) => {
            return item !== str
        })
        setList(newList)
        
    }

    const onCreate = () => {
        
        // Cách 2
        if(name !== '') {
            const unique = list.find((item) => { // trả về object
                return item === name

            })
            console.log(unique)
            if(!unique) {
                setList([
                    ...list,
                    name
                ])
            }
            setName('')
        }
        //Cách 1:
        // const newName = list.filter((item) => {
        //     return item === name  
        
        // })
        // if (newName.length === 0) {
        //     setList([
        //     ...list,
        //     name
        // ])
        // }
        // setName('')
    }

    return (
        <div>
            <input value={name} onChange={onChange}/>
            <button onClick={onCreate}>Create</button>

            {list.map((item) => {

                return (
                    <div key={item}>
                        <div>{item}</div>
                        <div><button onClick={() => {
                            onDelete(item)
                        }}>Xóa</button></div>
                        
                    </div>
                    
                )
            })}

        </div>
    )
}
export default HomeTest04