import { useState } from "react"

const ShowTodoTask = (props:any) =>{
    const [Btn,setVisible] = useState(false)
    const {indexOf,data,del,done} = props //ใช้ประมาณ type ที่อาจารย์สอน

    return (
        <div className="flex justify-between h-8 items-center py-6 border-b" onMouseOver = {()=> setVisible(true)} onMouseLeave = {() => setVisible(false)}>
            <span className="text-2xl"> {data.title} </span>
                <div className="flex space-x-1 items-center">
                <button id="donebutton" className="bg-green-400 w-24 text-2xl" style={{visibility:Btn?'visible':'hidden'} } onClick = {() => done(indexOf)}>Done</button>
                <button id="delbutton"className="bg-red-400 w-24 text-2xl" style={{visibility:Btn?'visible':'hidden'}} onClick = {() => del(indexOf)}>Delete</button>
                </div>
        </div>
    )
}

export default ShowTodoTask