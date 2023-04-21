const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

dotenv.config({ path: "Backend/config/config.env" });
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is running`);
});
