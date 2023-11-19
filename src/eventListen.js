import { projectDom } from "./DOM";
import { Project } from "./class";
import { renderProjects, projects } from "./render";

projectDom.listAdd.addEventListener("click", addProjectBtn);

function addProjectBtn() {
    let projName = prompt("name");
    projects.addProjectToList(projName);
    renderProjects(new Project(projName));
    console.log(projects);
}





