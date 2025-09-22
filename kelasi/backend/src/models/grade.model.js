const { DataTypes } = require('sequelize');

function initGradeModel(sequelize) {
  const Grade = sequelize.define(
    'Grade',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      studentId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      subjectId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      value: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      term: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
    },
    {
      tableName: 'grades',
      underscored: true,
      timestamps: true,
    }
  );
  return Grade;
}

module.exports = { initGradeModel };
