import {Route} from 'react-router-dom'
import React,{useContext,useEffect,useState} from 'react'
import Header from './components/Header.js'
import Home from './components/Home.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './components/Card.js'
import './App.css'
import ItemDetail from './components/itemDetails.js'
import Cart from './components/Cart.js'
import Checkout from './components/Checkout.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Admin from './components/Admin.js'
import BookTable from './components/BookTable.js'
import Menu from './components/Menu.js'
import User from './components/User.js'
import ErrorPage from './components/ErrorPage.js'
import {Button} from 'react-bootstrap'
import {NavLink,Switch} from 'react-router-dom'
import {UserContext} from './context/userDetailContext.js'
import {LoginStateContext} from './context/loginStateContext.js'


function App() {
	
  return(<>
  <Header/>
  <Switch>
  <Route exact path="/">
  <Home/>
  </Route>
  <Route exact path="/login">
  <Login/>
  </Route>
  <Route exact path="/signup">
  <Signup/>
  </Route>
  <Route exact path="/itemdetails">
  <ItemDetail/>
  </Route>
  <Route exact path="/cart">
  <Cart/>
  </Route>
  <Route exact path="/checkout">
  <Checkout/>
  </Route>
  <Route exact path="/booktable">
  <BookTable/>
  </Route>
  <Route exact path="/menu">
  <Menu/>
  </Route>
  <Route exact path="/admin">
  <Admin/>
  </Route>
  <Route exact path="/userinfo">
  <User/>
  </Route>
  <Route>
  <ErrorPage/>
  </Route>
 </Switch>
  </>);

}

export default App;
