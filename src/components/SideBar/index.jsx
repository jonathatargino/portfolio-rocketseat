import styles from "./styles.module.css"


import UserInfo from "../UserInfo";
import UserPreview from "../UserPreview";
import UserTechnologies from "../UserTechnologies";


function SideBar(){
  return(
    <div className={styles.sideBar}>
      <UserPreview/>
      <UserInfo/>
      <UserTechnologies/>
    </div>
  )
}

export default SideBar