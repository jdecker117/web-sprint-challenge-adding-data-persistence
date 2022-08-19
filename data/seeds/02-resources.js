exports.seed = function(knex, Promise) {
  return knex('resources').insert([   
    { resource_name: 'Computer', resource_description: "Give credit to Alan Turing for this machine!"},
    { resource_name: 'Strong Mind', resource_description: "Hard to come by."},
    { resource_name: 'Pen & Paper', resource_description: "Old School."},
  ]);
};
