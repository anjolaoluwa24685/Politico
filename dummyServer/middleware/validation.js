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

export const checkgetSpecificParty = (request, response, next) => {
    if (isNaN(request.params.id)) {
        return response.status(400).json({
            status: false,
            message: 'id have to be a number'
        })
    } else {
        next();
    }
}