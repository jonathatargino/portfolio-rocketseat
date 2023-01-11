import styles from "./styles.module.css"

function Technology({title}){

  return(
    <span className={styles.technology}>
      {title.toUpperCase()}
    </span>
  )
}

export default Technology;