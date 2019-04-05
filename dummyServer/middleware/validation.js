export const checkCreatePartyInput = (request, response, next) => {
    const { name, hqAddress, logoUrl, description } = request.body
    if (!name || !hqAddress || !logoUrl || !description) {
        return response.status(400).json({
            status: false,
            message: 'all fields are required'
        })
    } else {
        next();
    };
};

export const checkParamsId = (request, response, next) => {
    if (isNaN(request.params.id)) {
        return response.status(400).json({
            status: false,
            message: 'id have to be a number'
        })
    } else {
        next();
    }
}

export const checkPoliticalOffices = (request, response) => {
    const {name, type} = request.body
    if(!name || !type) {
        return response.status(404).json({
            status: false,
            message: 'Invalid input'
        })
    }
}

