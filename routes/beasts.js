import express from "express";
import beast from "../data/horned-beasts.json" assert {type: 'json'}

const router = express.Router();

router.get('/beasts', (req, res) => {
    res.json(beast);
});

router.get('/beasts/:id', (req, res) => {
    const { id } = req.params;
    const single = beast.find(elemento => elemento.id === parseInt(id))
    res.json(
        {
            message: "Respuesta Existosa",
            data: single
        })
})
router.get('/numero-beasts', (req, res) => {
    const numeroBeast = beast.length
    res.json({
        message: "petición exitosa",
        numero: numeroBeast
    })
})
router.get("/beast/")
export default router;