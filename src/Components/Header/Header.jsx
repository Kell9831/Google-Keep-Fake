import styles from "./Header.module.css";
export default function Header({ username, setIsLoggedIn }) {
  const handleExit = () => {
    localStorage.removeItem("username");
    setIsLoggedIn(false);
  };

  return (
    <section className={styles.header}>
      <h2 className={styles.headerContent}>
        Welcome to Google Keep Fake{" "}
        <span className={styles.userName}>{username}</span>
      </h2>
      <button className={styles.buttonExit} onClick={handleExit}>
        Exit
      </button>
    </section>
  );
}
