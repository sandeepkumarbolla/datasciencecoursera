import React, { useState, useEffect,useRef  } from "react";
import trainService from "../services/trainService";
import { useHistory, useParams } from 'react-router-dom';
import { Col, Row, Form } from "react-bootstrap";
import passengerService from '../services/passengerService';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select'; 
import { Alert, AlertTitle } from '@material-ui/lab';
import { isEmail } from "validator";
import CheckButton from "react-validation/build/button";

import PayPal from "../components/PayPal";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'; 
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AuthService from '../services/auth.service';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const darkTheme = createMuiTheme({
  palette: {
    responsiveFontSizes: true,
    roundedCorners: true,
    type: 'dark',
  },
});

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      color: theme.palette.text.secondary,
    },

    table: {
        minWidth: 650,
         
      },
        root1: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      }
      },
    image: {
       // backgroundColor:'black',
      //backgroundImage: 'url(https://images.unsplash.com/photo-1532105956626-9569c03602f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//         width: '25ch',
//       },
//     },
//   }));

const Bookingconfirm=(props)=>{
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    // setOpen(true);
    setCheckOut(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const currentUser = AuthService.getCurrentUser();
   
  const form = useRef();
  // const checkBtn = useRef();
   const classes = useStyles();
  //   const [successful, setSuccessful] = useState(false);
  // const [message, setMessage] = useState("");

  const [passengernameError,setpassengernameError]=useState(" ");
  const [phoneError,setphoneError]=useState(" ");
  const [emailError,setemailError]=useState(" ");

  // let passengernameError=" ";
  // let phoneError=" ";
  // let emailError=" ";

    const [traindata,settraindata] = useState("");
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
  const [fare,setFare] = useState("select coach type*");
  const [coachType, setcoachType] = useState("");
  const [passengerName, setpassengerName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState(""); 
  const [username, setUsername] = useState("");
  const [checkout, setCheckOut] = useState(false);

  const onChangetrainNumber = (e) => {
    const trainNumber = e.target.value;
    settrainNumber(trainNumber);
  };
  const onChangetrainName = (e) => {
    const trainName = e.target.value;
    settrainName(trainName);
  };
  const onChangesource = (e) => {
    const source = e.target.value;
    setsource(source);
  };
  const onChangedestination = (e) => {
    const trainDestination = e.target.value;
    settrainDestination(trainDestination);
  };
  const onChangedate = (e) => {
    const date = e.target.value;
    setdate(date);
  };
 

  const onChangecoachType = (e) => {
    const coachType = e.target.value;
    setcoachType(coachType);
    if(coachType==="AC1"){
      setFare(ac1Fare);
    }else if(coachType==="AC2"){
        setFare(ac2Fare)
    }
    else if(coachType==="AC3"){
      setFare(ac3Fare)
  }else if(coachType==="sleeper"){
    setFare(sleeperFare)
  }

  };
  const onChangepassengerName = (e) => {
    const passengerName = e.target.value;
    setpassengerName(passengerName);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setemail(email);
  };
  const onChangephone = (e) => {
    const phone = e.target.value;
    setphone(phone);
  };

  let passengerdata = {trainNumber: trainNumber , 
    pnr:0,
    trainName: trainName, 
    source: source, 
    destination: trainDestination,  
    date: date, 
    coachType: coachType,
    passengerName: passengerName,
    email: email,
    phone: phone
};

const cancel =() =>{
  console.log(currentUser.username);
      props.history.push(`/booking`);
  }

  const handleRegister = (e) => {
     e.preventDefault();
    // console.log(passengerdata)
    // setMessage("");
    // setSuccessful(false);
    //  // console.log(res.data.date)
    //  form.current.validateAll();
    setUsername(currentUser.username);
    console.log(username);
    passengerdata.username=username;

    if(passengerName.length===0){
      setpassengernameError("passenger name shouldn't be empty..!");
     // passengernameError="passenger name shouldn't be empty..!";
    }
    else{
       setpassengernameError("");
    }
    if(email.length===0){
      
      setemailError("Email shouldn't be empty..!");
     // emailError="Email shouldn't be empty..!";
    }
    else if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
      setemailError("Enter proper email id");
    }
    else{
       setemailError("");
    }

    if(phone.length===0){
       setphoneError("phone number shouldn't be empty..!");
    }else{
      setphoneError("");
    }

      console.log("hello this is handle register");


      if(passengernameError===""&&emailError===""&&phoneError===""){
        // setCheckOut(true);
        setOpen(true);
      }
     
    //   passengerService.addPassenger(passengerdata).then(res =>{
       
       
    //     alert("train booked successfully")
    //     // this.props.history.push('/');
    //     // this.setState({
    //     //     message: res.data.message,
    //     //     successful: true
            
    //     //   });
         
    //      // console.log(message)
    // })
  }
  let aa=useParams()

  useEffect(() => {
    //setstaion(props.match.params.id)
    console.log(aa.trainNumber) 
    trainService.getTrainsById(aa.trainNumber).then((res)=>{
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

// const validEmail = (value) => {
//   if (!isEmail(value)) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This is not a valid email.
//       </div>
//     );
//   }
// };

// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };
// //       }

    return (
        <div className="App">
        {checkout ? (
          <PayPal  total={fare} passengerdata={passengerdata}/>
        ) : (
        
 

<ThemeProvider theme={darkTheme}>
<Grid container component="main" className={classes.root}>

<CssBaseline />
<Grid item xs={12} sm={4} md={7} component={Paper} className={classes.image} style={{padding:'30px',backgroundColor:'#333538'}} >
<TableContainer component={Paper} className="danger">
      <Table className={classes.table} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell><h5>Train Name</h5></TableCell>
            <TableCell align="left"><h5>{trainName}</h5></TableCell>
            {/* <TableCell align="center">To</TableCell> 
            <TableCell align="center">date of journey</TableCell>
            <TableCell align="center">Time</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
           
            <TableRow >
              <TableCell component="th" scope="row">
                <h5>Train Number</h5>
              </TableCell>
              <TableCell align="left"><h5>{trainNumber}</h5></TableCell>
              {/* <TableCell align="centre"><h5>{trainDestination}</h5></TableCell>
              <TableCell align="right"><h5>{date}</h5></TableCell>
              <TableCell align="right"><h5>{time}</h5></TableCell> */}
            </TableRow>
         
        </TableBody>
        <TableBody>
           
            <TableRow >
              <TableCell component="th" scope="row">
                <h5>From</h5>
              </TableCell>
              <TableCell align="left"><h5>{source}</h5></TableCell>
              {/* <TableCell align="centre"><h5>{trainDestination}</h5></TableCell>
              <TableCell align="right"><h5>{date}</h5></TableCell>
              <TableCell align="right"><h5>{time}</h5></TableCell> */}
            </TableRow>
         
        </TableBody>
        <TableBody>
           
            <TableRow >
              <TableCell component="th" scope="row">
                <h5>To</h5>
              </TableCell>
              <TableCell align="left"><h5>{trainDestination}</h5></TableCell>
              
            </TableRow>
         
        </TableBody>
        <TableBody>
           
           <TableRow >
             <TableCell component="th" scope="row">
               <h5>date</h5>
             </TableCell>
             <TableCell align="left"><h5>{date}</h5></TableCell>
             
           </TableRow>

           <TableRow >
             <TableCell component="th" scope="row">
               <h5>fare</h5>
             </TableCell>
             <TableCell align="left"><h5>{fare}</h5></TableCell>
             
           </TableRow>
           
           <TableRow >
             <TableCell component="th" scope="row">
               <h5>seats in AC tier1</h5>
             </TableCell>
             <TableCell align="left"><h5>{ac1}</h5></TableCell>
             
           </TableRow>
           <TableRow >
             <TableCell component="th" scope="row">
               <h5>seats in ac tier2</h5>
             </TableCell>
             <TableCell align="left"><h5>{ac2}</h5></TableCell>
             
           </TableRow>
           <TableRow >
             <TableCell component="th" scope="row">
               <Typography>
               <h5>seats in ac tier 3</h5>
               </Typography>
             </TableCell>
             <TableCell align="left"><h5>{ac3}</h5></TableCell>
             
           </TableRow>
           <TableRow >
             <TableCell component="th" scope="row">
               <h5>seats in sleeper</h5>
             </TableCell>
             <TableCell align="left"><h5>{sleeper}</h5></TableCell>
             
           </TableRow>
        
       </TableBody>
      </Table>
    </TableContainer>
</Grid>
{/* <h2>hello</h2> */}
<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}  >

<div className={classes.paper} align="center">
<Alert severity="info">
  <AlertTitle>Book ticket</AlertTitle>
  Enter contact details and proceed to pay 
</Alert>
<br/>
    {/* <Typography component="h1" variant="h5">
      enter details to book ticket
    </Typography> */}
<Form  className={classes.root1}  ref={form}> 
                                     <InputLabel id="demo-simple-select-label"><Typography>select CoachType</Typography></InputLabel>
                                <Select
                                //labelId="demo-simple-select-label"
                                //id="demo-simple-select"

                                variant="outlined"
                                name="coachType"   
                                value={coachType} onChange={onChangecoachType}
                                required
                                >
                                     
                                <MenuItem value={"AC1"}>AC tier 1</MenuItem>
                                <MenuItem value={"AC2"}>AC tier 2</MenuItem>
                                <MenuItem value={"AC3"}>AC tier 3</MenuItem>
                                <MenuItem value={"sleeper"}>sleeper tier</MenuItem>
                                </Select>
                                {/* <lable>select coach type</lable>
                                <select placeholder="coachType" name="coachType"  
                                value={coachType} onChange={onChangecoachType}>
                                    <option>AC1</option>
                                    <option>AC2</option>
                                    <option>AC3</option>
                                    <option>sleeper</option>
                                </select> */}
                              
                                {/* <lable>Name of the passenger:</lable> */}
                                <TextField id="outlined-basic" label="PassengerName"  name="passengerName" variant="outlined"  
                                    value={passengerName} onChange={onChangepassengerName} required />
                                    <div style={{fontSize:10,color:"white"}}>{passengernameError}</div>
                                     
                                {/* <input placeholder="passengerName" name="passengerName" className="form-control"
                                    value={passengerName} onChange={onChangepassengerName}  /> */}

                                {/* <lable>Email:</lable> */}
                                <TextField id="outlined-basic"  type="email" label="Enter Email" name="email" variant="outlined"
                                    value={email} onChange={onChangeEmail} required />
                                    <div style={{fontSize:10,color:"white"}}>{emailError}</div>
                                      
                                {/* <lable>phone number: </lable> */}
                                <TextField id="outlined-basic" type="number" pattern="[789][0-9]{9}" label="phone" name="phone"  variant="outlined"
                                    value={phone} onChange={onChangephone} required />
                                    <div style={{fontSize:10,color:"white"}}>{phoneError}</div>
                                    <br/>
                            
                            <Button   variant="contained" color="primary"    onClick={handleRegister}   >Make Payment</Button>

                            <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-slide-title"
                            aria-describedby="alert-dialog-slide-description"
                          >
                            <DialogTitle id="alert-dialog-slide-title">{"Make sure you have entered correct contact details!"}</DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-slide-description">
                                These contact details are used to share the booking details such as seat number and pnr number
                                for handy
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleClose} color="primary">
                                wait
                              </Button>
                              <Button onClick={handleClickOpen} color="primary">
                                proceed
                              </Button>
                            </DialogActions>
                          </Dialog>
                                              
                            <Button variant="contained" color="secondary"  onClick={cancel}  >Cancel booking</Button>
                            {/* <CheckButton style={{ display: "none" }} ref={checkBtn} /> */}
                        
                            {/* {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )} */}
                        </Form> 
                    </div>
                </Grid>
            </Grid>
            </ThemeProvider>

            )}
            </div>
           
    )
}

export default Bookingconfirm







 