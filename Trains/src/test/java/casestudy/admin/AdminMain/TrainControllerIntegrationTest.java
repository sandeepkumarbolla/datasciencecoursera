package casestudy.admin.AdminMain;

 
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.HttpClientErrorException;

import casestudy.admin.trains.TrainsApplication;
import casestudy.admin.trains.model.Train;
import casestudy.admin.trains.model.TrainTiers;
 

@RunWith(SpringRunner.class)
@SpringBootTest(classes = TrainsApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class TrainControllerIntegrationTest {
	@Autowired
	private TestRestTemplate restTemplate;

	@LocalServerPort
	private int port;

	private String getRootUrl() {
		return "http://localhost:" + port;
	}

	@Test
	public void contextLoads() {

	}

	@Test
	public void testGetAllTrains() {
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<String> entity = new HttpEntity<String>(null, headers);

		ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/admin/findAllTrains",
				HttpMethod.GET, entity, String.class);
		
		assertNotNull(response.getBody());
	}

	@Test
	public void testGetTrainsById() {
		Train train = restTemplate.getForObject(getRootUrl() + "/admin/findalltrains/68525", Train.class);
		System.out.println(train);
		assertNotNull(train);
	}

	@Test
	public void testAddTrain() {
		Train train = new Train();
		train.setDate("2021-06-06");
		train.setTime("18:00:AM");
		train.setTrainName("andaman exp");
		train.setTrainNumber(11111); 
		 
		ResponseEntity<Train> postResponse = restTemplate.postForEntity(getRootUrl() + "/admin/addtrain", train, Train.class);
		assertNotNull(postResponse);
		assertNotNull(postResponse.getBody());
	}

	@Test
	public void testUpdateTrain() {
		int id = 1;
		Train train = restTemplate.getForObject(getRootUrl() + "/admin/update/" + id, Train.class);
		train.setTrainName("himasagar");
		 
		restTemplate.put(getRootUrl() + "/findalltrains/" + id, train);

		Train updatedtrain = restTemplate.getForObject(getRootUrl() + "/admin/update/" + id, Train.class);
		assertNotNull(updatedtrain);
	}

	@Test
	public void testDeleteTrain() {
		int id = 2;
		Train train = restTemplate.getForObject(getRootUrl() + "/admin/deletetrain/" + id, Train.class);
		assertNotNull(train);

		restTemplate.delete(getRootUrl() + "/admin/deletetrain/" + id);

		try {
			train = restTemplate.getForObject(getRootUrl() + "/admin/deletetrain/" + id, Train.class);
		} catch (final HttpClientErrorException e) {
			assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
		}
	}
}