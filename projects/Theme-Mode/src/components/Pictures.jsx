import React from "react";
import styles from "./Pictures.module.css";
import pattern from '../Images/pattern.png'
import img4 from '../Images/img4.png'

function Pictures()
{
  return (
  <>
       <div className={styles['img-box']}>
        <img src={pattern} className={styles['back-img']} />
        <img src={img4} className={styles['main-img']} />
      </div>
  </>)
}

export default Pictures;