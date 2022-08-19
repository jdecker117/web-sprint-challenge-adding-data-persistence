exports.seed = function(knex, Promise) {
  return knex('tasks').insert([   
    { task_description: 'Configure package.json', task_notes: "Need the right tools for the job!", task_completed: 0, project_id: 1},
    { task_description: 'Build Server', task_notes: "Express is handy.", task_completed: 0, project_id: 1},
    { task_description: 'Set up database and build an API', task_notes: "Movin on to the next sprint!", task_completed: 0, project_id: 1},
    { task_description: 'Host website using Heroku', task_completed: 0, project_id: 2},
    { task_description: 'Show off on GitHub', task_completed: 0, project_id: 2},
  ]);
};
