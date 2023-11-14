export class Project {
    constructor(name) {
        this.name = name;
    }
}

export class Tasks {
    constructor(name, dueDate) {
        this.name = name;
        this.dueDate = dueDate;
        this.completed = false;
    }
}