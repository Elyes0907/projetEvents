import express from 'express'
import usersController from '../Controllers/users.controller.js'

const router = express.Router();

// /utilisateur/
router.get('/', usersController.getAll)
//détail d'un utilisateur
router.get('/:id', usersController.getById)
//creer un utilisateur
router.post("/", usersController.insert)
//modifier un utilisateur
router.patch('/:id', usersController.update)
//supprimer un utilisateur
router.delete("/:id", usersController.deleteUser);


export default router;