import { useState } from "react";
import styles from "./colorSelector.module.css";

export default function ColorSelector({
  handleColorSelect,
  handlePalleteCardNote,
  username,
  note,
}) {
  const ENDPOINT = `https://codeable-keep-api-production.up.railway.app/api/`;
  const colorOptions = [
    "white",
    "#F28B82",
    "#FBBC04",
    "#FFF475",
    "#CCFF90",
    "#A7FFEB",
    "#CBF0F8",
    "#AECBFA",
    "#D7AEFB",
    "#FDCFE8",
  ];

  const handleColorClick = (e) => {
    let selectColor = e.target.id;
    console.log(selectColor);

    handleColorSelect(selectColor);

    if (note) {
      let endPoint = `${ENDPOINT}${username}/notes/${note.id}`;
      let body = { color: selectColor };
      let options = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
      console.log(endPoint);
      fetch(endPoint, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(selectColor);
          console.log(data);

          handlePalleteCardNote(selectColor);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className={styles.colorMain}>
      <div className={styles.colorBox}>
        {colorOptions.map((color, index) => (
          <div
            key={index}
            className={styles.colorOption}
            id={color}
            onClick={handleColorClick}
            style={{ background: color }}
          ></div>
        ))}
      </div>
    </div>
  );
}
