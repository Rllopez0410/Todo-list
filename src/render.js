import { projectDom, taskDom } from "./DOM";
import { Projects } from "./class";

let projects = new Projects();
let projArr = projects.allProjects;
let projectId = 0;
let selectedProj = null;
let completedTask = false;

function renderTasks(currentProj) {
    const taskList = taskDom.listDiv;
    if (currentProj.isEmpty()) {
        taskList.textContent = "this project currently has no task. Please add a task below";
    } else {
        taskList.textContent = "";
        currentProj.tasksArray.forEach(task => {
            const newTaskDiv = document.createElement("div");
            const checkMark = document.createElement("div");
            const taskInfo = document.createElement("div");
            const editTask = document.createElement("div");
            const dltTask = document.createElement("div");
            const taskDetails = document.createElement("div");
            const taskNode = document.createElement("div");
            const taskDueDate = document.createElement("div");
            const taskName = document.createElement("div");
            newTaskDiv.classList.add("task-item");
            checkMark.classList.add("check");
            taskInfo.classList.add("task-info");
            editTask.classList.add("edit-task");
            dltTask.classList.add("task-dlt");
            taskDetails.classList.add("info");
            taskNode.classList.add("task-node");
            taskDueDate.classList.add("due-date");      
            taskName.classList.add("task-name");
            checkMark.innerHTML = '<span id="check-mark" class="material-symbols-outlined">check_circle</span>';
            editTask.innerHTML = '<span id="edit-btn" class="material-symbols-outlined">edit_note</span>';
            dltTask.innerHTML = '<span id="task-dlt-btn" class="material-symbols-outlined">close</span>';
            taskNode.textContent = selectedProj.name;
            taskDueDate.textContent = task.dueDate;
            taskName.textContent = task.name;
            newTaskDiv.append(checkMark, taskInfo, editTask, dltTask);
            taskInfo.append(taskDetails, taskName);
            taskDetails.append(taskNode, taskDueDate);
            taskList.appendChild(newTaskDiv);
            Array.from(dltTask);
            Array.from(checkMark);
            if (task.completed == true) {
                checkMark.style.color = "green";
            }
            dltTask.addEventListener("click", (index) => {
                if (currentProj.tasksArray[index] === dltTask[index]) {
                    currentProj.tasksArray.splice(currentProj.tasksArray.indexOf(task), 1);
                    newTaskDiv.remove();
                }
            });
            checkMark.addEventListener("click", (index) => {
                if (currentProj.tasksArray[index] === checkMark[index] && !completedTask) {
                    checkMark.style.color = "green";
                    currentProj.tasksArray.slice(currentProj.tasksArray.indexOf(task.completed = true));
                    completedTask = true;
                } else if (currentProj.tasksArray[index] === checkMark[index] && completedTask) {
                    checkMark.style.color = "grey";
                    currentProj.tasksArray.slice(currentProj.tasksArray.indexOf(task.completed = false));
                    completedTask = false;
                }
            });
        });
    }
}

function selectProject(e) {
    let currentProj = projArr[parseInt(e.currentTarget.id)];
    selectedProj = currentProj;
    console.log(e.currentTarget);
    renderTasks(selectedProj);
    console.log(currentProj.tasksArray);
    console.log(currentProj.name);
}

function renderProjects(project) {
    const newProjectDiv = document.createElement("div");
    const folderIcon = document.createElement("div");
    const itemDiv = document.createElement("div"); 
    const dltBtn = document.createElement("div");
    itemDiv.textContent = project.name;
    folderIcon.innerHTML = '<span class="material-symbols-outlined">folder</span>';
    dltBtn.innerHTML = '<span class="material-symbols-outlined">delete</span>';
    newProjectDiv.classList.add("project-item");
    newProjectDiv.id = projectId;
    projectDom.listDiv.append(newProjectDiv);
    newProjectDiv.append(folderIcon, itemDiv, dltBtn);
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
        console.log(i+1);
        element.id = i;
    }
}

projectDom.listAdd.addEventListener("click", addProjectBtn);
taskDom.listAdd.addEventListener("click", addTaskBtn);

function addProjectBtn() {
    let projName = prompt("Name of project?");
    let pushProject = projects.addProjectToList(projName);
    renderProjects(pushProject);
    console.log(projects);
}

function addTaskBtn() {
    let taskName = taskDom.listinput.value;
    let taskDate = taskDom.taskCal.value;
    selectedProj.addTasksToProject(taskName, taskDate);
    renderTasks(selectedProj);
    console.log(selectedProj);
    console.log(renderTasks(selectedProj));
}

projArr.forEach(renderProjects);