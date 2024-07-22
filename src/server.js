import express from "express";
import { studentRouter } from "./routes/students.routes.js";
import { cousersRouter } from "./routes/coursers.routes.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(studentRouter);
app.use(cousersRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});