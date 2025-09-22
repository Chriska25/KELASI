const { DataTypes } = require('sequelize');

function initClassModel(sequelize) {
  const Class = sequelize.define(
    'Class',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(120),
        allowNull: false,
      },
      level: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      teacherId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
    },
    {
      tableName: 'classes',
      underscored: true,
      timestamps: true,
    }
  );
  return Class;
}

module.exports = { initClassModel };
