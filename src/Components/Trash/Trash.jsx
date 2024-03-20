import styles from "./Trash.module.css";
import DisplayList from "../DisplayList";

export default function Trash({
  notes,
  username,
  setFullDeletedNote,
  setRecoverNote,
}) {
  return (
    <section className={styles.container}>
      <DisplayList
        notes={notes}
        username={username}
        setFullDeletedNote={setFullDeletedNote}
        setRecoverNote={setRecoverNote}
      />
    </section>
  );
}
