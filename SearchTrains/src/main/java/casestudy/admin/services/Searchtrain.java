package casestudy.admin.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.client.RestTemplate;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixProperty;

import casestudy.admin.model.Train;
import casestudy.admin.model.Trainslist;
import casestudy.admin.repository.TrainRepository;

@Service
public class Searchtrain {
	 
	 

    @Autowired
    private RestTemplate restTemplate;

    public String getFallBackAddpassenger(Train g){
        return "faild";
    }

    // this is circute breaker for the getTrainSeats
    @HystrixCommand(fallbackMethod = "getFallBackAddpassenger",commandProperties = {
        @HystrixProperty(name = "execution.isolation.thread.timeoutInMilliseconds",value="2000"),
        @HystrixProperty(name = "circuitBreaker.requestVolumeThreshold",value = "5"),
        @HystrixProperty(name = "circuitBreaker.errorThresholdPercentage",value = "50"),
        @HystrixProperty(name = "circuitBreaker.sleepWindowInMilliseconds",value = "5000"),
   })
   //this is the method which will fetch the data from the passenger microservice 
    public List<Train> getListBy(String x,String y,String z){
        // String a="http://localhost:8092/passenger/traindate/"+trainno+"/"+date+"/"+si+"/"+di;
        // System.out.println("$$$$$$$$$$$$$$$$$$$$$$ "+a);
    	Trainslist trainslist=restTemplate.getForObject("http://trains/all/search/"+x+y+z, Trainslist.class);
        return (List<Train>) trainslist;
    }

    


}
