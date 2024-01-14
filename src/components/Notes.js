import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import { NoteItem } from "./NoteItem";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, AddNote } = context;
  return (
    <>
      <AddNote> </AddNote>
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((iter) => {
          return <NoteItem note={iter}></NoteItem>;
        })}
      </div>
    </>
  );
};

export default Notes;
