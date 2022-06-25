import {service, emptyService} from "./AppService";

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
        url: '/character/'+id,
        method: 'get',
    })
}

backendService.getEpisodeInfo = function (url) {
    return emptyService({
        url,
        method: 'get',
    })
}
export default backendService