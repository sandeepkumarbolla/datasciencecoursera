import React, {useState} from "react";
import trainService from '../services/trainService';
import Alert from 'react-bootstrap/Alert'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormGroup } from "@material-ui/core";
import TextField from '@material-ui/core/TextField'; 
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import FormControl from '@material-ui/core/FormControl';
import { Col, Row } from "react-bootstrap";
import { useHistory, useParams } from 'react-router-dom';

const darkTheme = createMuiTheme({
    palette: {
      responsiveFontSizes: true,
      roundedCorners: true,
      type: 'dark',
    },
  });

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  

function CreateTrain() {

    const classes = useStyles();
    const history=useHistory() 

    const [trainNumber, settrainNumber]= useState('')
    const [trainName, settrainName]= useState('')
    const [trainOrigin, settrainOrigin ]= useState('')
    const [trainDestination, settrainDestination]= useState('')
    const [date, setdate]= useState('')
    const [time, settime]= useState('')
    const [ac1Fare, setac1Fare]= useState('')
    const [ac2Fare, setac2Fare]= useState('')
    const [ac3Fare, setac3Fare] = useState('')
    const [sleeperFare, setsleeperFare] = useState('')
    const [ac1, setac1]= useState('')
    const [ac2, setac2]= useState('')
    const [ac3, setac3] = useState('')
    const [sleeper, setsleeper] = useState('')

 let traindata={ 
    trainNumber:trainNumber,
    trainNumber: trainNumber,
    trainName:trainName,
    trainOrigin:trainOrigin,
    trainDestination:trainDestination,
    date:date,
    time:time,
    trainFares:{
        ac1Fare:ac1Fare,
        ac2Fare:ac2Fare,
        ac3Fare:ac3Fare,
        sleeperFare:sleeperFare
    }, 
    trainTiers:{
        ac1:ac1,
        ac2:ac2,    
        ac3:ac3,
        sleeper:sleeper
    }, 
}
const savetrain=()=>{
    console.log(JSON.stringify(traindata));
    trainService.addTrain(traindata).then(res =>{ 
       alert(res.data)
       history.push('/admin')
    })
}
            
 return (
        <div style={{
            backgroundColor:'#333538', 
            paddingTop:'30px',
            paddingBottom:'30px',
            paddingLeft:'200px',
            paddingRight:'200px'
         }}>
        <ThemeProvider theme={darkTheme}>
            <Card className={classes.root} variant="outlined" >
                <CardContent> 
                <h3 className="text-center"> Add Train</h3>
                     <FormGroup>
                        <Row style={{paddingLeft:'60px'}}>
                            <Col>
                                <TextField
                                id="outlined-basic" label="Train Number" variant="outlined"
                                type="number"   name="trainNumber"  
                                value={trainNumber} onChange={(e)=> settrainNumber(e.target.value)}/> 
                            </Col> 
                            <Col> 
                                <TextField
                                id="outlined-basic"    label="Train Name" variant="outlined" required name="trainName" 
                                value={trainName} onChange={(e)=> settrainName(e.target.value)}/> 
                            </Col> 
                        </Row>
                        <Row style={{paddingLeft:'60px'}}>
                            <Col>
                            <br/>
                                <TextField
                                id="outlined-basic"  variant="outlined" label="Train Source"    name="trainOrigin"  
                                value={trainOrigin} onChange={(e)=> settrainOrigin(e.target.value)} required/>
                            </Col>
                            <Col>
                            <br/>
                                <TextField
                                id="outlined-basic"  variant="outlined" label="Train Destination" name="trainDestination"
                                value={trainDestination} onChange={(e)=> settrainDestination(e.target.value)} required/> 
                            </Col> 
                        </Row> 
                        <Row style={{paddingLeft:'60px'}}>
                            <Col>
                            <br/>
                                <TextField
                                id="outlined-basic"  variant="outlined"   type="date"   name="date"  
                                value={date} onChange={(e)=> setdate(e.target.value)} required/>
                            </Col> 

                            <Col>
                            <br/> 
                                <TextField
                                id="outlined-basic"  variant="outlined" type='time'  name="time"  
                                value={time} onChange={(e)=> settime(e.target.value)}required/>
                            </Col>
                        </Row>
                        <Row style={{paddingLeft:'60px'}}>
                            <Col>
                                <br/>
                                <TextField
                                id="outlined-basic"  variant="outlined" type="number"  label="Set Ac Tier1 Fare" 
                                value={ac1Fare} onChange={(e)=> setac1Fare(e.target.value)}required/>
                            </Col>
                            <Col>
                                <br/>
                                <TextField
                                id="outlined-basic"  variant="outlined" type="number"  label="ac2Fare" 
                                value={ac2Fare} onChange={(e)=> setac2Fare(e.target.value)}required/>
                            </Col>
                        </Row>
                        <Row style={{paddingLeft:'60px'}}>
                            <Col>
                            <br/>                           
                                <TextField
                                id="outlined-basic"  variant="outlined" type="number"  label="ac3Fare" 
                                value={ac3Fare} onChange={(e)=> setac3Fare(e.target.value)}required/>
                            </Col>
                            <Col>
                            <br/>
                                <TextField
                                id="outlined-basic"  variant="outlined" type="number" label="sleeperFare"
                                value={sleeperFare} onChange={(e)=> setsleeperFare(e.target.value)}required/>
                            </Col>
                        </Row>
                        <Row style={{paddingLeft:'60px'}}>
                            <Col>
                                <br/>
                                <TextField
                                id="outlined-basic"  variant="outlined" type="number"  label="ac1"
                                value={ac1} onChange={(e)=> setac1(e.target.value)}required/>
                            </Col>
                            <Col>
                                <br/>
                                <TextField
                                id="outlined-basic"  variant="outlined" type="number" label="ac2"
                                value={ac2} onChange={(e)=> setac2(e.target.value)} required/>
                            </Col> 
                        </Row>
                        <Row style={{paddingLeft:'60px'}}>
                            <Col>
                                <br/>
                                <TextField
                                id="outlined-basic"  variant="outlined" type="number" label="ac3"
                                value={ac3}onChange={(e)=> setac3(e.target.value)} required/>
                            </Col>
                            <Col>
                                <br/>
                                <TextField
                                id="outlined-basic"  variant="outlined" type="number" label="sleeper"
                                value={sleeper} onChange={(e)=> setsleeper(e.target.value)} required/>
                            </Col> 
                        </Row>     
                            <br/>    
                             
                            <div style={{paddingLeft:'60px'}}>
                            <Button variant="contained" color="primary" type="submit" 
                            onClick={() =>savetrain()} >Save</Button>
                            </div> 
                    </FormGroup> 
                </CardContent>
            </Card> 
         </ThemeProvider>
    </div>
    )
}

export default CreateTrain













//  const [trainNumber, settrainNumber]= useState('')
//  const [trainName, settrainName]= useState('')
//  const [trainOrigin, settrainOrigin ]= useState('')
//  const [trainDestination, settrainDestination]= useState('')
//  const [date, setdate]= useState('')
//  const [time, settime]= useState('')
//  const [ac1Fare, setac1Fare]= useState('')
//  const [ac2Fare, setac2Fare]= useState('')
//  const [ac3Fare, setac3Fare] = useState('')
//  const [sleeperFare, setsleeperFare] = useState('')
//  const [ac1, setac1]= useState('')
//  const [ac2, setac2]= useState('')
//  const [ac3, setac3] = useState('')
//  const [sleeper, setsleeper] = useState('')






// import React, { Component } from 'react'
// import trainService from '../services/trainService';
// import UserService from "../services/user.service";
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// export default class createTrain extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             content: ""
//           };
//         this.state={
//             trainNumber:'',
//             trainName:'',
//             trainOrigin:'',
//             trainDestination:'', 
//             date:'',
//             time:'',
//             acFare:'',
//             sleeperFare:'',
//             ac:'',
//             sleeper:'', 
//         }
//         this.changetrainNumberHandler=this.changetrainNumberHandler.bind(this);
//         this.changetrainNameHandler=this.changetrainNameHandler.bind(this);
//         this.changetrainOriginHandler=this.changetrainOriginHandler.bind(this);
//         this.changetrainDestinationHandler=this.changetrainDestinationHandler.bind(this); 
//         this.changedateHandler=this.changedateHandler.bind(this);
//         this.changetimeHandler=this.changetimeHandler.bind(this);
//         this.changeac1FareHandler=this.changeac1FareHandler.bind(this);
//         this.changeac2FareHandler=this.changeac2FareHandler.bind(this);
//         this.changeac3FareHandler=this.changeac3FareHandler.bind(this);
//         this.changesleeperFareHandler=this.changesleeperFareHandler.bind(this);
//         this.changeac1Handler=this.changeac1Handler.bind(this);
//         this.changeac2Handler=this.changeac2Handler.bind(this);
//         this.changeac3Handler=this.changeac3Handler.bind(this);
//         this.changesleeperHandler=this.changesleeperHandler.bind(this);
       
//     }

//     componentDidMount(){
//         UserService.getAdminBoard().then(
//             response => {
//               this.setState({
//                 content: response.data
//               });
//             },
//             error => {
//               this.setState({
//                 content:
//                   (error.response &&
//                     error.response.data &&
//                     error.response.data.message) ||
//                   error.message ||
//                   error.toString()
//               });
//             }
//           );
//     }
    

//     savetrain = (e) => {
//         e.preventDefault();
//         let traindata = {trainNumber: this.state.trainNumber , 
//             trainName:this.state.trainName, 
//             trainOrigin:this.state.trainOrigin, 
//             trainDestination:this.state.trainDestination,  
//             date:this.state.date, 
//             time:this.state.time,
//             trainFares:{
//                 ac1Fare:this.state.ac1Fare,
//                 ac2Fare:this.state.ac2Fare,
//                 ac3Fare:this.state.ac3Fare,
//                 sleeperFare:this.state.sleeperFare
//             },
//             trainTiers:{
//                 ac1:this.state.ac1, 
//                 ac2:this.state.ac2, 
//                 ac3:this.state.ac3, 
//                 sleeper:this.state.sleeper
//         }};

//         console.log('traindata => ' + JSON.stringify(traindata));
    
//         trainService.addTrain(traindata).then(res =>{
            
//         })
//         this.props.history.push('/admin');
//             alert('train successfully added with train name: '+this.state.trainName);
//       }

//       cancel(){
//           this.props.history.push('/admin');
//           alert('cancelled adding train... redirecting to admin page')
//       }
    
//     changetrainNumberHandler=(event)=>{
//         this.setState({trainNumber:event.target.value});
//     }
//     changetrainNameHandler=(event)=>{
//         this.setState({trainName:event.target.value});
//     }
//     changetrainOriginHandler=(event)=>{
//         this.setState({trainOrigin:event.target.value});
//     } 
//     changetrainDestinationHandler=(event)=>{
//         this.setState({trainDestination:event.target.value});
//     } 
    
//     changedateHandler=(event)=>{
//         this.setState({date:event.target.value});
//     } 
//     changetimeHandler=(event)=>{
//         this.setState({time:event.target.value});
//     } 
    
//     changeac1FareHandler=(event)=>{
//         this.setState({ac1Fare:event.target.value});
//     } 
//     changeac2FareHandler=(event)=>{
//         this.setState({ac2Fare:event.target.value});
//     } 
//     changeac3FareHandler=(event)=>{
//         this.setState({ac3Fare:event.target.value});
//     } 
//     changesleeperFareHandler=(event)=>{
//         this.setState({sleeperFare:event.target.value});
//     } 
//     changeac1Handler=(event)=>{
//         this.setState({ac1:event.target.value});
//     } 
//     changeac2Handler=(event)=>{
//         this.setState({ac2:event.target.value});
//     } 
//     changeac3Handler=(event)=>{
//         this.setState({ac3:event.target.value});
//     } 
//     changesleeperHandler=(event)=>{
//         this.setState({sleeper:event.target.value});
//     } 

//     render() {
//         if(this.state.content=="Admin Board."){
//             return (
//                 <div
//                     style={{
//                         color:'white',
//                         background:"black",
                    
//                     paddingBottom:'30px'
//                     }}>
//                 <div className="container">
//                     <div className="row">
//                         <div className="card col-md-6 offset-md-3 offset-md-3 bg-dark">
//                             <h3 className="text-center"> add Train</h3>
//                             <div className="card-body">
    
    
//                                 <form>
//                                     <div className="form-group">
                                       
//                                     <lable>Train number</lable>
//                                         <input type="number" placeholder="trainNumber" name="trainNumber"
//                                             value={this.state.trainNumber} onChange={this.changetrainNumberHandler}/>
    
//                                         <lable>Train name</lable>
//                                         <input required placeholder="trainName" name="trainName"
//                                             value={this.state.trainName} onChange={this.changetrainNameHandler}/>
    
//                                         <lable>Train origin</lable>
//                                         <input placeholder="trainOrigin" name="trainOrigin"
//                                             value={this.state.trainOrigin} onChange={this.changetrainOriginHandler} required/>
    
//                                         <lable>Train destination</lable>
//                                         <input placeholder="trainDestination" name="trainDestination"
//                                             value={this.state.trainDestination} onChange={this.changetrainDestinationHandler} required/>
    
//                                         <lable>date of journey</lable>
//                                         <input type="date" placeholder="DD-MM-YYYY" name="date"
//                                             value={this.state.date} onChange={this.changedateHandler} required/>
    
//                                         <lable>time</lable>
//                                         <input type='time' placeholder="HH:MM" name="time"
//                                             value={this.state.time} onChange={this.changetimeHandler}required/>
//                                          <lable>price of ac tier1</lable>
//                                         <input type="number" placeholder="ac1Fare" name="ac1Fare"
//                                             value={this.state.ac1Fare} onChange={this.changeac1FareHandler}required/>

//                                         <lable>price of ac tier2</lable>
//                                         <input type="number" placeholder="ac2Fare" name="ac2Fare"
//                                             value={this.state.ac2Fare} onChange={this.changeac2FareHandler}required/>
                                            
//                                         <lable>price of ac tier3</lable>
//                                         <input type="number" placeholder="ac3Fare" name="ac3Fare"
//                                             value={this.state.ac3Fare} onChange={this.changeac3FareHandler}required/>

//                                         <lable>price of sleeper tier</lable>
//                                         <input type="number" placeholder="sleeperFare" name="sleeperFare"
//                                             value={this.state.sleeperFare} onChange={this.changesleeperFareHandler}required/>
    
//                                         <lable>seats in ac tier1</lable>
//                                         <input type="number" placeholder="ac1" name="ac1"
//                                             value={this.state.ac1} onChange={this.changeac1Handler}required/>
//                                         <lable>seats in ac tier2</lable>
//                                         <input type="number" placeholder="ac2" name="ac2"
//                                             value={this.state.ac2} onChange={this.changeac2Handler}required/>
//                                         <lable>seats in ac tier3</lable>
//                                         <input type="number" placeholder="ac3" name="ac3"
//                                             value={this.state.ac3} onChange={this.changeac3Handler}required/>
//                                         <lable>seats in sleeper tier</lable>
//                                         <input type="number" placeholder="sleeper" name="sleeper"
//                                             value={this.state.sleeper} onChange={this.changesleeperHandler}required/>
//                                     </div>
                                    
//                                     <button type="submit" className="btn btn-success" onClick={this.savetrain} >Save</button>
//                                     <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px",paddingTop:"10px"}}>Cancel</button>
                        
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
                     
//                 </div>
                
//                 </div>
//             )
        
//         }
//         else{
//             return(
                
//                     <div><h1>unauthorized</h1></div>
                
//             )
//         }
       
//     }
    
// }




 