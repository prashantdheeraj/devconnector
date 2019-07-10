const mongoose = require('mongoose');
const config = require('config');
// const db = config.get('mongoURI'); //This is for local development
const db = config.get('mongoURIAtlas'); //This is for production

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('Mongo DB connected');
  } catch (err) {
    console.error(err.message);
    //EXIT Process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
