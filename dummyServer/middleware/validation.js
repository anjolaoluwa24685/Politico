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