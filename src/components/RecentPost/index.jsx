import profilePic from "../../assets/profile-pic.png"
import styles from "./styles.module.css"

function RecentPost({href, title, postedTime, subtitle, hashtags}){
  return (
    <a className={styles.card} href={href}>
      <img className={styles.profilePic} src={profilePic}/>
      <div className={styles.postInfo}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.postedTime}>{postedTime} semana(s) atrás</span>
        </div>
        <div className={styles.footer}>
          <span className={styles.subtitle}>{subtitle}</span>
          <span className={styles.hashtags}>
            {hashtags.map(hashtag => `#${hashtag} `)}
          </span>
        </div>
      </div>

    </a>
  )
}

export default RecentPost