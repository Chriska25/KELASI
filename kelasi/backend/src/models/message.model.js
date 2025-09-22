const { DataTypes } = require('sequelize');

function initMessageModel(sequelize) {
  const Message = sequelize.define(
    'Message',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      fromUserId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      toUserId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      readAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: 'messages',
      underscored: true,
      timestamps: true,
    }
  );
  return Message;
}

module.exports = { initMessageModel };
