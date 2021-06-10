import React, { useState, useEffect } from "react";
import axios from 'axios';
import UserService from "../services/user.service";
import trainService from "../services/trainService";
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

import authHeader from '../services/auth-header';

const StyledTableCell = withStyles((theme) => ({
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

const BoardAdmin = () => {
  const history=useHistory()
  const [deleted,setdeleted]= useState(false)

  const classes = useStyles();
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);
 
  const [traindata, settraindata] = useState([])
  useEffect(() => { 
    axios.get("http://localhost:8081/admin/findAllTrains").then((res) => {
      settraindata(res.data)
      console.log(res.data)
      console.log(traindata) 
    }) 
}, [])

   
const updatehandler =(id) =>{
  history.push(`/viewtrain/`+id)
}


const deletehandler =(id) =>{
  trainService.deleteTrain(id).then((res)=>{
    alert('deleted')
      if(res.data==="deleted"){
          setdeleted(true)
      }
  })


}
const alerts =() =>{
  if(deleted){
  return(
      <div class="alert alert-warning" role="alert">
    Successfully delete 
  </div>)}
}
 

  if(content==="Admin Board."){
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
      <TableContainer component={Paper}>
        <Table className={classes.table} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell> <Typography><strong>Train number</strong></Typography></StyledTableCell>
              <StyledTableCell> <Typography><strong>Train name</strong></Typography></StyledTableCell>
              <StyledTableCell> <Typography><strong>Source</strong></Typography></StyledTableCell>
              <StyledTableCell> <Typography><strong>Destination</strong></Typography></StyledTableCell>  
              <StyledTableCell> <Typography><strong>Date of Journey</strong></Typography></StyledTableCell>
              <StyledTableCell> <Typography><strong>time</strong></Typography></StyledTableCell> 
              <StyledTableCell> <Typography><strong></strong></Typography></StyledTableCell> 
            </TableRow>
          </TableHead>
          <TableBody> 
            {
            traindata.map(
              trains =>
                <TableRow key={trains.id}>
                  <StyledTableCell><Typography>{trains.trainNumber}</Typography></StyledTableCell>
                  <StyledTableCell><Typography>{trains.trainName}</Typography></StyledTableCell>
                  <StyledTableCell><Typography>{trains.trainOrigin}</Typography></StyledTableCell>
                  <StyledTableCell><Typography>{trains.trainDestination}</Typography></StyledTableCell>  
                  <StyledTableCell><Typography>{trains.date}</Typography></StyledTableCell>
                  <StyledTableCell><Typography>{trains.time}</Typography></StyledTableCell> 
                  <StyledTableCell>
                  <Button className={classes.root} variant="contained" color="primary" onClick={() =>updatehandler(trains.trainNumber)}><Typography><strong>View</strong></Typography></Button>
                        {/* <Button variant="contained" color="primary" onClick={handleClick(trains.trainNumber)}>Update</Button> */}
                        {/* onClick={()=>this.props.history.push(`/updatetrain/${trains.trainNumber}`)} */}
                        {/* <button onClick={ () => this.editTrain(trains.trainNumber)} className="btn btn-info">Update </button> */}
                  </StyledTableCell> 
                </TableRow>
                )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    );
   }
    else
    {
      return(
        <div
        style={{
          background:'grey', 
          justifyContent: 'center',
          paddingTop:'200px',
          color:'white',
          height: '90vh', 
        }}>
        <center><h5>SORRY</h5></center>
        <center>You ARE not authorized to access this content</center></div>
      )
      
    }
                
  }


export default BoardAdmin

