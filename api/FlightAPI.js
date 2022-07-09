import api from './API'

export const getFlightByDate = date => api.get(`/api/share-data-module/flups/list-flup-flight?airline=&flight=&flightDate=`+date+`&cargoTerminal=&status=&sorting=&skipCount=0&maxResultCount=100`).then(({ data }) => data);
export const getFlightImpByDate = date => api.get(`/api/inbound-module/flights/list-flui-flight?airline=&flight=&flightDate=`+date+`&cargoTerminal=&status=&sorting=&skipCount=0&maxResultCount=10`).then(({ data }) => data);