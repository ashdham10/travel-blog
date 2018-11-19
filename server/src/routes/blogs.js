import { Router } from 'express';
import Table from '../table';

let router = Router();

let blogs = new Table('blogs');

router.get('/:id?', (req, res) => {
let id = req.params.id;

if(id) {
    blogs.getOne(id)
    .then(results => res.send(results))
    .catch(err =>console.log(err));
} else {
    blogs.getAll()
    .then(results => res.send(results))
    .catch(err => console.log(err));
}
});

router.post('/', (req, res) => {
    blogs.insert(req.body)
    .then(results => res.send(results))
    .catch(err => console.log(err));
});



export default router;