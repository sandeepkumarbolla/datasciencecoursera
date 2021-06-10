import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component"; 
import Profile from "./components/profile";
import BoardUser from "./components/board-user.component"; 
import BoardAdmin from "./components/board-admin.component";
import booking from "./components/booking";
import updateTrain from "./components/updateTrain";
import passengerdata from './components/passengerdata';
import search from './components/search'; 
import createTrain from './components/createTrain';
import bookingconfirm from './components/bookingconfirm';  
import index from './components/index';
import TrainSharpIcon from '@material-ui/icons/TrainSharp';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Admin from "./components/Admin";
import viewpnr from './components/viewpnr'
import ViewPassenger from "./components/ViewPassenger";
import ViewTrain from "./components/ViewTrain";
import PnrSearch from "./components/PnrSearch";
import GlobalPnr from "./components/GlobalPnr";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user, 
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (
      <div class="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            <TrainSharpIcon/>
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                <Typography>Home</Typography>
                
              </Link>
            </li>
            <li className="nav-item">
                <Link to={"/pnr"} className="nav-link">
                <Typography>pnr search</Typography>
                </Link>
              </li>

       

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                <Typography>Admin Board</Typography>
                </Link>
                
              </li>
              
            )}
             {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/addtrain"} className="nav-link">
                <Typography>add Train</Typography>
                </Link>
                
              </li>
              
            )}

              {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/passengers"} className="nav-link">
                <Typography>passengers</Typography>
                </Link>
                
              </li>
              
            )}

            {/* {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )} */}
            {currentUser && (
              <li className="nav-item">
                <Link to={"/booking"} className="nav-link">
                  <Typography>Booking</Typography>
                </Link>
              </li>
            )}

          </div>
          

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Typography>
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
                </Typography>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  
                <Typography>LogOut</Typography>
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                <Typography> Login</Typography>
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                <Typography>Sign Up</Typography>
                </Link>
              </li>
            </div>
          )}
        </nav>
        
        <div>
          <Switch>
            <Route exact path={["/", "/home"]} component={index} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} /> 
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/admingrid" component={Admin} />
            <Route path="/booking" component={booking}/>
            <Route path='/pnr' component={PnrSearch} />
            <Route path='/updatetrain/:trainNumber' component={updateTrain}/>
            <Route path='/viewpnr/:pnr' component={viewpnr}/>
            <Route path='/viewtrain/:id' component={ViewTrain}/>
            <Route path='/viewpassenger/:id' component={ViewPassenger}/>
            <Route path='/globalpnr/:id' component={GlobalPnr}/>
            <Route path = "/addtrain" component = {createTrain}></Route>
            <Route path = "/passengers" component = {passengerdata}></Route>
            <Route path = "/search" component = {search}></Route>
            <Route path="/confirmbooking/:trainNumber" component={bookingconfirm}></Route>
          </Switch>
        </div>
        </div>
      
    );
  }
}

export default App;
