package casestudy.admin.trains.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import casestudy.admin.trains.model.Train;
import casestudy.admin.trains.repository.TrainRepository;
 
@CrossOrigin()
@RestController
public class SearchController {
	
	@Autowired
	TrainRepository trainRepository;
	
	@GetMapping("/all/search/{trainOrigin}/{trainDestination}/{date}")
	public List<Train> getListBy(String trainOrigin, String trainDestination, String date) {
	      List<Train> saved = trainRepository.getListBy(trainOrigin, trainDestination);
	      ArrayList<Train> result =new ArrayList<Train>();
	      for (Train trains : saved) {

	          if (trains.getDate().equals(date)) {
	              result.add(trains);
	          }
	      }
	      return result;
		}
}
