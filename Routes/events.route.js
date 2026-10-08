import express from 'express'
import eventsController from '../Controllers/events.controller.js';
const router = express.Router();

//je récupère tous les events
router.get('/', eventsController.getAll)

//je récupère un event via le id
router.get('/:id', eventsController.getById);

//j'ajoute un event
router.post('/', eventsController.insert);

//je modifie un event avec son Id en parametre
router.patch('/:id', eventsController.update);

//je supprime un event via son Id
router.delete('/:id', eventsController.deleteEvent);



// On exporte par default
export default router;