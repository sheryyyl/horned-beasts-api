import express from "express"
import 'dotenv/config'
import beastsRouter from "./routes/beasts.js"
import morgan from "morgan"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("tiny"))
app.use("/api", beastsRouter)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
