 
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
  
function ViewTrain(props) {
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

    
    const [traindata,settraindata]=useState("");
    const [trainNumber, settrainNumber] = useState("");
  const [trainName, settrainName] = useState("");
  const [source, setsource] = useState("");
  const [trainDestination, settrainDestination] = useState("");
  const [date, setdate] = useState("");
  const [time,settime] = useState("");
  const [ac1Fare,setac1Fare] = useState("");
  const [ac2Fare,setac2Fare] = useState("");
  const [ac3Fare,setac3Fare] = useState("");
  const [sleeper,setsleeper] = useState("");
  const [ac1,setac1] = useState("");
  const [ac2,setac2] = useState("");
  const [ac3,setac3] = useState("");
  const [sleeperFare,setsleeperFare] = useState("");
    let aa=useParams()

    useEffect(() => {
      //setstaion(props.match.params.id)
      console.log(aa.id) 
      trainService.getTrainsById(aa.id).then((res)=>{
          console.log(res.data.trainTiers.sleeper)             
          settraindata(res); 
          console.log(traindata.date) 
  
  
          settrainName(res.data.trainName)
          settrainNumber(res.data.trainNumber)
          setdate(res.data.date)
          settime(res.data.time)
          setsource(res.data.trainOrigin)
          settrainDestination(res.data.trainDestination)
          setac1Fare(res.data.trainFares.ac1Fare)
          setac2Fare(res.data.trainFares.ac2Fare)
          setac3Fare(res.data.trainFares.ac3Fare)
          setsleeperFare(res.data.trainFares.sleeperFare)
          setac1(res.data.trainTiers.ac1)
          setac2(res.data.trainTiers.ac2)
          setac3(res.data.trainTiers.ac3)
          setsleeper(res.data.trainTiers.sleeper)
          
         
          console.log(trainName)
         }); 
  }, []);
    return (
        // <div>
        //         <br></br>
        //         <div className = "card col-md-6 offset-md-3 text-white bg-dark">
        //             <h3 className = "text-center"> Train Details</h3>
        //             <div className = "card-body">
                        // <Row>
                        //     <Col><strong>Train Number</strong> </Col> 
                        //     <Col>:  { trainNumber}</Col>
                        // </Row>
                        
                        // <Row>
                        //     <Col><strong> Train Name</strong> </Col>
                        //     <Col>:  {trainName }</Col>
                        // </Row>
                        // <Row>
                        //     <Col> <strong>From</strong> </Col>
                        //     <Col>:  { source }</Col>
                        // </Row>
                        // <Row>
                        //     <Col> <strong>To</strong> </Col>
                        //     <Col>:  { trainDestination }</Col>
                        // </Row>
                        // <Row>
                        //     <Col><strong> Seats in Ac Tier 1</strong></Col>
                        //     <Col>:  {  ac1}</Col>
                        // </Row>
                        // <Row>
                        //     <Col> Fare </Col>
                        //     <Col>:  {  }</Col>
                        // </Row>
                        // <Row>
                        //     <Col> Date of Journey </Col>
                        //     <Col>:  { date  }</Col>
                        // </Row>
        //                 <Button>click here</Button>
        //             </div>

        //         </div>
           
            
        //     </div>
<div style={{paddingLeft:'250px',paddingTop:'10px',paddingBottom:'10px',backgroundColor:'#333538'}}>
<ThemeProvider theme={darkTheme}>
        <Card className={classes.root}>
      <CardActionArea>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings"> 
            <Button onClick={ () => ( props.history.push(`/admin`))}> <ArrowBackIosRoundedIcon/></Button>
          </IconButton>
        }
        title={trainName}
        subheader={date}
      />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        <Row> 
                            <Col>Train Number </Col> 
                            <Col>:  { trainNumber}</Col>
                        </Row>
                        
                        <Row>
                            <Col> Train Name</Col>
                            <Col>:  {trainName }</Col>
                        </Row>
                        <Row>
                            <Col> From </Col>
                            <Col>:  { source }</Col>
                        </Row>
                        <Row>
                            <Col> To </Col>
                            <Col>:  { trainDestination }</Col>
                        </Row>
                        <Row>
                            <Col> Date of Journey </Col>
                            <Col>:  { date  }</Col>
                        </Row>
                        <Row>
                            <Col>Starting Time</Col>
                            <Col>:  {time}</Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col> Seats in Ac Tier 1</Col>
                            <Col>:  {  ac1}</Col>
                        </Row>
                        <Row>
                            <Col> Seats in Ac Tier 2</Col>
                            <Col>:  {  ac2}</Col>
                        </Row>
                        <Row>
                            <Col> Seats in Ac Tier 3</Col>
                            <Col>:  {  ac3}</Col>
                        </Row>
                        <Row>
                            <Col> Seats in Sleeper Tier</Col>
                            <Col>:  {  sleeper}</Col>
                        </Row>
                       <br/>
                       
                        <Row>
                            <Col> price of AC Tier 1 </Col>
                            <Col>:  { ac1Fare }</Col>
                        </Row>
                        <Row>
                            <Col> price of AC Tier 2 </Col>
                            <Col>:  { ac2Fare }</Col>
                        </Row>
                        <Row>
                            <Col> price of AC Tier 3 </Col>
                            <Col>:  {ac3Fare}</Col>
                        </Row>
                        <Row>
                            <Col> price of Sleeper Tier </Col>
                            <Col>:  { sleeperFare }</Col>
                            
                        </Row>
                    </Typography> 
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Update
        </Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure do you want to make changes in train details?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            As you're an Admin of this Website you are allowed to make changes in the Website.
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            i'm not 
          </Button>
          <Button variant="contained" color="primary" onClick={ () => ( props.history.push(`/updatetrain/`+trainNumber))} color="primary" autoFocus>
            proceed
          </Button>
        </DialogActions>
      </Dialog>
        <div style={{paddingLeft:'500px'}}>
        <Button variant="contained" color="secondary"  onClick={handleClickOpen1}>
          Delete
        </Button>
        </div>

        <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure do you want to remove this train?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            As you're an Admin of this Website you are allowed to make changes in the Website.
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1} color="primary">
            i'm not 
          </Button>
          <Button variant="contained" color="secondary" onClick={()=>(
            trainService.deleteTrain(trainNumber).then((res)=>{
              console.log(res.data)
              history.push('/admin')
            })
          )}   autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      </CardActions>
    </Card>
    </ThemeProvider>
          </div>
    )
}

export default ViewTrain
