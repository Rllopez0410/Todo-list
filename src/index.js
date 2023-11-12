import "./index.scss";
// import { dateTracker, greeter } from "./date.js";
// import { dailyQuote } from "./quotes";
import { Project } from "./addTask";

const addBtn = document.getElementById("add-proj-btn");
const proContainer = document.getElementById("project-list");

let projects = [
    {name: "job"}
];
projects.forEach(displayProjects);

function displayProjects(proj) {
    let item = document.createElement("div");
    let folder = document.createElement("div");
    let projName = document.createElement("p");
    let dltBtn = document.createElement("div");
    item.classList.add("project-item");
    projName.textContent = proj.name;
    folder.innerHTML = '<span class="material-symbols-outlined">folder</span>';
    dltBtn.innerHTML = '<span id="project-dlt" class="material-symbols-outlined">delete</span>';
    proContainer.appendChild(item);
    item.appendChild(folder)
    item.appendChild(projName);
    item.appendChild(dltBtn);
    dltBtn.addEventListener("click", () => {});
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