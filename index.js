import express from "express";
import morgan from "morgan";
import taskroutes from "./src/routes/task.routes.js"

const app = express();
const PORT = 3000 ;

app.use(express.json());
app.use(morgan("dev"));

app.use("/api", taskroutes );

app.listen(PORT, () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});