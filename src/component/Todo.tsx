import { useState } from 'react'
import ShowDoneTask from './ShowDoneTask'
import ShowTodoTask from './ShowTask'

const ArrayForMakeDoneList:any[] = []

const Todo = () =>{
    const[Arrayvalue,setValueToArray] = useState ([{title:null}])
    const[Value,setValue] = useState ('')
    
    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        /* check pressing enter key here */
        if(ev.key === 'Enter'){
            if(Value === null){
                alert("Task cannot be empty na i sus");
            }
            else{
                Addlist(Value)
            }
        }
    }

    function Addlist (val:any) {
        const ArrayOfList = [...Arrayvalue,{title:val}] // ... คือการก็อปค่าใน usestate //,{title:val} การใส่ค่า val ประเภทเดียวกับ title ลงใน useState
        setValueToArray(ArrayOfList)//แปลงค่าลงใน state ที่ชื่อ ArrayOfList
        setValue('')
    }

    function Btn_Delete (del:any) {
        const ArrayForDel = [...Arrayvalue]
        ArrayForDel.splice(del,1)
        setValueToArray(ArrayForDel)
    }

    function Btn_Done (done:any) {
        const ArrayForDone = [...Arrayvalue]
        ArrayForMakeDoneList.push(ArrayForDone[done])
        Btn_Delete(done)
    }

    const ShowTodo = Arrayvalue.map((data,index) => {
        return <ShowTodoTask key = {index} indexOf = {index} data={data} del = {Btn_Delete} done = {Btn_Done}/> //สามารถใช้แทน <ShowTodoTask></ShowTodoTask>
    }).reverse()

    const ShowDone = ArrayForMakeDoneList.map((data,index) => {
        return <ShowDoneTask key = {index} data = {data}></ShowDoneTask>
    }).reverse()

    return (
        <div className='mx-auto max-w-4xl'>

            <div className='flex space-x-1'>
            <input className='border border-gray-400 w-full text-2xl'
            onKeyDown={onKeyDownCallback} value = {Value} onChange = {(ev) => setValue(ev.target.value)} ></input>
            <button className='border border-gray-400 w-8 font-bold' onClick = {() => Addlist(Value)}>+</button>
            </div>
            {ShowTodo}
            {ShowDone}
        </div>
    )
}

export default Todo