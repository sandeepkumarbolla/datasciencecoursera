  
import React, { useState, useEffect,useRef  } from "react";
import trainService from "../services/trainService";
import { useHistory, useParams } from 'react-router-dom';
import { Col, Row, Form } from "react-bootstrap";
import passengerService from '../services/passengerService';
import TextField from '@material-ui/core/TextField'; 
import Button from '@material-ui/core/Button';

 
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'; 
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'; 
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';




const darkTheme = createMuiTheme({
    palette: {
      responsiveFontSizes: true,
      roundedCorners: true,
      type: 'dark',
    },
  });

const useStyles = makeStyles({
    root: {
         
      maxWidth: 705,
    },
    media: {
      height: 140,
    },
    
  });
  
function GlobalPnr(props) {
    const classes = useStyles();
    const history=useHistory()

    const [open, setOpen] = React.useState(false);

    const [open1, setOpen1] = React.useState(false);
    const handleClickOpen = () => {
        console.log("update dialog box")
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleClickOpen1 = () => {
        console.log("delete dialog box")
        setOpen1(true);
      };
    
      const handleClose1 = () => {
        setOpen1(false);
      };

    
      const [pnr, setPnr] = useState("");
      const [trainNumber, setTrainNumber] = useState("");
      const [trainName, setTrainName] = useState("");
      const [passengerName, setPassengerName] = useState("");
      const [date, setDate] = useState("");
      const [Source, setSource] = useState("");
      const [destination, setDestination] = useState("");
      const [fare, setFare] = useState("");
      const [seatNumber, setSeatNumber] = useState("");
      const [phone, setPhone] = useState("");
      const [email, setEmail] = useState("");
      const [coachType, setCoachType] = useState("");
      const [passengerdata, setPassengerdata] = useState("");
      const [transaction, setTransaction] = useState("");
      const [username, setUsername] = useState("");
       
    
    let aa=useParams()

    useEffect(() => {
      //setstaion(props.match.params.id)
      console.log(aa.id) 
      passengerService.getPassengersbyid(aa.id).then((res)=>{
          //console.log(res.data.trainTiers.sleeper)             
          setPassengerdata(res); 
          console.log(res.data) 
          console.log(res.data.pnr) 
          setPnr(res.data.pnr);
          setTrainName(res.data.trainName)
          setTrainNumber(res.data.trainNumber)
          setDate(res.data.date)
          setSeatNumber(res.data.seatNumber)
          setCoachType(res.data.coachType)
          setEmail(res.data.email)
          setSource(res.data.source)
          setPhone(res.data.phone)
          setDestination(res.data.destination)
          setFare(res.data.fare)
          setPassengerName(res.data.passengerName)
          setTransaction(res.data.transactionID)
          setUsername(res.data.username)
  
          console.log(trainName)
         }); 
  }, []);
    return (
       
<div style={{paddingLeft:'350px',paddingTop:'10px',paddingBottom:'10px',backgroundColor:'#333538',height: '91.5vh'}}>
<ThemeProvider theme={darkTheme}>
        <Card className={classes.root}>
      <CardActionArea>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            P
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
             
            <Button onClick={ () => ( props.history.push(`/pnr`))}> <ArrowBackIosRoundedIcon/></Button>
          </IconButton>
        }
        title={username}
        subheader={"PNR: "+pnr} 
      />
        <CardContent>
                 <Typography gutterBottom variant="h5" component="h1">
                 
                        <Row>
        
                            <Col>Train Number </Col> 
                            <Col>:  {trainNumber }</Col>
                        </Row>
                        
                        <Row>
                            <Col> Train Name</Col>
                            <Col>:  {trainName }</Col>
                        </Row>
                        <Row>
                            <Col> User Name</Col>
                            <Col>:  {  username}</Col>
                        </Row> 
                        <Row>
                            <Col> Passenger Name</Col>
                            <Col>:  {passengerName }</Col>
                        </Row>
                        <Row>
                            <Col> Email</Col>
                            <Col>:  {email }</Col>
                        </Row>
                        <Row>
                            <Col> Contact Number</Col>
                            <Col>:  {phone }</Col>
                        </Row>
                        <Row>
                            <Col> From </Col>
                            <Col>:  { Source }</Col>
                        </Row>
                        <Row>
                            <Col> To </Col>
                            <Col>:  { destination }</Col>
                        </Row>
                        <Row>
                            <Col> Date of Journey </Col>
                            <Col>:  {  date }</Col>
                        </Row> 
                        <Row>
                            <Col> Seat Number</Col>
                            <Col>:  {  seatNumber}</Col>
                        </Row>
                        <Row>
                            <Col> Fare</Col>
                            <Col>:  {  fare}</Col>
                        </Row>
                        <Row>
                            <Col> Coach Type</Col>
                            <Col>:  {  coachType}</Col>
                        </Row>  
                        <Row>
                            <Col> Transaction ID</Col>
                            <Col>:  {  transaction}</Col>
                        </Row> 
                    </Typography> 
        </CardContent>
      </CardActionArea>
      <CardActions> 
       
      </CardActions>
    </Card>
    </ThemeProvider>
          </div>
    )
}

export default GlobalPnr
