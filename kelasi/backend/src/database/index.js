const { sequelize } = require('../config/database');
const { initUserModel } = require('../models/user.model');
const { initStudentModel } = require('../models/student.model');
const { initTeacherModel } = require('../models/teacher.model');
const { initClassModel } = require('../models/class.model');
const { initSubjectModel } = require('../models/subject.model');
const { initGradeModel } = require('../models/grade.model');
const { initScheduleModel } = require('../models/schedule.model');
const { initPaymentModel } = require('../models/payment.model');
const { initMessageModel } = require('../models/message.model');

async function initDatabase() {
  try {
    await sequelize.authenticate();
    // Initialize models
    const User = initUserModel(sequelize);
    const Student = initStudentModel(sequelize);
    const Teacher = initTeacherModel(sequelize);
    const Class = initClassModel(sequelize);
    const Subject = initSubjectModel(sequelize);
    const Grade = initGradeModel(sequelize);
    const Schedule = initScheduleModel(sequelize);
    const Payment = initPaymentModel(sequelize);
    const Message = initMessageModel(sequelize);

    // Associations
    User.hasOne(Student, { foreignKey: 'userId' });
    Student.belongsTo(User, { foreignKey: 'userId' });

    User.hasOne(Teacher, { foreignKey: 'userId' });
    Teacher.belongsTo(User, { foreignKey: 'userId' });

    Teacher.hasMany(Class, { foreignKey: 'teacherId' });
    Class.belongsTo(Teacher, { foreignKey: 'teacherId' });

    Class.hasMany(Student, { foreignKey: 'classId' });
    Student.belongsTo(Class, { foreignKey: 'classId' });

    Subject.hasMany(Grade, { foreignKey: 'subjectId' });
    Grade.belongsTo(Subject, { foreignKey: 'subjectId' });

    Student.hasMany(Grade, { foreignKey: 'studentId' });
    Grade.belongsTo(Student, { foreignKey: 'studentId' });

    Class.hasMany(Schedule, { foreignKey: 'classId' });
    Schedule.belongsTo(Class, { foreignKey: 'classId' });

    Subject.hasMany(Schedule, { foreignKey: 'subjectId' });
    Schedule.belongsTo(Subject, { foreignKey: 'subjectId' });

    Student.hasMany(Payment, { foreignKey: 'studentId' });
    Payment.belongsTo(Student, { foreignKey: 'studentId' });

    User.hasMany(Message, { foreignKey: 'fromUserId', as: 'SentMessages' });
    User.hasMany(Message, { foreignKey: 'toUserId', as: 'ReceivedMessages' });
    Message.belongsTo(User, { foreignKey: 'fromUserId', as: 'FromUser' });
    Message.belongsTo(User, { foreignKey: 'toUserId', as: 'ToUser' });
    if (process.env.DB_SYNC === 'true') {
      await sequelize.sync({ alter: false });
    }
    // eslint-disable-next-line no-console
    console.log('Database connected');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Database connection failed:', error.message);
    if (process.env.DB_REQUIRED === 'true') {
      process.exit(1);
    }
  }
}

module.exports = { sequelize, initDatabase };
