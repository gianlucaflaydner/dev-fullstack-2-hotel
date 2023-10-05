import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI || MONGODB_URI.length === 0) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

async function connectDatabase() {
  const options = {
    dbName: "chimia-hoteis",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
  };

  try {
    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log("Conexão estabelecida com sucesso!");
  } catch (error) {
    console.error(error);
  }
}

export default connectDatabase;
