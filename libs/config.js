module.exports = app => {
  const env = process.env.NODE_ENV;
  
  if(Boolean(env)) {
    return require(__dirname +'/config.'+ env +'.js');
  }

  return require('./config.development.js');
};