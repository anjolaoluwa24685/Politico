import offices from '../models/office';
class OfficesController {
static createPoliticalOffices(request, response) {
    const officesCreate = {
        id: offices.length + 1,
        name: request.body.name,
        type: request.body.type
    } ;
    offices.push(officesCreate);
    return response.status(201).json({
        status: true,
        message: 'you have successfully created a political office',
        data: offices[offices.length - 1]
    })

}

static getPoliticalOffices(request, response) {
    if(offices.length === 0) {
        return response.status(200).json({
            status: true,
            message: 'no offices available'
        })
    }
    return response.status(200).json({
        status: true,
        data: offices
    })

}

}

export default OfficesController;