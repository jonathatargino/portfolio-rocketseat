import ProjectCard from "../ProjectCard";
import RecentPost from "../RecentPost";
import SectionHeader from "../SectionHeader";

import styles from "./styles.module.css"

function UserProjects(){
  return (
    <div className={styles.userProjects}>
      <SectionHeader title="My Projects" rightButtonName="Veja todos"/>
      <div className={styles.projects}>
        <ProjectCard
          href="https://github.com/jonathatargino/web"
          title="web" 
          subtitle="front-end em React.JS referente ao projeto NLW Duos"
          stars={0}
          branchs={1}
          technology="Javascript"
        />
        <ProjectCard
          href="https://github.com/jonathatargino/conversor-romano"
          title="conversor-romano" 
          subtitle="conversor árabe-romano e romano-árabe"
          stars={0}
          branchs={0}
          technology="Javascript"
        />
      </div>
      <SectionHeader title="Recent Posts"/>
      <RecentPost
        href="https://github.com/jonathatargino/jonathatargino"
        title="jonathatargino"
        subtitle="apresentação"
        postedTime={1}
        hashtags={["react", "javascript", "css", "html"]}
      />
      <RecentPost
        href="https://github.com/jonathatargino/todo-app"
        title="todo-app"
        subtitle="Uma aplicação para organizar sua lista de afazeres"
        postedTime={2}
        hashtags={["react","css", "html"]}
      />
    </div>
  )
}

export default UserProjects;