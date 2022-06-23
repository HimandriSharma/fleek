import service from "./AppService";

const backendService = {}

backendService.getCharacters = function (params) {
    return service({
        url: '/character',
        method: 'get',
        params
    })
}

export default backendService