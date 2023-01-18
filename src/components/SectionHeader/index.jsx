import styles from "./styles.module.css"

function SectionHeader({title, rightButtonName}){
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      {
      rightButtonName? 
      <a 
        className={styles.rightButton} 
        href="https://github.com/jonathatargino?tab=repositories">{rightButtonName}
      </a> : ""
      }
    </div>
  )
}

export default SectionHeader;