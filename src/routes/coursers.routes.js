import { Router } from 'express';
import { createCousers, getAllCousers, updateCousers, deleteCousers, getCouser } from '../controllers/cousers.controllers.js';

const cousersRouter = Router();

//post

cousersRouter.post("/cursos", (req, res) => {
    const { title, description, languagem } = req.body;
    const newCousers = createCousers(title, description, languagem);
    res.status(201).json({ newCousers });
});


//get

cousersRouter.get("/cursos/:id", (req, res) => {
    const { id } = req.params;
    const couser = getCouser(id);
    if (couser) {
        return res.status(200).json({couser});
    }
    return res.status(404).send("Id inválido");
});


cousersRouter.get("/cursos", (req, res) => {
    const filter = req.query
    const listCousers = getAllCousers(filter);
    return res.status(200).json({listCousers});
});

//patch

cousersRouter.patch("/cursos", (req, res) => {
    const { id, description } = req.body;
    const update = updateCousers(id, description);
    res.status(200).json({ update });
});
// delete 

cousersRouter.delete("/cursos/:id", (req, res) => {
    const { id } = req.params;
    const cousers = deleteCousers(id);
    res.status(200).json({ cousers });
});


export { cousersRouter };
