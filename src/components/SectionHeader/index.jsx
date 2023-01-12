import styles from "./styles.module.css"

function SectionHeader({title, rightButtonName}){
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      {
      rightButtonName? <span className={styles.rightButton}>{rightButtonName}</span> : ""
      }
    </div>
  )
}

export default SectionHeader;