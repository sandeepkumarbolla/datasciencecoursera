import React, { Component } from 'react'
import trainService from '../services/trainService';

export default class updateTrain extends Component {
    constructor(props){
        super(props)

        this.state={
            trainNumber:this.props.match.params.trainNumber,
            trainName:'',
            trainOrigin:'',
            trainDestination:'', 
            date:'',
            time:'',
            ac1Fare:'',
            ac2Fare:'',
            ac3Fare:'',
            sleeperFare:'',
            ac:'',
            sleeper:'', 
        }
        this.changetrainNumberHandler=this.changetrainNumberHandler.bind(this);
        this.changetrainNameHandler=this.changetrainNameHandler.bind(this);
        this.changetrainOriginHandler=this.changetrainOriginHandler.bind(this);
        this.changetrainDestinationHandler=this.changetrainDestinationHandler.bind(this);
        
        this.changedateHandler=this.changedateHandler.bind(this);
        this.changetimeHandler=this.changetimeHandler.bind(this);
        this.changeac1FareHandler=this.changeac1FareHandler.bind(this);
        this.changeac2FareHandler=this.changeac2FareHandler.bind(this);
        this.changeac3FareHandler=this.changeac3FareHandler.bind(this);
        this.changesleeperFareHandler=this.changesleeperFareHandler.bind(this);
        this.changeac1Handler=this.changeac1Handler.bind(this);
        this.changeac2Handler=this.changeac2Handler.bind(this);
        this.changeac3Handler=this.changeac3Handler.bind(this);
        this.changesleeperHandler=this.changesleeperHandler.bind(this);
        this.updatetrain=this.updatetrain.bind(this);
       
    }
    componentDidMount(){
        trainService.getTrainsById(this.state.trainNumber).then((res)=>{
            let traindata=res.data;
            this.setState({trainName:traindata.trainName,
                trainOrigin:traindata.trainOrigin,
                trainDestination:traindata.trainDestination,
                
                date:traindata.date,
                time:traindata.time,
                ac1Fare:traindata.trainFares.ac1Fare,
                ac2Fare:traindata.trainFares.ac2Fare,
                ac3Fare:traindata.trainFares.ac3Fare,
                sleeperFare:traindata.trainFares.sleeperFare,
                ac1:traindata.trainTiers.ac1,
                ac2:traindata.trainTiers.ac2,
                ac3:traindata.trainTiers.ac3,
                sleeper:traindata.trainTiers.sleeper

            });
        });
    }
    

    updatetrain = (e) => {
        e.preventDefault();
        let traindata = {trainNumber: this.state.trainNumber , 
            trainName:this.state.trainName, 
            trainOrigin:this.state.trainOrigin, 
            trainDestination:this.state.trainDestination,  
            date:this.state.date, 
            time:this.state.time,
            trainFares:{
                ac1Fare:this.state.ac1Fare,
                ac2Fare:this.state.ac2Fare,
                ac3Fare:this.state.ac3Fare,
                sleeperFare:this.state.sleeperFare
            },
            trainTiers:{
                ac1:this.state.ac1, 
                ac2:this.state.ac2, 
                ac3:this.state.ac3, 
                sleeper:this.state.sleeper
        }};

        console.log('traindata => ' + JSON.stringify(traindata));

        trainService.addTrain(traindata).then(res =>{
            this.props.history.push('/viewtrain/'+this.state.trainNumber);
            alert('train successfully Updated');
        });

       
      }

      
    
    changetrainNumberHandler=(event)=>{
        this.setState({trainNumber:event.target.value});
    }
    changetrainNameHandler=(event)=>{
        this.setState({trainName:event.target.value});
    }
    changetrainOriginHandler=(event)=>{
        this.setState({trainOrigin:event.target.value});
    } 
    changetrainDestinationHandler=(event)=>{
        this.setState({trainDestination:event.target.value});
    } 
    
    changedateHandler=(event)=>{
        this.setState({date:event.target.value});
    } 
    changetimeHandler=(event)=>{
        this.setState({time:event.target.value});
    } 
    changeac1FareHandler=(event)=>{
        this.setState({ac1Fare:event.target.value});
    }
    changeac2FareHandler=(event)=>{
        this.setState({ac2Fare:event.target.value});
    }
    changeac3FareHandler=(event)=>{
        this.setState({ac3Fare:event.target.value});
    } 
    changesleeperFareHandler=(event)=>{
        this.setState({sleeperFare:event.target.value});
    } 
    changeac1Handler=(event)=>{
        this.setState({ac1:event.target.value});
    }
    changeac2Handler=(event)=>{
        this.setState({ac2:event.target.value});
    }
    changeac3Handler=(event)=>{
        this.setState({ac3:event.target.value});
    } 
    changesleeperHandler=(event)=>{
        this.setState({sleeper:event.target.value});
    } 

    cancel(){
        this.props.history.push('/admin');
        alert('cancelled updating train... redirecting to admin page')
    }

    render() {
        return (
            <div
                style={{
                    color:"white",
                    background:"black",
                paddingTop:'30px',
                paddingBottom:'30px'
                }}>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3 bg-dark">
                        <h3 className="text-center"> update Train</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                <lable>Train number</lable>
                                    <input placeholder="trainNumber" name="trainNumber" className="form-control"
                                        value={this.state.trainNumber} onChange={this.changetrainNumberHandler}/>

                                    <lable>Train name</lable>
                                    <input placeholder="trainName" name="trainName" className="form-control"
                                        value={this.state.trainName} onChange={this.changetrainNameHandler}/>

                                    <lable>Train origin</lable>
                                    <input placeholder="trainOrigin" name="trainOrigin" className="form-control"
                                        value={this.state.trainOrigin} onChange={this.changetrainOriginHandler}/>

                                    <lable>Train destination</lable>
                                    <input placeholder="trainDestination" name="trainDestination" className="form-control"
                                        value={this.state.trainDestination} onChange={this.changetrainDestinationHandler}/>
                                    
                                     

                                    <lable>date of journey</lable>
                                    <input type="date" placeholder="date" name="date" className="form-control"
                                        value={this.state.date} onChange={this.changedateHandler}/>

                                    <lable>time</lable>
                                    <input type="time" placeholder="time" name="time" className="form-control"
                                        value={this.state.time} onChange={this.changetimeHandler}required/>


                                        <lable>price of ac1 tier</lable>
                                        <input type="number" placeholder="ac1Fare" name="ac1Fare" className="form-control"
                                            value={this.state.ac1Fare} onChange={this.changeac1FareHandler}required/>

                                        <lable>price of ac2 tier</lable>
                                        <input type="number" placeholder="ac2Fare" name="ac2Fare" className="form-control"
                                            value={this.state.ac2Fare} onChange={this.changeac2FareHandler}required/>
                                         <lable>price of ac3 tier</lable>
                                        <input type="number" placeholder="ac3Fare" name="ac3Fare" className="form-control"
                                            value={this.state.ac3Fare} onChange={this.changeac3FareHandler}required/>

                                        <lable>price of sleeper tier</lable>
                                        <input type="number" placeholder="sleeperFare" name="sleeperFare" className="form-control"
                                            value={this.state.sleeperFare} onChange={this.changesleeperFareHandler}required/>
    
                                    <lable>seats in ac1 tier</lable>
                                    <input placeholder="ac1" name="ac1" className="form-control"
                                        value={this.state.ac1} onChange={this.changeac1Handler}/>

                                    <lable>seats in ac2 tier</lable>
                                    <input placeholder="ac2" name="ac2" className="form-control"
                                        value={this.state.ac2} onChange={this.changeac2Handler}/>

                                    <lable>seats in ac3 tier</lable>
                                    <input placeholder="ac3" name="ac3" className="form-control"
                                        value={this.state.ac3} onChange={this.changeac3Handler}/>
                                    
                                    <lable>seats in sleeper tier</lable>
                                    <input placeholder="sleeper" name="sleeper" className="form-control"
                                        value={this.state.sleeper} onChange={this.changesleeperHandler}/>
                                </div>
                                <button className="btn btn-success" onClick={this.updatetrain} >Update Train</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px",paddingTop:"10px"}}>Cancel</button>
                    
                            </form>
                        </div>
                    </div>
                </div>
                 
            </div>
            
            </div>
        )
    
    }
    
}
