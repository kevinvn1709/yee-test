const API_SERACH_ROUTE = 'https://api.tfl.gov.uk/line/{routeNumber}/route/sequence/outbound';
const API_SERACH_POINT = 'https://api.tfl.gov.uk/StopPoint/{stopPointId}/arrivals';

module.exports = {
    searchRouteNumber: function (routeNumber) {
        return api_search_route(routeNumber);
    },

    searchStopPoint: function (stopPointId) {
        return api_search_point(stopPointId);
    }
}

function api_search_route(routeNumber) {
    try {
        var url = API_SERACH_ROUTE.replace('{routeNumber}', routeNumber);
        return fetch(url).then((response) => response.json());
    } catch (error) {
        console.error(error);
    }
}

function api_search_point(stopPointId) {
    try {
        var url = API_SERACH_POINT.replace('{stopPointId}', stopPointId);
        return fetch(url).then((response) => response.json());
    } catch (error) {
        console.error(error);
    }
}