import React, { useState, useEffect } from "react";
import axios from 'axios';
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
 
  const [passengerdata, setpassengerdata] = useState([])
  useEffect(() => { 
    passengerService.getPassengers().then((res) => {
      setpassengerdata(res.data)
      console.log(res.data)
      console.log(passengerdata) 
    }) 
}, [])

   
const updatehandler =(id) =>{
  history.push(`/viewpassenger/`+id)
}


// const deletehandler =(id) =>{
//   passengerservice.deleteTrain(id).then((res)=>{
//     alert('deleted')
//       if(res.data==="deleted"){
//           setdeleted(true)
//       }
//   })


// }
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
              <StyledTableCell> <Typography><strong>PNR number</strong></Typography></StyledTableCell>
              <StyledTableCell> <Typography><strong>Passenger name</strong></Typography></StyledTableCell>
              <StyledTableCell> <Typography><strong>Source</strong></Typography></StyledTableCell>
              <StyledTableCell> <Typography><strong>Destination</strong></Typography></StyledTableCell>  
              <StyledTableCell> <Typography><strong>Date of Journey</strong></Typography></StyledTableCell>
              <StyledTableCell> <Typography><strong>Fare</strong></Typography></StyledTableCell> 
              <StyledTableCell> <Typography><strong></strong></Typography></StyledTableCell> 
            </TableRow>
          </TableHead>
          <TableBody> 
            {
            passengerdata.map(
              passengers =>
                <TableRow key={passengers.id}>
                  <StyledTableCell><Typography>{passengers.pnr}</Typography></StyledTableCell>
                  <StyledTableCell><Typography>{passengers.passengerName}</Typography></StyledTableCell>
                  <StyledTableCell><Typography>{passengers.source}</Typography></StyledTableCell>
                  <StyledTableCell><Typography>{passengers.destination}</Typography></StyledTableCell>  
                  <StyledTableCell><Typography>{passengers.date}</Typography></StyledTableCell>
                  <StyledTableCell><Typography>{passengers.fare}</Typography></StyledTableCell> 
                  <StyledTableCell>
                  <Button className={classes.root} variant="contained" color="primary" onClick={() =>updatehandler(passengers.pnr)}><Typography><strong>View</strong></Typography></Button>
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







// import React, { Component } from 'react'
// import passengerService from '../services/passengerService'

// export default class passengerdata extends Component {
//     constructor(props){
//         super(props)

//         this.state={
//           passengers:[]
//         }
//         this.deletePassenger=this.deletePassenger.bind(this);
//         this.back=this.back.bind(this);
//     }
//     componentDidMount(){
//         passengerService.getPassengers().then((res)=>{
//             this.setState({passengers:res.data});
//         });
//       }
//       back(){
//           this.props.history.push('/admin');
//       }

//       deletePassenger(pnr){
//         passengerService.deletePassenger(pnr).then( res => {
//             this.setState({passengers: this.state.passengers.filter(passengerdata => passengerdata.pnr !== pnr)});
//            // alert("journey for pnr: "+pnr+" has been cancelled");
//         });
//     }
    


//     render() {
//         return (
//           <div>
//             <div
//       style={{
//         background:'grey',
//         display: 'flex',
//         justifyContent: 'center',
//         paddingTop:'40px',
//         alignItems: 'top',
//         height: '90vh',
        
//       }}
//     >
            
//         <div>
//         <h2 className='text-center'>passenger Data</h2>           
//             <div className='row'>
//             <table className='table table-dark table-striped'>
//               <thead>
//                 <tr>
//                   <th>passenger pnr</th>
//                   <th>Train number</th>
//                   <th>passenger name</th>
//                   <th>phone</th>
//                   <th>Date of Journey</th>
//                   <th>source</th>
//                   <th>destination</th>
//                   <th>coachType</th>
//                   <th>Seat No</th>
//                   <th>fare</th>
//                   <th>cancel ticket</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {
//                   this.state.passengers.map(
//                     passengers =>
//                     <tr key={passengers.id}>
//                       <td>{passengers.pnr}</td>
//                       <td>{passengers.trainNumber}</td>
//                       <td>{passengers.passengerName}</td>
//                       <td>{passengers.phone}</td>
//                       <td>{passengers.date}</td>
//                       <td>{passengers.source}</td>
//                       <td>{passengers.destination}</td>
//                       <td>{passengers.coachType}</td>
//                       <td>{passengers.seatNumber}</td>
//                       <td>{passengers.fare}</td>
//                       <td>
//                        <button style={{marginLeft: "10px"}} onClick={ () => this.deletePassenger(passengers.pnr)} className="btn btn-danger">cancel</button>
//                       </td> 
                      
//                     </tr>
                   
//                   )
//                 }
//               </tbody>
//             </table>
//             <button style={{marginLeft: "10px"}} onClick={()=> this.back()}  className="btn btn-outline-dark">back </button>
//           </div>
//           <br/><br/><br/><br/><br/><br/><br/><br/><br/>
//         </div> 
        
//         </div>
//         <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
//         </div>
//         )
//     }

// }