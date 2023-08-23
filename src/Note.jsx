import React from "react";

function Note(props){

    function hnadleDelete(){
        props.onDelete(props.id)
    }

    return (
    <div className="note">
        <div className="singleNote">
        <button onClick={hnadleDelete}>delete</button>
        <h1>{props.title}</h1>
        <p>{props.note}</p>
        </div>
    </div>
    )

}


export default Note;