module.exports = {
  database: "luktask_test",
  username: "",
  password: "",
  params: {
    dialect: "sqlite",
    storage: "luktask.sqlite",
    define: {
      underscored: true
    },
    logging: false
  },
  jwtSecret: "dsdssdsddsdsdld,s",
  jwtSession: {
    session: false
  }
};