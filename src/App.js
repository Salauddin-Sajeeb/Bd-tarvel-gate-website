
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFount from './components/Home/Error/NotFount';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './components/Context/AuthProvider';
import Login from './components/Home/Login/Login';
import Service from './components/Home/service/Service';
import PrivateRoute from './components/Home/PrivevateRoute/PrivateRoute';
import ServiceDetails from './components/Home/service/ServiceDetails/ServiceDetails';
import AddService from './components/Home/AddService/AddService';
import ManageOrder from './components/Home/ManageService/ManageOrder';
import Myorder from './components/Home/ManageService/Myorder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/services/:pd">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/adduser">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/manage">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <Route path="/services">
              <Service></Service>
            </Route>
            <Route path="/myorders">
              <Myorder></Myorder>
            </Route>
            <Route path="*">
              <NotFount></NotFount>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
