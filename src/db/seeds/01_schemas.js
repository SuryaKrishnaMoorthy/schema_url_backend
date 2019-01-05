
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schemas').del()
    .then(function () {
      // Inserts seed entries
      return knex('schemas').insert([
        {id: 1, name: 'PetStore', url: "https://rebilly.github.io/ReDoc/swagger.yaml"},
        {id: 2, name: 'Instagram', url: "https://api.apis.guru/v2/specs/instagram.com/1.0.0/swagger.yaml"},
        {id: 3, name: 'Google Calendar', url: "https://api.apis.guru/v2/specs/googleapis.com/calendar/v3/swagger.yaml"}
      ]);
    });
};
