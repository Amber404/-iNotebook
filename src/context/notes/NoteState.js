
import NoteContext from "./NoteContext";
 import { useState } from "react";
const NoteState=(props)=>{
// const S1={
//     "name":"AMber"
// }

const notesinitial=[
    {
      "_id": "659045ecdc35b78080171c3a",
      "user": "658f3593ecb7af0493f9187b",
      "title": "Mai madarchod hu jo isme aaytta hun",
      "description": "bhosdike title padh",
      "tag": "personal( boht zyada)",
      "date": "2023-12-30T16:31:40.658Z",
      "__v": 0
    },
    {
      "_id": "659045f1dc35b78080171c3c",
      "user": "658f3593ecb7af0493f9187b",
      "title": "Mai madarchod hu jo isme aaytta hun",
      "description": "bhofrfrfsdike title padh",
      "tag": "personal( boht zyada)",
      "date": "2023-12-30T16:31:45.892Z",
      "__v": 0
    },
    {
      "_id": "659045f4dc35b78080171c3e",
      "user": "658f3593ecb7af0493f9187b",
      "title": "Mai madarchod hu jo isme aaytta hun",
      "description": "bhofrfrfsdrrg5ike title padh",
      "tag": "personal( boht zyada)",
      "date": "2023-12-30T16:31:48.404Z",
      "__v": 0
    },
    {
      "_id": "659045f6dc35b78080171c40",
      "user": "658f3593ecb7af0493f9187b",
      "title": "Mai madarchod hu jo isme aaytta hun",
      "description": "bhofrfrfsdrrg5ike title pagg5dh",
      "tag": "personal( boht zyada)",
      "date": "2023-12-30T16:31:50.955Z",
      "__v": 0
    }
  ]

  const [notes, setnotes] = useState(notesinitial)

//Add a note
const AddNote=(title,description,tag)=>{

    //APi  call ***
    const note={ "_id": "659045f6dc35b78080171c40",
    "user": "658f3593ecb7af0493f9187b",
    "title": "Add is working",
    "description": "[ADDED] cool add is working so now i can fuck around the app.",
    "tag": "personal( boht zyada)",
    "date": "2023-12-30T16:31:50.955Z",
    "__v": 0}
setnotes(notes.push(note))
}

//Delete a node
const DeleteNote=()=>{
    
}




//Edit a node

const EditNote=()=>{
    
}


    return(
        <NoteContext.Provider value={{notes,setnotes,AddNote,DeleteNote,EditNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState