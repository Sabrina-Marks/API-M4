import { Router } from 'express';
import { studentProfile, getAllStudent, updateStudent, deleteStudent } from '../controllers/students.controller.js';


const studentRouter = Router();


studentRouter.post("/aluno", (req, res) => {
    const { name, email, password } = req.body;
    const newStudent = studentProfile(name, email, password);
    res.status(201).json({ newStudent });
});


studentRouter.get("/aluno", (req, res) => {
    const listStudent = getAllStudent()
    res.status(200).json({ listStudent });
});


studentRouter.patch("/aluno", (req, res) => {
    const { id, password } = req.body;
    const update = updateStudent(id, password);
    res.status(200).json({ update });
});


studentRouter.delete("/aluno/:id", (req, res) => {
    const { id } = req.params;
    const student = deleteStudent(id);
    res.status(200).json({ student });
});


export { studentRouter };

