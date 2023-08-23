import React, { useState } from "react";

function CreateArea(props){

    const[Note, setNotes] = useState({
        title:"",
        note:""
    })

    function handlechange(event){
        const {name, value} = event.target;
        setNotes((prevValue)=>{
            if(name === "title"){
                return {
                    title: value,
                    note: prevValue.note
                }
            } else if(name === "note"){
                return{
                    title: prevValue.title,
                    note: value
                }
            }
        })
    }


    function handleClick(event){
        props.onAdd(Note)
        event.preventDefault();
        setNotes({
            title:"",
            note:""
        })
    } 

    return <div className="container">
        <form action="">
            <input value={Note.title} name="title" type="text" placeholder="Title"  onChange={handlechange} />
            <textarea value={Note.note}  name="note" id="" cols="30" rows="10" onChange={handlechange} placeholder="content" ></textarea>
            <button onClick={handleClick}>Add</button>
        </form>
    </div>

}

export default CreateArea;