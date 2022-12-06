// move code from projectController 
let client = require('../dbConnect')
let projectCollection; 


setTimeout(() => {
    projectCollection = client.db().collection("Project Collections");
}, 2000) 

const insertProjects = (project,callback) => {
    projectCollection.insert(project,callback);
}

const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

module.exports = {
    insertProjects, getProjects
}