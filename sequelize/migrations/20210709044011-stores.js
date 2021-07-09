'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('stores','ownerId',{
        type:'INTEGER',
        field:'owner_id',
        allowNull:false,
        references:{
          model:'users',
          key:'id'
        }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('stores','ownerId')
  }
};
