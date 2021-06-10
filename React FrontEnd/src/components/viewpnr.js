import React, { Component } from 'react'
import passengerService from '../services/passengerService' 
import { Col, Row, Form } from "react-bootstrap";

export default class viewpnr extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pnr: this.props.match.params.pnr,
            
            passengers:{}
        }
    }

    componentDidMount(){
         passengerService.getPassengersbyid(this.state.pnr).then(res=>{
             this.setState({passengers: res.data});
             console.log(res.data);
         })
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Passenger Details</h3>
                    <div className = "card-body">
                        <Row>
                            <Col><strong>PNR Number</strong> </Col> 
                            <Col>:  {this.state.passengers.pnr}</Col>
                        </Row>
                        <Row>
                            <Col><strong> Name of the passenger</strong> </Col>
                            <Col>:  { this.state.passengers.passengerName }</Col>
                        </Row>
                        <Row>
                            <Col> Train Number </Col>
                            <Col>:  { this.state.passengers.trainNumber }</Col>
                        </Row>
                        <Row>
                            <Col> From </Col>
                            <Col>:  { this.state.passengers.source }</Col>
                        </Row>
                        <Row>
                            <Col> TO </Col>
                            <Col>:  { this.state.passengers.destination }</Col>
                        </Row>
                        <Row>
                            <Col> Seat Number </Col>
                            <Col>:  { this.state.passengers.seatNumber }</Col>
                        </Row>
                        <Row>
                            <Col> Fare </Col>
                            <Col>:  { this.state.passengers.fare }</Col>
                        </Row>
                        <Row>
                            <Col> Date of Journey </Col>
                            <Col>:  { this.state.passengers.date }</Col>
                        </Row>
                    </div>

                </div>
           
            
            </div>
        )
    }
}
