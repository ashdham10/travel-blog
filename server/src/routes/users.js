import { Router } from 'express';
import Table from '../table';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';

let router = Router();
let usersTable = new Table('users');

router.get('/', (req, res) => {
    usersTable.getOne(req.params.id)
    .then(results => res.send(results))
    .catch(e => res.status(500).send(e));
});

router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
    res.json(req.user);
});

export default router;