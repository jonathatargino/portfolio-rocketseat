import mapPin from "../../assets/map-pin.svg"
import briefcase from "../../assets/briefcase.svg"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import twitter from "../../assets/twitter.svg"
import globe from "../../assets/globe.svg"
import mail from "../../assets/mail.svg"

import styles from "./styles.module.css"

function UserInfo(){
  return(
    <div className={styles.card}>
      <ul className={styles.infoList}>
        <li className={styles.info}>
          <img src={mapPin} className={styles.svg}/>
          Brasil
        </li>
        <li className={styles.info}>
        <img src={briefcase} className={styles.svg}/>
          Desempregado
        </li>
        <li className={styles.info}>
          <img src={github} className={styles.svg}/>
          jonathatargino  
        </li>
 
        <li className={styles.info}>
          <img src={linkedin} className={styles.svg}/>
          jonathatargino  
        </li>
        
        <li className={styles.info}>
          <img src={twitter} className={styles.svg}/>
          jonathatargino
        </li>
        <li className={styles.info}>
          <img src={globe} className={styles.svg}/>
          N/A
        </li>
  
      <li className={styles.info}>
          <img src={mail} className={styles.svg}/>
          j.oliveiratargino@hotmail.com
      </li>
   
     </ul>
    </div>
  )
}

export default UserInfo