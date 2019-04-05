 import express from 'express';
import PartyController from '../../dummyServer/controllers/party';
import { checkCreatePartyInput, checkParamsId, checkPoliticalOffices } from '../../dummyServer/middleware/validation';
import officesController from '../../dummyServer/controllers/office';
const app = express.Router();

app.get('/api/v1', (request, response) => {
    response.status(200)
        .json({
            status: true,
            message: "Welcome to politico api."
        });
});

app.post('/api/v1/parties', checkCreatePartyInput, PartyController.createParty);
app.get('/api/v1/parties', PartyController.getParties);
app.get('/api/v1/parties/:id', checkParamsId, PartyController.getSpecificPoliticalParty);
app.put('/api/v1/parties/:id', checkParamsId, PartyController.editSpecificParty);
app.delete('/api/v1/parties/:id', checkParamsId, PartyController.deleteParticularParty);
app.post('/api/v1/offices', checkPoliticalOffices, officesController.createPoliticalOffices);
app.get('/api/v1/offices', officesController.getPoliticalOffices);


export default app;