import { useEffect, useState } from "react";
import styles from "./NoteForm.module.css";
import Pallete from "../Pallete";

const NoteForm = ({ username, handleNewNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [color, setColor] = useState("#ffffff");
  const [pinned, setPinned] = useState(false); //pinned to welcome
  const ENDPOINT = `https://codeable-keep-api-production.up.railway.app/api/`;
  const [showColorSelector, setShowColorSelector] = useState(false);
  const [selectedColor, setSelectedColor] = useState("white");

  // handle color in pallete component

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };
  const handleVectorImageClick = () => {
    setShowColorSelector(!showColorSelector);
  };

  function handlePinned() {
    setPinned(!pinned);
    console.log("click pin", pinned);
  }
  const handleAddNote = (e) => {
    e.preventDefault();
    const body = {
      title: title,
      body: content,
      color: selectedColor,
      pinned: pinned,
    };

    console.log(body.title, body.body, body.color, body.pinned);
    console.log(JSON.stringify(body));
    const userEndpoint = ENDPOINT + username + "/notes";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(userEndpoint, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        handleNewNote(data);
        setTitle("");
        setContent("");
        setSelectedColor("white");
        setPinned(false);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <form
        style={{ backgroundColor: selectedColor }}
        className={styles["note-form"]}
        onSubmit={handleAddNote}
        action=""
      >
        <input
          className={styles["input-title"]}
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className={styles["input-note"]}
          type="text"
          name="note"
          placeholder="Your Note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className={styles["form-options"]}>
          <Pallete
            showColorSelector={showColorSelector}
            handleVectorImageClick={handleVectorImageClick}
            handleColorSelect={handleColorSelect}
          />
          {/* <input type="color" /> */}
          <button className={styles["keep-it"]} type="submit">
            Keep it!
          </button>
        </div>
        <div className={styles.clip} onClick={handlePinned}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
          >
            <g clipPath="url(#clip0_1508_212)">
              <path
                d="M9.9802 7.58428L10.0094 7.86656L10.2667 7.98621C11.863 8.72841 13 10.0057 13 11.5312C13 11.7211 12.8461 11.875 12.6563 11.875H7.87504H7.37504V12.375V15.9798L6.75002 17.2299L6.125 15.9798V12.375V11.875H5.625H0.84375C0.653896 11.875 0.5 11.7211 0.5 11.5312C0.5 10.0196 1.62103 8.73581 3.23325 7.98621L3.4906 7.86657L3.5198 7.58428L3.94994 3.42645L4.00698 2.875H3.45259H1.96875C1.7789 2.875 1.625 2.7211 1.625 2.53125V0.84375C1.625 0.653896 1.7789 0.5 1.96875 0.5H11.5312C11.7211 0.5 11.875 0.653896 11.875 0.84375V2.53125C11.875 2.7211 11.7211 2.875 11.5312 2.875H10.0474H9.49302L9.55006 3.42645L9.9802 7.58428Z"
                fill={pinned ? "#999B9E" : "none"}
                stroke="#999B9E"
              />
            </g>
            <defs>
              <clipPath id="clip0_1508_212">
                <rect width="13.5" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
