'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('stores',{
     id:{
       type:'INTEGER',
       field:'id',
       primaryKey:true,
       autoIncrement:true
     },
     name:{
       type:'VARCHAR(50)',
       field:'name',
       allowNull:false
     },
     description:{
       type:'VARCHAR(255)',
       field:'description'
     },
     email:{
       type:'VARCHAR(50)',
       field:'email',
       allowNull:false
     },
     address:{
       type:'VARCHAR(255)',
       field:'address'
     },
     phone:{
      type:'VARCHAR(50)',
      field:'phone'
    },
    createdAt:{
      type:'TIMESTAMPTZ',
      field:'created_at'
    },
    updatedAt:{
      type:'TIMESTAMPTZ',
      field:'updated_at'
    }
   })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('stores')
  }
};
