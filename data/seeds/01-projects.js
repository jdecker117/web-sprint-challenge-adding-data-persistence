exports.seed = function(knex, Promise) {
  return knex('projects').insert([   
    { project_name: 'MVP Tasks', project_description: "Required to pass the challenge!", project_completed: 0 },
    { project_name: 'Stretch Goals', project_description: "Optional tasks to test your skillz!", project_completed: 0 }
  ]);
};
