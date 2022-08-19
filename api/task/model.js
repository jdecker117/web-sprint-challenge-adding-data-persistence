// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks() {
    result = await db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('task_id', 'task_notes', 'task_description', 'task_completed', 'p.project_name', 'p.project_description')
    
    task = []

    result.map(row => {
        if(row.task_completed === 0){
            task.push(
                {
                    task_id: row.task_id,
                    task_notes: row.task_notes,
                    task_description: row.task_description,
                    task_completed: false,
                    project_name: row.project_name,
                    project_description: row.project_description
                }
            ) 
        }
        else{
            task.push({
                    task_id: row.task_id,
                    task_notes: row.task_notes,
                    task_description: row.task_description,
                    task_completed: true,
                    project_name: row.project_name,
                    project_description: row.project_description
            })
        }
    })
    return task
}

async function postTask(entry) {
    await db('tasks').insert(entry);
    const answer = await getTasks()
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

module.exports = {getTasks, postTask}