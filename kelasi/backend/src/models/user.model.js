const { DataTypes } = require('sequelize');

function initUserModel(sequelize) {
  const User = sequelize.define(
    'User',
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
      email: {
        type: DataTypes.STRING(160),
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
      },
      passwordHash: {
        type: DataTypes.STRING(120),
        allowNull: true,
      },
      role: {
        type: DataTypes.ENUM('ADMIN', 'TEACHER', 'STUDENT', 'PARENT'),
        allowNull: false,
        defaultValue: 'STUDENT',
      },
    },
    {
      tableName: 'users',
      underscored: true,
      timestamps: true,
    }
  );

  return User;
}

module.exports = { initUserModel };
