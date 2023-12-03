import { projectDom, taskDom } from "./DOM";
import { Projects } from "./class";

let projects = new Projects();
let projArr = projects.allProjects;
let projectId = 0;
let selectedProj = null;

function renderTasks(currentProj) {
    const taskList = taskDom.listDiv;
    if (currentProj.isEmpty()) {
        taskList.textContent = "this project currently has no task. Please add a task below";
    } else {
        taskList.textContent = "";
        currentProj.tasksArray.forEach(task => {
            const newTaskDiv = document.createElement("div");
            const taskName = document.createElement("div");
            const taskInfo = document.createElement("div");
            const taskDetails = document.createElement("div");
            const taskNode = document.createElement("div");
            const taskDueDate = document.createElement("div");
            taskList.classList.add("task-list");
            newTaskDiv.classList.add("task-item");
            taskName.classList.add("task-name");
            taskInfo.classList.add("task-info");
            taskDetails.classList.add("info");
            taskNode.classList.add("task-node");
            taskDueDate.classList.add("due-date");      
            taskName.textContent = task.name;
            taskNode.textContent = selectedProj.name;
            taskDueDate.textContent = task.dueDate;
            newTaskDiv.appendChild(taskInfo);
            taskInfo.append(taskName, taskDetails);
            taskDetails.append(taskNode, taskDueDate);
            taskList.appendChild(newTaskDiv);
        });
    }
}

function selectProject(e) {
    let currentProj = projArr[parseInt(e.currentTarget.id)];
    console.log(e.currentTarget);
    selectedProj = currentProj;
    renderTasks(selectedProj);
    console.log(currentProj.tasksArray);
    console.log(currentProj.name);
}

function renderProjects(project) {
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
    console.log(project.nameOfProject)
}

function resetIds(index) {
    for (let i = index; i < projArr.length; i++) {
        const element = document.getElementById(i+1);
        console.log(i+1)
        element.id = i;
    }
}

//======eventListeners=======

projectDom.listAdd.addEventListener("click", addProjectBtn);
taskDom.listAdd.addEventListener("click", addTaskBtn);
taskDom.taskCal.addEventListener("click", calendarBtn);

function addProjectBtn() {
    let projName = prompt("Name of project?");
    let pushProject = projects.addProjectToList(projName);
    renderProjects(pushProject);
    console.log(projects);
}

function addTaskBtn() {
    let taskName = taskDom.listinput.value;
    let dueDate = calendarBtn();
    selectedProj.addTasksToProject(taskName, dueDate);
    renderTasks(selectedProj);
    console.log(selectedProj);
    console.log(renderTasks(selectedProj));
}

function calendarBtn() {
    let dueDate = prompt("Task due date. E.g 11/11/2024");
    return dueDate;
}

projArr.forEach(renderProjects);