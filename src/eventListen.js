import { projectDom } from "./DOM";
import { Project, Projects } from "./class";
import { renderProjects, projects } from "./render";

projectDom.listAdd.addEventListener("click", addProjectBtn);

function addProjectBtn() {
    let projName = prompt("name");
    let pushProject = projects.addProjectToList(projName);
    renderProjects(pushProject);
    console.log(projects);
}

function addTaskBtn() {
    
}





