import party from '../models/party';

class PartyController {

    static createParty(request, response) {
        const partyAdded = {
            id: party.length + 1,
            name: request.body.name,
            hqAddress: request.body.hqAddress,
            logoUrl: request.body.logoUrl,
            description: request.body.description
        };
        party.push(partyAdded);
        return response.status(201).json({
            message: 'you have successfully created a political party',
            newParty: party[party.length - 1]
        })

    }

    static getParties(request, response) {
        return response.status(200).json({
            status: true,
            data: party
        })
    }

}

export default PartyController;