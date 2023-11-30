import { projectDom } from "./DOM";
import { Projects } from "./class";

export let projects = new Projects();
let projArr = projects.allProjects;
let projectId = 0;
// let selectedProj = null;
//create function to add task and checks which is current porject and if it's null but if not null create a new task instance and add it to selected proj and call 

// function renderTasks(currentProj) {
//     const taskList = document.getElementById("task-list");
//     if (currentProj.isEmpty) {
//         taskList.textContent = "this project currently has no task. Please add a task below";
//     } else {
//        taskList.textContent = "";
//     }
// }

//create a function that will showcase the array of tasks depending what project is being selected.

function selectProject(e) {
    let currentProj = projArr[e.currentTarget.id];
    console.log(e.currentTarget);
    // renderTasks(currentProj);
    console.log(currentProj.name);
}

projArr.forEach(renderProjects);
export function renderProjects(project) {
    const newProjectDiv = document.createElement("div");
    const itemDiv = document.createElement("div"); 
    const dltBtn = document.createElement("div");
    itemDiv.textContent = project.name;
    dltBtn.innerHTML = '<span class="material-symbols-outlined">delete</span>';
    newProjectDiv.classList.add("project-item");
    newProjectDiv.id = projectId;
    projectDom.listDiv.append(newProjectDiv);
    newProjectDiv.append(itemDiv, dltBtn);
    projectDom.listCounter.textContent = projects.numOfProjects;
    Array.from(dltBtn);
    dltBtn.addEventListener("click", (index) => {
        if(projArr[index] === dltBtn[index]) {
            projArr.splice(projArr.indexOf(project), 1);
            newProjectDiv.remove();
            resetIds(Number(newProjectDiv.id));
            projectDom.listCounter.textContent = projects.numOfProjects;
            projectId -= 1;
        }
    });
    newProjectDiv.addEventListener("click", selectProject);
    projectId++;
}

function resetIds(index) {
    for (let i = index; i < projArr.length; i++) {
        const element = document.getElementById(i+1);
        console.log(i+1)
        element.id = i;
    }
}