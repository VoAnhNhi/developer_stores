'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users',{
      id:{
        type:'INTEGER',
        field:'id',
        autoIncrement:true,
        primaryKey:true
      },
      username:{
        type:'VARCHAR(50)',
        field:'username',
        allowNull:false
      },
      password:{
        type:'VARCHAR(255)',
        field:'password',
        allowNull:false
      },
      created_at:{
        type:'TIMESTAMPTZ',
        field:'created_at'
      },
      updated_at:{
        type:'TIMESTAMPTZ',
        field:'updated_at'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};
