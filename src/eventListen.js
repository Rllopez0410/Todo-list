import { projectDom } from "./DOM";
import { createProject } from "./render";

projectDom.listAdd.addEventListener("click", addProject);

export function addProject() {
    console.log("click")
    prompt("Project name?");
}
