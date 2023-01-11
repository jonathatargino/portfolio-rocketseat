import Technology from "../Technology";
import styles from "./styles.module.css"

function UserTechnologies(){
  return (
    <div className={styles.card}>
      <h1 className={styles.cardTitle}>Tecnologias</h1>
      <div className={styles.technologiesList}>
        <Technology title="Javascript"/>
        <Technology title="React.js"/>
        <Technology title="HTML"/>
        <Technology title="CSS"/>
        <Technology title="Git"/>
        <Technology title="GitHub"/>
      </div>
    </div>
  )
}

export default UserTechnologies;