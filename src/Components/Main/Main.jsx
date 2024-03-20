import NoteForm from "../NoteForm";
import styles from "./Main.module.css";
import NoteList from "../NoteList";

export default function Main({
  notes,
  displayedContent,
  username,
  handleNewNote,
  setDeletedNote,
  setFullDeletedNote,
  handlePinCardNote,
  setRecoverNote,
  setEditNote,
  handlePalleteCardNote,
}) {
  return (
    <>
      <section className={styles["main-container"]}>
        <div className={styles.wrapper}>
          {displayedContent === "trash" ? (
            // Solo muestra las notas eliminadas
            <NoteList
              notes={notes}
              displayedContent={displayedContent}
              username={username}
              setFullDeletedNote={setFullDeletedNote}
              setRecoverNote={setRecoverNote}
            />
          ) : (
            // Muestra el formulario de creación de notas y NodeList
            <>
              <NoteForm username={username} handleNewNote={handleNewNote} />
              <NoteList
                notes={notes}
                displayedContent={displayedContent}
                username={username}
                setDeletedNote={setDeletedNote}
                handlePinCardNote={handlePinCardNote}
                setEditNote={setEditNote}
                handlePalleteCardNote={handlePalleteCardNote}
              />
            </>
          )}
        </div>
      </section>
    </>
  );
}
