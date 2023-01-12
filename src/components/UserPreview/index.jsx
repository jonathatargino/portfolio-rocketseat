import profilePicture from "../../assets/profile-pic.png"
import styles from "./styles.module.css"

function UserPreview(){
  return (
    <div className={styles.card}>
      <img className={styles.profilePic} src={profilePicture} alt=""/>
      <div className={styles.info}>
        <h1 className={styles.name}>Jonatha de Oliveira Targino</h1>
        <span className={styles.profession}>Frontend Developer</span>
      </div>
    </div>
  )
}

export default UserPreview