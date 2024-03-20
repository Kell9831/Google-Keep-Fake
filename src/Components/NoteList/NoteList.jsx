import React from "react";
import DisplayList from "../DisplayList";
import NoNotes from "../NoNotes";
import NotesContainer from "../NotesContainer";
import styles from "./NoteList.module.css";
export default function NoteList({
  notes,
  displayedContent,
  username,
  setDeletedNote,
  setFullDeletedNote,
  handlePinCardNote,
  setRecoverNote,
  setEditNote,
  handlePalleteCardNote,
}) {
  console.log(notes);
  return (
    <>
      {notes.length === 0 ? (
        <NoNotes />
      ) : (
        <NotesContainer
          notes={notes}
          displayedContent={displayedContent}
          username={username}
          setDeletedNote={setDeletedNote}
          setFullDeletedNote={setFullDeletedNote}
          handlePinCardNote={handlePinCardNote}
          handlePalleteCardNote={handlePalleteCardNote}
          setRecoverNote={setRecoverNote}
          setEditNote={setEditNote}
        />
      )}
    </>
  );
}
