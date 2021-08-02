import React from 'react';
import './css/App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import Login from './Components/Login/Login';
import Navbar from './Components/Product/Navbar';
import AddProduct from './Components/Product/AddProduct';
import EditProduct from './Components/Product/EditProduct';
import Home from './Components/Pages/Home'
import { Route, Switch } from "react-router-dom"
import ListProduct from './Components/Product/ListProduct';
import CustomerList from './Components/Customer/CustomerList';
import EditList from './Components/Customer/EditCustomer';
import SignUp from './Components/SignUp';
import EditCustomer from './Components/Customer/EditCustomer';

function App() {
  //let isHeader = false;
  
  const [isHeader, setHeader] =  React.useState(false)
  const isHeaderRequired = () => {
    return (window.location.pathname === "/"
      || window.location.pathname === "/singup"
      || window.location.pathname === "/login")
      ? false
      : true;
  }
  React.useEffect(() => {
    setHeader(isHeaderRequired())
   
  })
  return (
    <div className="App">
      {isHeader === true ? <Navbar /> : ""}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/product" component={Home} />
        <Route exact path="/customer" component={CustomerList} />
        <Route exact path="/customer/editcustomer" component={EditCustomer} />
        <Route exact path="/customer/editlist" component={EditList} />
        <Route exact path="/product/addproduct" component={AddProduct} />
        <Route exact path="/product/editproduct" component={EditProduct} />
        <Route exact path="/product/listproduct:id" component={ListProduct} />
      </Switch>
    </div>
  );
}

export default App;
