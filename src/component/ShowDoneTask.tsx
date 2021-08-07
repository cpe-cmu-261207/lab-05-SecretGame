const ShowDoneTask = (props:any) =>{
    const {data} = props
    return (
        <div className="flex justify-between h-8 items-center py-6 border-b">
            <span className="text-2xl line-through"> {data.title} </span>
        </div>
    )
}

export default ShowDoneTask