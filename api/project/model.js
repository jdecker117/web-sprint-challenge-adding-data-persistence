// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects() {
    result = await db('projects as p')
    .select('p.project_name', 'p.project_description', 'p.project_completed')
    
    project = []

    result.map(row => {
        if(row.project_completed === 0){
            project.push(
                {
                    project_name: row.project_name,
                    project_description: row.project_description,
                    project_completed: false
                }
            ) 
        }
        else{
            project.push({
                project_name: row.project_name,
                    project_description: row.project_description,
                    project_completed: true
            })
        }
    })
    return project
}

function postProject() {}

module.exports = {getProjects, postProject}