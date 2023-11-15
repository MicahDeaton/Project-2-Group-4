const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const User = require('./User');
const Boards = require('./Boards');

class Users_Boards extends Model {}

Users_Boards.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id',
      },
    },
    board_board_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Boards,
        key: 'board_id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'users_boards',
  }
);

module.exports = Users_Boards;
