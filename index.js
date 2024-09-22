import express from "express";
import cors from 'cors'
import { studentRouter } from "./src/routes/students.routes.js";
import { cousersRouter } from "./src/routes/coursers.routes.js";

const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use(cors())
app.use(studentRouter);
app.use(cousersRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});