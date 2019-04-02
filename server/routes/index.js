import express from 'express';
import PartyController from '../../dummyServer/controllers/party';
import {checkCreatePartyInput} from '../../dummyServer/middleware/validation';

const app = express.Router();

app.get('/api/v1', (request, response) => {
    response.status(200)
        .json({
            status: true,
            message: "Welcome to politico api."
        });
});

app.post('/api/v1/parties', checkCreatePartyInput, PartyController.createParty);

export default app;