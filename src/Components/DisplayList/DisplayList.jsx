import styles from "./DisplayList.module.css";
import Cards from "../../components/Cards";
export default function DisplayList({
  notes,
  username,
  setDeletedNote,
  setFullDeletedNote,
  handlePinCardNote,
  setRecoverNote,
  setEditNote,
  handlePalleteCardNote,
}) {
  return (
    <div className={styles.container}>
      <section className={styles.display}>
        {notes.map((note) => (
          <Cards
            key={note.id}
            note={note}
            username={username}
            setDeletedNote={setDeletedNote}
            setFullDeletedNote={setFullDeletedNote}
            handlePinCardNote={handlePinCardNote}
            setRecoverNote={setRecoverNote}
            setEditNote={setEditNote}
            handlePalleteCardNote={handlePalleteCardNote}
          />
        ))}
      </section>
    </div>
  );
}
