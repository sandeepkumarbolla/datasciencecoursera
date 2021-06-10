import axios from 'axios';

const PASSENGER_BASE_API_URL='http://localhost:8089/all/findallpassenger';
const ADD_PASSENGER_BASE_API_URL='http://localhost:8089/all/bookticket';
const DELETE_PASSENGER_BASE_API_URL='http://localhost:8089/all/deletepassenger';
const PNR_URL="http://localhost:8089/all/pnrsearch"
const PNR_BY_USER="http://localhost:8089/all/getticketsbyuser/"
 
class passengerService{
    addPassenger(data){
        return axios.post(ADD_PASSENGER_BASE_API_URL,data);
    }
    getPassengers(){
        return axios.get(PASSENGER_BASE_API_URL);
    }
    getPnrByUserName(username){
        return axios.get(PNR_BY_USER+'/'+username);
    }

    getPassengersbyid(id){
        console.log(PNR_URL+'/'+id);
        return axios.get(PNR_URL+'/'+id);
    }
    deletePassenger(pnr){
        return axios.delete(DELETE_PASSENGER_BASE_API_URL+'/'+pnr);
    }

}
export default new passengerService()