const { connect } = require("mongoose");

const mongoose = require("mongoose");

const connectToDatabase = async () => {
  //******************************** */
  // MongooseError: Mongoose.prototype.connect() no longer accepts a callback
  //******************************** */
  //   await mongoose.connect(
  //     `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ajzx3.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0`,
  //     (error) => {
  //       if (error) {
  //         return console.log("erro ao conectar BD: ", error);
  //       }
  //       return console.log("conexão BD com sucesso");
  //     }

  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ajzx3.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0`
  );
};

module.exports = connectToDatabase;
