const { DataTypes } = require('sequelize');

function initScheduleModel(sequelize) {
  const Schedule = sequelize.define(
    'Schedule',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      classId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      subjectId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      weekday: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      startTime: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      endTime: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    {
      tableName: 'schedules',
      underscored: true,
      timestamps: true,
    }
  );
  return Schedule;
}

module.exports = { initScheduleModel };
