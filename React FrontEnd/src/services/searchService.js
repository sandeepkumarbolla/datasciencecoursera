import axios from 'axios'


const BOOKING_SEARCH_API='http://localhost:8081/all/search'
//http://localhost:8081/all/search/{trainOrigin}/{trainDestination}/{date}?date=2021-06-06&trainDestination=chennai&trainOrigin=delhi

class searchService{
    getsearchtrains(origin,destination,date){
        console.log(BOOKING_SEARCH_API+'/'+origin+'/{TrainDestination}/{date}?date='+date+'&trainDestination='+destination+'&trainOrigin='+origin)
        return axios.get(BOOKING_SEARCH_API+'/'+origin+'/{TrainDestination}/{date}?date='+date+'&trainDestination='+destination+'&trainOrigin='+origin);
    }
}

export default new searchService()