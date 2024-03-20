import ColorSelector from "../../components/colorSelector";
import styles from "./Pallete.module.css"
import pallete from "../../assets/icons/Vector.svg";

export default function Pallete({showColorSelector, handleVectorImageClick, handleColorSelect}) {
    
  return (
    <div className={styles.cardGroup}>
      <img
        className={styles.cardIcon}
        src={pallete}
        alt={pallete}
        onClick={handleVectorImageClick}
      />
      {showColorSelector && <ColorSelector handleColorSelect={handleColorSelect} />}
      
    </div>
  );
}
