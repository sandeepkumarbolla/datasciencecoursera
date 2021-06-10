import React, { useState, useEffect,useRef  } from "react";
import AuthService from "../services/auth.service";

import UserService from "../services/user.service"; 
import { TableRow, Typography } from "@material-ui/core";
import {withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead'; 
import Paper from '@material-ui/core/Paper';    
import { useHistory } from 'react-router-dom';  
import passengerService from "../services/passengerService";

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';  
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Row } from "react-bootstrap";

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});



const StyledTableCell = withStyles((theme) => ({
  root: {
    minWidth: 0,
    backgroundColor:'grey'
  },
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    fontFamily:'Times New Roman", Times, serif',
    fontWeight:'bold',
     
    color:'black',
    background:'grey'
    
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  root: {
    color: theme.palette.text.secondary,
  },
}));

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  const classes = useStyles();
  const [passengerdata, setpassengerdata] = useState([])  
  const history=useHistory()
  const bull = <span className={classes.bullet}>•</span>;

  useEffect(() => { 
    passengerService.getPnrByUserName(currentUser.username).then((res)=>{
      console.log(res.data);
      setpassengerdata(res.data)
    })
  }, [])

  const logOut = () => {
    AuthService.logout();
    history.push('/login');
  };

  if(passengerdata==null){
    return (
      <div>
        <h3><center>you haven't booked any ticket yet</center></h3>
      </div>
    )
  }
  else
    { 
      return ( 
        <div 
        style={{
          backgroundColor:'#333538',
          fontFamily:'sanSerif', 
          display: 'flex', 
          alignItems: 'top',
          height: '91.5vh',
          paddingTop:'10px',
          paddingLeft:'80px',
          paddingRight:'80px',
          paddingBottom:'20px'
        
      }}
    >
    
   <Grid container component="main" className={classes.root} >
    <CssBaseline />
    <Grid item xs={12} sm={8} md={5} style={{paddingRight:'10px'}}>
     
    <Card className={classes.root} variant="outlined" style={{color:'white' ,
    backgroundColor:'grey',
   paddingRight:'10px',
   paddingBottom:'10px'
  }}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <h3>Welcome Back <strong>{currentUser.username}</strong></h3>
           
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
          E-Mail : {currentUser.email}
        </Typography>
        <Typography variant="h5" component="h2">
          <marquee>The ministry has urged the passengers to check and read state-issued covid protocols before travelling as every state has its own specific sets of guidelines
</marquee>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Important
        </Typography>
        <Typography variant="body2" component="p">
          Keep your Hands sanitized always where ever you go
          <br />
          {'Always wear mask and stay safe'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button  variant="contained" size="large" color="primary" onClick={()=>(history.push('/booking'))}>Book Tickets?</Button>
      </CardActions>
    </Card>
    <div style={{paddingTop:'10px'}}>
    <Card className={classes.root} variant="outlined" style={{color:'white' ,
    backgroundColor:'grey',
   paddingRight:'1px',
   paddingTop:'10px'
  }}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <h1> <strong><center>Notifications</center></strong></h1>
           
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
          E-Mail : {currentUser.email}
        </Typography>
        <Typography variant="h5" component="h1">
          <marquee> Abide with the state government rules and regulation to avoid  unessesary troubles
</marquee>
        </Typography>
        <Typography color="textSecondary">
          currently you dont have any important Notifications
        </Typography>
        <Typography color="textSecondary">
          We will notify you once it is available
        </Typography>
        <Typography color="textSecondary">
          Thanks for being our customer
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained"  color="secondary" onClick={logOut}>LOGOUT as {currentUser.username}?</Button>
      </CardActions>
    </Card>   
    </div>
    </Grid>
    <Grid item xs={false} sm={4} md={7} component={Paper} elevation={6} square style={{backgroundColor:'rgba(255, 255, 255, 0.08)'}}>
    
    <TableContainer component={Paper} >
    
      <Table className={classes.table} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <StyledTableCell> <Typography><strong>PNR number</strong></Typography></StyledTableCell> 
            <StyledTableCell> <Typography><strong>Source</strong></Typography></StyledTableCell>
            <StyledTableCell> <Typography><strong>Destination</strong></Typography></StyledTableCell>  
            <StyledTableCell> <Typography><strong>Date of Journey</strong></Typography></StyledTableCell> 
            <StyledTableCell> <Typography><strong> </strong></Typography></StyledTableCell> 
          </TableRow>
        </TableHead>
        <TableBody> 
          {
          passengerdata.map(
            passengers =>
              <TableRow key={passengers.id}>
                <StyledTableCell><Typography>{passengers.pnr}</Typography></StyledTableCell> 
                <StyledTableCell><Typography>{passengers.source}</Typography></StyledTableCell>
                <StyledTableCell><Typography>{passengers.destination}</Typography></StyledTableCell>  
                <StyledTableCell><Typography>{passengers.date}</Typography></StyledTableCell> 
                <StyledTableCell>
                <Button  variant="outlined" color="primary" onClick={() =>(history.push('/viewpassenger/'+passengers.pnr))}><Typography><strong>View</strong></Typography></Button>
                      {/* <Button variant="contained" color="primary" onClick={handleClick(passengers.trainNumber)}>Update</Button> */}
                      {/* onClick={()=>this.props.history.push(`/updatetrain/${passengers.trainNumber}`)} */}
                      {/* <button onClick={ () => this.editTrain(passengers.trainNumber)} className="btn btn-info">Update </button> */}
                </StyledTableCell> 
              </TableRow>
              )
          }
        </TableBody>
      </Table>
    </TableContainer>  
    </Grid>
    </Grid> 
    </div>
    );
  };
}

export default Profile;