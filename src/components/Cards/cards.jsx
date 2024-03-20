import { useState } from "react";
import ColorSelector from "../colorSelector/colorSelector";
import styles from "./cards.module.css";

import vector from "../../assets/icons/Vector.svg";
import group from "../../assets/icons/Group.svg";
import edit from "../../assets/icons/Edit.svg";
import recover from "../../assets/icons/Recover.svg";
import confirm from "../../assets/icons/Confirm.svg";

export default function Cards({
  note,
  username,
  setDeletedNote,
  setFullDeletedNote,
  handlePinCardNote,
  setRecoverNote,
  setEditNote,
  handlePalleteCardNote,
}) {
  const [showColorSelector, setShowColorSelector] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [pinActive, setPinActive] = useState(note.pinned);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedBody, setEditedBody] = useState(note.body);

  const ENDPOINT = `https://codeable-keep-api-production.up.railway.app/api/`;

  const handleDeleteNote = () => {
    const deleteEndpoint = `${ENDPOINT}${username}/notes/${note.id}`;
    const requestOptions = {
      method: note.deleted ? "DELETE" : "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: '{"deleted":true}',
    };

    fetch(deleteEndpoint, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        if (note.deleted) {
          setFullDeletedNote(note.id);
        } else {
          setDeletedNote(note.id);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleRecoverNote = () => {
    const recoverEndpoint = `${ENDPOINT}${username}/notes/${note.id}`;
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: '{"deleted":false}',
    };

    fetch(recoverEndpoint, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setRecoverNote(note.id);
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleSaveClick = () => {
    const updateEndpoint = `${ENDPOINT}${username}/notes/${note.id}`;
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: editedTitle, body: editedBody }),
    };

    fetch(updateEndpoint, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        setEditNote({ title: editedTitle, body: editedBody });
        setIsEditing(false);
      })

      .catch((error) => console.error("Error:", error));
  };

  const handleVectorImageClick = () => {
    setShowColorSelector(!showColorSelector);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handlePinImageClick = () => {
    let pinEndPoint = `${ENDPOINT}${username}/notes/${note.id}`;
    let pinBody = { pinned: !pinActive };
    let pinOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pinBody),
    };

    fetch(pinEndPoint, pinOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      })
      .then((response) => {
        console.log(response);
        handlePinCardNote(pinActive);
      })
      .catch((err) => console.log(err));

    if (pinActive) {
      setSelectedColor("#ff0000");
      setSelectedColor(null);
    }
    setPinActive(!pinActive);
  };

  return (
    <div className={styles.cardBox}>
      <div className={styles.cardItems} style={{ backgroundColor: note.color }}>
        <div key={note.id} className={styles.cardUnit}>
          <div className={styles.cardText}>
            <div className={styles.topCard}>
              {isEditing ? (
                <input
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
              ) : (
                <h3>{note.title}</h3>
              )}

              <svg
                className={note.deleted ? styles.hidden : styles.cardIcon}
                width="14"
                height="18"
                viewBox="0 0 14 18"
                xmlns="http://www.w3.org/2000/svg"
                fill={pinActive ? "#999B9E" : "transparent"}
                onClick={handlePinImageClick}
              >
                <path
                  d="M9.98153 7.60999L10.0253 8.03343L10.4113 8.2129C11.9622 8.93398 13 10.1426 13 11.5312C13 11.583 12.9581 11.625 12.9063 11.625H8.12504H7.37504V12.375V15.9208L7.00002 16.6708L6.625 15.9208V12.375V11.625H5.875H1.09375C1.04197 11.625 1 11.583 1 11.5312C1 10.1556 2.02298 8.94085 3.58865 8.2129L3.97467 8.03343L4.01847 7.60999L4.44861 3.45217L4.53418 2.62499H3.70259H2.21875C2.16697 2.62499 2.125 2.58302 2.125 2.53124V0.843742C2.125 0.79196 2.16697 0.749992 2.21875 0.749992H11.7812C11.833 0.749992 11.875 0.79196 11.875 0.843742V2.53124C11.875 2.58302 11.833 2.62499 11.7812 2.62499H10.2974H9.46582L9.55139 3.45217L9.98153 7.60999Z"
                  stroke="#999B9E"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            {isEditing ? (
              <textarea
                value={editedBody}
                onChange={(e) => setEditedBody(e.target.value)}
              />
            ) : (
              <p>{note.body}</p>
            )}
          </div>
          <div className={styles.cardGroup}>
            <img
              className={styles.cardIcon}
              src={vector}
              alt={vector}
              onClick={handleVectorImageClick}
            />
            {showColorSelector && (
              <ColorSelector
                handleColorSelect={handleColorSelect}
                handlePalleteCardNote={handlePalleteCardNote}
                username={username}
                note={note}
              />
            )}
            <img
              className={styles.cardIcon}
              src={group}
              alt={group}
              onClick={handleDeleteNote}
            />
            <img
              className={note.deleted ? styles.cardIcon : styles.hidden}
              src={recover}
              alt={recover}
              onClick={handleRecoverNote}
            />

            {isEditing ? (
              <img
                className={styles.cardIcon}
                src={confirm}
                alt={confirm}
                onClick={handleSaveClick}
              />
            ) : (
              <img
                className={styles.cardIcon}
                src={edit}
                alt={edit}
                onClick={handleEditClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
