
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schemas').del()
    .then(function () {
      // Inserts seed entries
      return knex('schemas').insert([
        {name: 'PetStore', url: "https://rebilly.github.io/ReDoc/swagger.yaml"},
        {name: 'Instagram', url: "https://api.apis.guru/v2/specs/instagram.com/1.0.0/swagger.yaml"},
        {name: 'Google Calendar', url: "https://api.apis.guru/v2/specs/googleapis.com/calendar/v3/swagger.yaml"},
        {name: 'Zoom.us', url: "https://api.apis.guru/v2/specs/zoom.us/2.0.0/swagger.yaml"},
        {name: 'GraphHopper', url: "https://api.apis.guru/v2/specs/graphhopper.com/1.0/swagger.yaml"},
        {name: 'Authentiq', url: "https://api.apis.guru/v2/specs/6-dot-authentiqio.appspot.com/6/swagger.yaml"},
        {name: 'Adobe Experience Manager', url: "https://api.apis.guru/v2/specs/adobe.com/aem/2.3.0-pre/swagger.yaml"},
        {name: 'AWS Migration Hub', url: "https://api.apis.guru/v2/specs/amazonaws.com/AWSMigrationHub/2017-05-31/swagger.yaml"},
        {name: 'Forge', url: "https://api.apis.guru/v2/specs/1forge.com/0.0.1/swagger.yaml"},
        {name: 'Adafruit IO', url: "https://api.apis.guru/v2/specs/adafruit.com/2.0.0/swagger.yaml"},
        {name: 'airportsapi', url: "https://api.apis.guru/v2/specs/airport-web.appspot.com/v1/swagger.yaml"},
        {name: 'Afterbanks', url: "https://api.apis.guru/v2/specs/afterbanks.com/3.0.0/swagger.yaml"},
        {name: 'AGCO', url: "https://api.apis.guru/v2/specs/agco-ats.com/v1/swagger.yaml"},
        {name: 'Amadeus Travel Innovation Sandbox', url: "https://api.apis.guru/v2/specs/amadeus.com/1.2/swagger.yaml"},
        {name: 'Document frequency', url: "https://api.apis.guru/v2/specs/apitore.com/documentFrequencyApis/0.0.1/swagger.yaml"},
      ]);
    });
};
