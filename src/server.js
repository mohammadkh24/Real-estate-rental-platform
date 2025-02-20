const { default: mongoose } = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");

const productionMode = process.env.NODE_ENV === "production";

if (!productionMode) {
  dotenv.config();
}

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Database Connected Successfully : ${mongoose.connection.host}`
    );
  } catch (error) {
    console.error("Error in DB Connection Error =>", error);
    process.exit(1);
  }
};

const startServer = () => {
  const port = process.env.PORT || 4001;
  app.listen(port, () => {
    console.log(
      `Server Listening In ${
        productionMode ? "Production" : "Development"
      } Mode On Port ${port}...`
    );
  });
};

async function run() {
  startServer();
  await connectDB();
}

run();
