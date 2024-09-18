import React from "react";
import styles from "./Section.module.css";

function Section() {
  return (
    <>
      <div className={styles.info}>
        <h1>
          I'm <span>Neymar</span> Junior
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aperiam
          ipsam br aperiam
          <br />
          libero inventore similique est asperiores natus optio qui. Voluptates
          dolore quis <br />
          maxime itaque debitis voluptatibus enim blanditiis dicta labore!
        </p>
        <a href="">Watch My Skills</a>
      </div>
    </>
  );
}

export default Section;
