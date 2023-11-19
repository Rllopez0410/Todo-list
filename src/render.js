import { projectDom } from "./DOM";
import { Project, Projects } from "./class";

export let projects = new Projects();
let projArr = projects.allProjects;

projArr.forEach(renderProjects);
export function renderProjects(project) {
    const newProjectDiv = document.createElement("div");
    newProjectDiv.textContent = project.nameOfProject; 
    newProjectDiv.classList.add("project-item");
    projectDom.listDiv.append(newProjectDiv);
    console.log(project.nameOfProject); 
}
