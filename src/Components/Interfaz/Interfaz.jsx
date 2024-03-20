import Header from "../Header";
import Aside from "../Aside";
import Main from "../Main";
import styles from "./Interfaz.module.css";
import React, { useState } from "react";
function Interfaz({
  notes,
  username,
  setIsLoggedIn,
  handleNewNote,
  setDeletedNote,
  setFullDeletedNote,
  handlePinCardNote,
  setRecoverNote,
  setEditNote,
  handlePalleteCardNote,
}) {
  const [displayedContent, setDisplayedContent] = useState("notes");

  return (
    <div>
      <Header username={username} setIsLoggedIn={setIsLoggedIn} />
      <div className={styles.interfaz}>
        <Aside setDisplayedContent={setDisplayedContent} />
        <Main
          username={username}
          notes={notes}
          displayedContent={displayedContent}
          handleNewNote={handleNewNote}
          setDeletedNote={setDeletedNote}
          setFullDeletedNote={setFullDeletedNote}
          handlePinCardNote={handlePinCardNote}
          setRecoverNote={setRecoverNote}
          setEditNote={setEditNote}
          handlePalleteCardNote={handlePalleteCardNote}
        />
      </div>
    </div>
  );
}

export default Interfaz;
