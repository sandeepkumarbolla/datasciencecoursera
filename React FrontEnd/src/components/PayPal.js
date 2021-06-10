import React, { useRef, useEffect, useState } from "react";
import passengerService from '../services/passengerService';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Done } from "@material-ui/icons";
import { useHistory } from 'react-router-dom'; 
import AuthService from '../services/auth.service';


const useStyles = makeStyles({
  root: {
    minWidth: 975,
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

 function PayPal(props) {
  const history=useHistory()
  const [username, setUsername] = useState("");
  const classes = useStyles();
  const currentUser = AuthService.getCurrentUser();
  const {total,passengerdata} =props
  const paypal = useRef(); 
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: passengerdata.trainNumber,
                amount: {
                  currency_code: "CAD",
                  value: total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          console.log(order.id);
          setUsername(currentUser.username);
          console.log(username);

          passengerdata.username=currentUser.username;
          console.log(passengerdata);
          passengerdata.transactionID = order.id;
          console.log("payment Done..!!!!");
          console.log(passengerdata);
            passengerService.addPassenger(passengerdata).then(res =>{
       
       console.log(res.data)
        alert("Your ticket was booked successfully with PNR: "+res.data)
        console.log("ticket Booked successfully..!!!!")
        history.push(`/viewpassenger/`+res.data)
        //updatehandler(res.data);
        // return (
        //   <div className="alert alert-danger" role="alert">
        //     The password must be between 6 and 40 characters.
        //   </div>
        // );
         
    })
        },
        onError: (err) => {
          console.log(err);
          console.log("Payment failed.!!!");
        },
      })
      .render(paypal.current);
  }, []);



   
  return (
     <div style={{padding:"100px",backgroundColor:"#333538",height: '91.5vh'}}>
    <Card className={classes.root} style={{padding:"50px",backgroundColor:"grey"}}> 
    <div >
    <Alert severity="info"  style={{paddingBottom:'20px'}}>
  <AlertTitle>Book ticket</AlertTitle>
  click on your preferred payment method and proceed to pay
</Alert>
      {/* <h2>click on your preferred payment method and proceed to pay</h2><br/> */}
     <center><div ref={paypal} style={{paddingLeft:"70px",paddingTop:'20px'}}> </div></center>
    </div>
    </Card>
     </div>
  );
}

export default PayPal
 