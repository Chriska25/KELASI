const { DataTypes } = require('sequelize');

function initPaymentModel(sequelize) {
  const Payment = sequelize.define(
    'Payment',
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
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('PENDING', 'COMPLETED', 'FAILED'),
        defaultValue: 'PENDING',
      },
      reference: {
        type: DataTypes.STRING(120),
        allowNull: true,
      },
    },
    {
      tableName: 'payments',
      underscored: true,
      timestamps: true,
    }
  );
  return Payment;
}

module.exports = { initPaymentModel };
