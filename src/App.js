import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Homes/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Error from "./Pages/Error/Error";
import About from "./Pages/About/About";
import Blog from "./Pages/Blogs/Blog";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/login/Login";
import ServiceDetails from "./Pages/Homes/Servicedetails/ServiceDetails";
import AuthProvider from "./Context/AuthProvider";
import PrivetRoute from "./Pages/login/PrivetRoute/PrivetRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import UserUpdate from "./Pages/userUpdate/UserUpdate";
import MyBooking from "./Pages/myBooking/MyBooking";
import UpdateUserService from "./Pages/updateUserService/UpdateUserService";
// import MyBooking from "./Pages/myBooking/MyBooking";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivetRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivetRoute>
            <PrivetRoute exact path="/users">
              <Dashboard></Dashboard>
            </PrivetRoute>
            <Route path="/mybooking">
              <MyBooking></MyBooking>
            </Route>
            <PrivetRoute exact path="/usersServices">
              <Dashboard></Dashboard>
            </PrivetRoute>
            <PrivetRoute exact path="/users/:id">
              <Dashboard></Dashboard>
            </PrivetRoute>
            <PrivetRoute exact path="/updateUser/:id">
              <UserUpdate></UserUpdate>
            </PrivetRoute>
            <PrivetRoute exact path="/usersServices/:id">
              <MyBooking></MyBooking>
            </PrivetRoute>
            <PrivetRoute exact path="/updateUsersServices/:id">
              <UpdateUserService></UpdateUserService>
            </PrivetRoute>
            <PrivetRoute path="/service/:id">
              <ServiceDetails></ServiceDetails>
            </PrivetRoute>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
