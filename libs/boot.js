module.exports = app => {
  app.listen(app.get('port'), () => {
    console.log('LukTask API - porta ${app.get("port")}');
  });
};