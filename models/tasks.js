module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback([
        {title: "Learning NodeJS"},
        {title: "Making apis"}
      ]);
    }
  };
};