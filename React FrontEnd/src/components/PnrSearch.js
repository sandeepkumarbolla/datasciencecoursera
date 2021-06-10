import React, { useState, useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';  



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function PnrSearch() {
  const classes = useStyles();
  const [pnr, setPnr] = useState("");
  const history=useHistory()


  const onchangePNR = (e) => {
    const pnr = e.target.value;
    setPnr(pnr);
    console.log(pnr)
  };

  const cancel =() =>{
    console.log('search');
    history.push('/globalpnr/'+pnr)

        //props.history.push(`/`);
    }

  const search = (e) => {
    e.preventDefault();
    console.log('search')
    history.push('/viewpassenger/'+pnr)
  }
  return (
    <div style={{backgroundColor:'#333538',paddingTop:'25px',height: '91.5vh',color:'white'}}>
       <h3><center>Enter PNR number and enter search</center></h3>
    
       <center> <form  >
         
   
  <TextField type='number' color="primary" id="outlined-basic" label="enter PNR" variant="outlined" autoFocus onChange={onchangePNR}/> <br/><br/>
  <Button  variant="contained" color="primary"  onClick={cancel}>
  search
</Button>
</form> 
</center>
        
    </div>
  );
}


// import React, { Component }from 'react';

// import passengerService from '../services/passengerService'

// export default class contact extends Component {
//   constructor(props){
//     super(props)

//     this.state={
//       passengers:[],
      
//     }
//     this.pnrHandler=this.pnrHandler.bind(this);
//     this.search=this.search.bind(this);
//   }

//   search=(e)=>{
//     e.preventDefault();
//     // passengerService.getPassengersbyid(this.state.pnr).then((res)=>{
//     //   this.setState({passengers:res.data});
//     //   console.log(this.state.passengers);
//     this.props.history.push(`/viewpnr/${this.state.pnr}`);
//     // });
//   }
//   pnrHandler=(event)=>{
//     this.setState({pnr: event.target.value});
//   }
  
//   render(){
//    const {passengers}=this.state
//     return (
      
//       <div 
//       style={{
//         background:'grey',
//         display: 'flex',
//         justifyContent: 'center',
//         paddingTop:'40px',
//         alignItems: 'top',
//         height: '90vh',
        
//       }}
//       >
//         <div className="container" style={{paddingTop:'10px'}}>
//           <div className="row">
//             <div className="card col-md-6 offset-md-3 bg-dark" style={{background:'white'}}>
//               <div className="card-body">
//                 <form>
//                   <div className="row">
//                     <div className="form-group" style={{paddingRight:"100px"}}>    
//                       <input placeholder="Enter PNR" name="pnr" className="form-control"
//                         value={this.state.pnr} onChange={this.pnrHandler} />
//                     </div> 
//                     <button className="btn btn-success" onClick={this.search}>Search</button>    
//                   </div>
//                 </form>
//               </div>   
//             </div>
//           </div>
//           <div className="container" style={{paddingTop:'30px'}}>
       
//       </div>
//       </div>
//       </div>   
//     );
//   }
// }
 