const { DataTypes } = require('sequelize');

function initSubjectModel(sequelize) {
  const Subject = sequelize.define(
    'Subject',
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
    },
    {
      tableName: 'subjects',
      underscored: true,
      timestamps: true,
    }
  );
  return Subject;
}

module.exports = { initSubjectModel };
