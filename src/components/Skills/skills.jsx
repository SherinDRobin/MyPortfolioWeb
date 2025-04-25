import React from "react";
import styles from "./skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

const SkillsPage = () => {
  return (
    <section className={styles.container} id="skills">
      <h1 className={styles.title}>My Expertise</h1>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div className={styles.skillCard} key={index}>
              <div className={styles.skillIconWrapper}>
                <img
                  src={getImageUrl(skill.imageSrc)}
                  alt={skill.title}
                  className={styles.skillIcon}
                />
                <div className={styles.glow}></div>
              </div>
              <h3 className={styles.skillTitle}>{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
