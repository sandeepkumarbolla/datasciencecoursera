package casestudy.admin.trains.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import casestudy.admin.trains.controller.ResourceNotFoundException;
import casestudy.admin.trains.model.Train;
import casestudy.admin.trains.repository.TrainRepository;


@Service
public class TrainService {
	@Autowired
    private TrainRepository trainRepository;
	
	 public String saveTrain(@RequestBody Train train){
	        trainRepository.save(train);
	        return "added Train with Id :"+train.getTrainNumber();
	 }
	 
	 
	 public List<Train> getTrains(){ 
	    	
	        return trainRepository.findAll();
	    }
	 
	 public ResponseEntity<Train> getTrain(@PathVariable int id){
	        Train train= trainRepository.findById(id)
	                .orElseThrow(()-> new ResourceNotFoundException("Train not found with id"+id));
	        return ResponseEntity.ok(train);
	    }
	 
	 public ResponseEntity<Train> updateTrain(@PathVariable int id,Train traindetails){
	        Train train= trainRepository.findById(id)
	                .orElseThrow(()-> new ResourceNotFoundException("Train not found with id"+id));

	        train.setTrainName(traindetails.getTrainName());
	        train.setTrainOrigin(traindetails.getTrainOrigin());
	        train.setTrainDestination(traindetails.getTrainDestination());
	        train.setTime(traindetails.getTime());
	        train.setDate(traindetails.getDate());
	        train.setTrainTiers(traindetails.getTrainTiers());

	        Train updatedTrain = trainRepository.save(train);
	        return ResponseEntity.ok(updatedTrain);
	    }
	 
	  public String deleteTrain(@PathVariable int id){
	        Train train=trainRepository.findById(id)
	                .orElseThrow(()->new ResourceNotFoundException("train not exists"));

	        trainRepository.delete(train);
//	        Map<String,Boolean> response=new HashMap<>();
//	        response.put("deleted",Boolean.TRUE);
	        return "deleted train with ID: "+id;
	  }
	 
}
