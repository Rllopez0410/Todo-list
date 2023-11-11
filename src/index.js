import "./index.scss";
// import { dateTracker, greeter } from "./date.js";
// import { dailyQuote } from "./quotes";
import { Project } from "./addTask";

const addBtn = document.getElementById("add-proj-btn");
const proContainer = document.getElementById("project-list");

let projects = [
    {name: "job", complete: "false"}
];
projects.forEach(displayProjects);

function displayProjects(proj) {
    let item = document.createElement("div");
    item.classList.add("project-item");
    proContainer.appendChild(item);
    item.textContent = proj.name;
}

addBtn.addEventListener("click", addProjects);
function addProjects() {
    let name = prompt("project name?");
    let newProject = new Project(name);
    projects.push(newProject);
    displayProjects(newProject);
    console.log(projects);
    // displayProjects(newProject);
}

// greeter();
// dailyQuote();
// dateTracker();