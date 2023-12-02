//class for an individual project
export class Project {
    constructor(name) {
        this.name = name;
        this.tasksArr = [];
    }
    get nameOfProject() {
        return this.name;
    }
    get tasksArray() {
        return this.tasksArr;
    }
    isEmpty() {
        return this.tasksArr.length == 0;
    }
    addTasksToProject(name, dueDate) {
        let newTask = new Task(name, dueDate);
        this.tasksArr.push(newTask);
        return newTask
    }
}
//class for a group of projects 
export class Projects {
    constructor() {
        this.listOfProjects = [new Project("Sample Project")];
    }
    addProjectToList(name) {
        let p = new Project(name);
        this.listOfProjects.push(p);
        return p
    }
    get wholeProject() {
        return new Project();
    }
    get allProjects() {
       return this.listOfProjects;
    }
    get numOfProjects() {
        return this.listOfProjects.length;
    }
}

export class Task {
    constructor(name, dueDate) {
        this.name = name;
        this.dueDate = dueDate;
        this.completed = false;
    }
}