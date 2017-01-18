module.exports = {
  database: "luktask",
  username: "",
  password: "",
  params: {
    dialect: "sqlite",
    storage: "luktask.sqlite",
    define: {
      underscored: true
    }
  },
  jwtSecret: "dsdssdsddsdsdld,s",
  jwtSession: {
    session: false
  }
};