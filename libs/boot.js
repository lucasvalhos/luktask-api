module.exports = app => {
  app.db.sync().done(() => {
    app.listen(app.get('port'), () => {
      console.log('LukTask API - porta ${app.get("port")}');
    });
  });
};