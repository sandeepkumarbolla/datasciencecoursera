package casestudy.admin.trains.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import casestudy.admin.trains.model.Train;
import casestudy.admin.trains.model.Trainslist;
import casestudy.admin.trains.repository.TrainRepository;
import casestudy.admin.trains.service.TrainService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class TrainController {


	@Autowired
	private TrainService trainService;  
	
    @PostMapping("/addTrain")
    public String saveTrain(@RequestBody Train train){
    	  return trainService.saveTrain(train);
    }
 
    
    @GetMapping("/findAllTrains")
    public List<Train> getTrains(){ 
    	
        return trainService.getTrains();
    }

    @GetMapping("/findAllTrains/{id}")
    public ResponseEntity<Train> getTrain(@PathVariable int id){
         
        return  trainService.getTrain(id);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Train> updateTrain(@PathVariable int id,Train traindetails){
        
        return trainService.updateTrain(id, traindetails);
    }



//    public String updateTrain(@PathVariable int id,@RequestBody Train train) throws ResourceNotFoundException {
//
//
//        Optional<Train> saved = trainRepository.findById(id);
//        if(!saved.isPresent()){
//            throw new ResourceNotFoundException("AddOn with the id not exist");}
//        trainRepository.save(train);
//        return "User Updated Successfully!!";
//    }

    @DeleteMapping("/deletetrain/{id}")
    public String deleteTrain(@PathVariable int id){
        
        return trainService.deleteTrain(id);
    }


}
