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
        <li>
          <a className={styles.info} href="#">
            <img src={mapPin} className={styles.svg}/>
            <span>Brasil</span>
          </a>
        </li>
        <li>
          <a className={styles.info} href="#">
            <img src={briefcase} className={styles.svg}/>
            <span>Desempregado</span>
          </a>
        </li>
        <li>
          <a className={styles.info} href="https://github.com/jonathatargino">
            <img src={github} className={styles.svg}/>
            <span>jonathatargino</span>
          </a>
        </li>
        <li>
          <a className={styles.info} href="https://linkedin/in/jonathatargino">
            <img src={linkedin} className={styles.svg}/>
            <span>jonathatargino</span>
          </a>
        </li>
        
        <li>
          <a className={styles.info} href="#">
            <img src={twitter} className={styles.svg}/>
            <span>jonathatargino</span>
          </a>
        </li>
        <li>
          <a className={styles.info} href="#">
            <img src={globe} className={styles.svg}/>
            <span>N/A</span>
          </a>
        </li>
  
        <li>
          <a className={styles.info} href="#">
            <img src={mail} className={styles.svg}/>
            <span>j.oliveiratargino@hotmail.com</span>
          </a>
        </li>
   
     </ul>
    </div>
  )
}

export default UserInfo