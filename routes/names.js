import express from 'express'

const router = express.Router();

let names = [
    {id: 1, name: "Michelle"},
    {id: 2, name: "Jelyn"},
    {id: 3, name: "Jemershon"},
    {id: 4, name: "Jadyn"},
]

router.get('/', (req, res) => {
    res.json(names)
})

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const name = names.find((name) => name.id === id)

    if(!name){
        res.status(404).json({message: `A name with the id of ${id} was NOT found`})
    }
    else{
        res.json(name)
    }
})
export default router