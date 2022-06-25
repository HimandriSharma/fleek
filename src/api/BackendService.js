import service from "./AppService";

const backendService = {}

backendService.getCharacters = function (params) {
    return service({
        url: '/character',
        method: 'get',
        params
    })
}

backendService.getCharacterDetail = function (id) {
    return service({
        url: '/character/2', //+id,
        method: 'get',
    })
}

backendService.getEpisodeInfo = function () {
    return service({
        url: '/episode/1', //+id,
        method: 'get',
    })
}
export default backendService