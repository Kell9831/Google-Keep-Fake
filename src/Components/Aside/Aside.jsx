
import React, { useState } from 'react';

import styles from "./Aside.module.css"
export default function Aside({setDisplayedContent} ){
    const [selectedButton, setSelectedButton] = useState('notes'); // Inicialmente selecciona 'notes'

    const handleButtonClick = (buttonId) => {
      setSelectedButton(buttonId);
      setDisplayedContent(buttonId);
    };
    return (
    <aside className={styles.sectionAside}>
       <div className={styles.menuAside}>

        <div className={styles["menuAside-select"]}>
            <div className={styles['menuAside-container"']}>
            <button className={`${styles['menuAsideItem-container']} ${selectedButton === 'notes' ? styles['menuAside__selected'] : ''}`}
            onClick={() => handleButtonClick('notes')}>
            <svg className={styles["menuAside-select__Vector"]} xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
            <path d="M4.55674 16C2.524 15.4495 1.50762 14.1823 1.50762 12.1982V10.5712C1.50762 9.42121 1.00508 8.84614 0 8.84614V7.15379C0.982498 7.15379 1.48503 6.61147 1.50762 5.52681V3.79355C1.50762 2.78521 1.76171 1.97036 2.2699 1.349C2.77809 0.72764 3.54037 0.27798 4.55674 0L5.03105 1.3163C4.60192 1.46891 4.27724 1.73599 4.05703 2.11752C3.83681 2.49361 3.72106 3.01686 3.70976 3.68726V5.40418C3.70976 6.636 3.2044 7.4999 2.19367 7.99589C3.2044 8.49731 3.70976 9.36669 3.70976 10.604V12.3373C3.738 13.6127 4.17842 14.392 5.03105 14.6755L4.55674 16ZM14.969 14.6755C15.8272 14.3811 16.2676 13.5908 16.2902 12.3045V10.5712C16.2902 9.33944 16.8069 8.48373 17.8402 8.00407C16.8069 7.52442 16.2902 6.65507 16.2902 5.396V3.68726C16.2676 2.4173 15.8272 1.62698 14.969 1.3163L15.4433 0C16.454 0.272529 17.2134 0.719463 17.7216 1.34082C18.2298 1.95673 18.4867 2.76613 18.4923 3.76902V5.52681C18.515 6.61147 19.0174 7.15379 20 7.15379V8.84614C18.9949 8.84614 18.4923 9.41572 18.4923 10.5549V12.3291C18.4472 14.2368 17.4308 15.4604 15.4433 16L14.969 14.6755Z" fill="#18181B"/>
            </svg>
            <h2 className={styles["menuItem-title"]}>Notes</h2>
            </button>
            </div>
        </div>
        <div>
            <div className={styles["menuAside-select"]}>
                <div className={styles["menuAside-container"]}>
                <button className={`${styles['menuAsideItem-container']} ${selectedButton === 'trash' ? styles['menuAside__selected'] : ''}`}
            onClick={() => handleButtonClick('trash')}>
                <svg className={styles["menuAside-select__Vector"]} xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M15.625 4V3H9.37502V4H4.16669V6H5.20835V19C5.20835 20.1 6.14585 21 7.29169 21H17.7084C18.8542 21 19.7917 20.1 19.7917 19V6H20.8334V4H15.625ZM17.7084 19H7.29169V6H17.7084V19Z" fill="#18181B"/>
                <path d="M9.375 8H11.4583V17H9.375V8ZM13.5417 8H15.625V17H13.5417V8Z" fill="#18181B"/>
                </svg>
                
            <h2 className={styles["menuItem-title"]}>Trash</h2>
            </button>
            </div>
        </div>
        </div>
    </div> 
    </aside>
    )
}