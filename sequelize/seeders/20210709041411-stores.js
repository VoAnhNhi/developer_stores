'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('stores',[
      {
        id:1,
        name:'Store A',
        description:'This is a store A',
        email:'storeA@developerStores.com',
        address:'Ho Chi Minh',
        phone:'028-123456',
        ownerId:1
      }
    ],
    {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('stores',null,{})
  }
};
