const { DataTypes } = require('sequelize');

function initStudentModel(sequelize) {
  const Student = sequelize.define(
    'Student',
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
      classId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      enrollmentDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
    },
    {
      tableName: 'students',
      underscored: true,
      timestamps: true,
    }
  );
  return Student;
}

module.exports = { initStudentModel };
