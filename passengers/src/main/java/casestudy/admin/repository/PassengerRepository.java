package casestudy.admin.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import casestudy.admin.model.Passengers; 

public interface PassengerRepository extends MongoRepository<Passengers,Integer> {
	
	 
	@Query(value = "{$and:[{'username':?0}]}")
	List<Passengers> byUserName(String username);

}
