// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects() {
    result = await db('projects as p')
    .select('p.project_id', 'p.project_name', 'p.project_description', 'p.project_completed')
    
    project = []

    result.map(row => {
        if(row.project_completed === 0){
            project.push(
                {
                    project_id: row.project_id,
                    project_name: row.project_name,
                    project_description: row.project_description,
                    project_completed: false
                }
            ) 
        }
        else{
            project.push({
                    project_id: row.project_id,
                    project_name: row.project_name,
                    project_description: row.project_description,
                    project_completed: true
            })
        }
    })
    return project
}

async function postProject(entry) {
    await db('projects').insert(entry);
    const answer = await getProjects()
    return answer[answer.length - 1]
    // .then(() => {
    //     getProjects()[-1]
    // })
    
    // const result = await db('projects')
    // .insert(entry)
    // .then(() => {
    //     getProjects()
    //     .then(res => {
    //      return res[-1]   
    //     })
    // })
    // return result
}

module.exports = {getProjects, postProject}