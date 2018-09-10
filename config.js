module.exports = {
    port: process.env.PORT || 3001,
    db: process.env.MONGODB_URI || 'mongodb://david:Fidelio2018@ds018498.mlab.com:18498/gestor_forms',
    SECRET_TOKEN: 'miclavedetokens'
  }