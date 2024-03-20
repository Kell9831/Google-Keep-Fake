import { useEffect, useState } from "react";
import styles from "./Welcome.module.css";
import Interfaz from "../Interfaz";

const storedUsername = localStorage.getItem("username") ?? "";

const Welcome = () => {
  const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];

  const [isLoggedIn, setIsLoggedIn] = useState(!!storedUsername);
  const [username, setUsername] = useState(storedUsername);
  const [notes, setNotes] = useState(storedNotes);
  const [newNote, setNewNote] = useState("");
  const [deletedNote, setDeletedNote] = useState("");
  const [fullDeletedNote, setFullDeletedNote] = useState("");
  const [pinCardNote, setPinCardNote] = useState("");
  const [palleteCardNote, setPalleteCardNote] = useState("");
  const [recoverNote, setRecoverNote] = useState(" ");
  const [editNote, setEditNote] = useState(" ");

  function handleNewNote(newNote) {
    let nextNote = newNote;
    setNewNote(nextNote);
  }
  const ENDPOINT = `https://codeable-keep-api-production.up.railway.app/api/`;

  function handlePinCardNote(pinStatus) {
    setPinCardNote(pinStatus);
    console.log("click card pinned", pinCardNote);
  }

  function handlePalleteCardNote(data) {
    setPalleteCardNote(data);
    console.log("click pallete in cards", palleteCardNote);
  }

  // function handlePalleteCardNote(data) {
  //   setPalleteCardNote(data);
  //   console.log("click pallete in cards", palleteCardNote);
  // }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const enteredUsername = e.target.username.value;
    if (enteredUsername.trim() !== "") {
      setUsername(enteredUsername);
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    if (username) {
      console.log("Username entered:", username);
      localStorage.setItem("username", username);
    }
    const userEndpoint = ENDPOINT + username + "/notes";

    if (deletedNote || fullDeletedNote || recoverNote || newNote) {
      fetch(userEndpoint)
        .then((response) => response.json())
        .then((data) => {
          setNotes(data.notes);
          setDeletedNote(false);
          setFullDeletedNote(false);
          setRecoverNote(false);
        })
        .catch((e) => console.log(e));
    }
  }, [
    username,
    newNote,
    deletedNote,
    fullDeletedNote,
    pinCardNote,
    recoverNote,
    editNote,
    palleteCardNote,
  ]);

  if (isLoggedIn) {
    return (
      <>
        <Interfaz
          notes={notes}
          username={username}
          setIsLoggedIn={setIsLoggedIn}
          handleNewNote={handleNewNote}
          setDeletedNote={setDeletedNote}
          setFullDeletedNote={setFullDeletedNote}
          handlePinCardNote={handlePinCardNote}
          handlePalleteCardNote={handlePalleteCardNote}
          setRecoverNote={setRecoverNote}
          setEditNote={setEditNote}
        />
      </>
    );
  }

  return (
    <div className={styles.contenedor}>
      <h2 className={styles.welcome}>Welcome to Codeable Keep</h2>

      <label className={styles.username} htmlFor="username">
        {" "}
        username
      </label>
      <form onSubmit={handleLoginSubmit} className={styles["welcome-username"]}>
        <input
          className={styles["username-input"]}
          id="username"
          type="text"
          placeholder=" Username"
        />
        <button className={styles.button} type="submit">
          Enter
        </button>
      </form>
    </div>
  );
};

export default Welcome;
