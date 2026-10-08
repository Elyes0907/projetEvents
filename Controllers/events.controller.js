import  eventsModel from '../Models/events.model.js'

async function getAll(req, res) {
    try {
        const events = await eventsModel.getAll();
        res.json(events);
    } catch (error) {
        console.error("Une erreur est survenue lors de la récupération des events");
        res.status(500).json({ error: "Une erreur est survenue lors de la récupération des events" })
    }
}

async function getById(req, res) {
    try {
        const id = req.params.id;
        const event = await eventsModel.getById(id);
        res.json(event[0]);
    } catch (error) {
        res.status(500).json({ error: "Une erreur est survenue lors de la récupération de l'event" })
    }
}

async function insert(req,res){
    try {
        const body = req.body;
        if (!body.title || !body.owner) {
            return res.status(403).json({error : "Le titre et le owner sont obligatoire !"})
        }

        const inserted = await eventsModel.insert(body);
        res.status(201).json(inserted);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Erreur lors de l'insertion de l'event"});
    }
}


async function update(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;
        
        let eventToUpdate = await eventsModel.getById(id);
        if (eventToUpdate.length === 0) {
            return res.status(404).json({ "error": "L'event que vous modifiez n'existe pas" })
        }
        
        eventToUpdate = eventToUpdate[0];
        
        if (body.title) {
            eventToUpdate.ev_title = body.title;
        }
        
        if (body.description) {
            eventToUpdate.ev_description = body.description;
        }
        
        if (body.date) {
            eventToUpdate.ev_date = body.date;
        }
        
        if (body.location) {
            eventToUpdate.ev_location = body.location;
        }


        await eventsModel.update(id, eventToUpdate);
        res.json({ message: "Votre event à bien été modifier", event : eventToUpdate });
    } catch (error) {
        res.status(500).json({ error: "Une erreur est survenue lors de la modification de l'event" });
    }
}

async function deleteEvent(req,res) {
    try {
        const id = req.params.id;
        const deleted = await eventsModel.deleteEvent(id);
        res.json(deleted);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Une erreur est survenue lors de la suppression de l'event"})
    }
}


export default {
    getAll,
    getById,
    insert,
    update,
    deleteEvent
}