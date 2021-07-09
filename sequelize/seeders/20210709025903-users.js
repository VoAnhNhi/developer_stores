'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users',[
      {
        id:1,
        username:'admin',
        password:'admin@developerStores'
      },
      {
        id:2,
        username:'employee',
        password:'employee@developerStores'
      }
    ],
    {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users',null,{})
  }
};
