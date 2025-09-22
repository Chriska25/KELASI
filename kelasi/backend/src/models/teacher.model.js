const { DataTypes } = require('sequelize');

function initTeacherModel(sequelize) {
  const Teacher = sequelize.define(
    'Teacher',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      subjectSpecialty: {
        type: DataTypes.STRING(120),
        allowNull: true,
      },
    },
    {
      tableName: 'teachers',
      underscored: true,
      timestamps: true,
    }
  );
  return Teacher;
}

module.exports = { initTeacherModel };
