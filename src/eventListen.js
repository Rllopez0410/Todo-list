import { projectDom } from "./DOM";
import { Projects } from "./class";

projectDom.listAdd.addEventListener("click", addProjectBtn);
let projects = new Projects();
projects.allProjects.forEach(printProjects);
function printProjects(el) {
    console.log(el);
}

function addProjectBtn() {
    let projName = prompt("name");
    projects.addProjectToList(projName);
    printProjects(projects);
    console.log(projects.allProjects);
}





