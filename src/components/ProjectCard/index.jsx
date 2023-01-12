import styles from "./styles.module.css"

import folder from "../../assets/folder.svg"
import star from "../../assets/star.svg"
import gitBranch from "../../assets/git-branch.svg"

function ProjectCard({title, subtitle, stars, branchs, technology}){
  return (
    <div className={styles.card}>
      <div className={styles.projectTitleDiv}>
        <img className={styles.folderIcon} src={folder}/>
        <h2>{title}</h2>
      </div>
      <div className={styles.subtitle}>
        <h3>{subtitle}</h3>
      </div>
      <div className={styles.footerInfo}>
        <div className={styles.statsDiv}>
          <div className={styles.stat}>
            <img className={styles.statsIcon} src={star}/>
            <span>{stars}</span>
          </div>
          <div className={styles.stat}>
            <img className={styles.statsIcon} src={gitBranch}/>
            <span>{branchs}</span>
        </div>
        </div>
        <div className={styles.technology}>
          <div className={styles.javascriptCircle}></div>
          <span>{technology}</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;