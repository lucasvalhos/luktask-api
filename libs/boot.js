module.exports = app => {
  app.db.sequelize.sync().done(() => {
    app.listen(app.get('port'), () => {
      console.log('LukTask API - porta ${app.get("port")}');
    });
  });
};