import DisplayList from "../DisplayList";
import styles from "./NotesContainer.module.css";
import Trash from "../Trash/Trash";
export default function NotesContainer({
  displayedContent,
  notes,
  username,
  setDeletedNote,
  setFullDeletedNote,
  handlePinCardNote,
  setRecoverNote,
  setEditNote,
  handlePalleteCardNote,
}) {
  function Title({ name }) {
    return <h1>{name}</h1>;
  }
  let notesPinned = notes
    .filter((note) => note.pinned === true && note.deleted === false)
    .reverse();
  let notesOthers = notes
    .filter((note) => note.pinned === false && note.deleted === false)
    .reverse();
  let noteDeleted = notes.filter((note) => note.deleted === true).reverse();

  console.log(notes);

  return (
    <section className={styles.container}>
      {displayedContent === "notes" ? (
        <>
          <Title name="Pinned" />
          <DisplayList
            notes={notesPinned}
            username={username}
            setDeletedNote={setDeletedNote}
            handlePinCardNote={handlePinCardNote}
            setEditNote={setEditNote}
            handlePalleteCardNote={handlePalleteCardNote}
          />
          <Title name="Others" />
          <DisplayList
            notes={notesOthers}
            username={username}
            setDeletedNote={setDeletedNote}
            setFullDeletedNote={setFullDeletedNote}
            handlePinCardNote={handlePinCardNote}
            setEditNote={setEditNote}
            handlePalleteCardNote={handlePalleteCardNote}
          />
        </>
      ) : displayedContent === "trash" ? (
        <Trash
          notes={noteDeleted}
          username={username}
          setFullDeletedNote={setFullDeletedNote}
          setRecoverNote={setRecoverNote}
        />
      ) : null}
    </section>
  );
}
