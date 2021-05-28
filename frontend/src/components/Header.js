import React,{useContext} from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import {LoginStateContext} from '../context/loginStateContext.js'
import {CartContext} from '../context/cartContext.js'
import {UserContext} from '../context/userDetailContext.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Header=()=>{
	const [login,setLogin]=useContext(LoginStateContext);
	const [cart,setCart]=useContext(CartContext);
	const [user,setUser]=useContext(UserContext);
	console.log(user)
	const saveCart=async()=>{
		console.log("here")
		let email=user.email
			const res=await	fetch("/savecart",{
						method:"POST",
					headers:{"Content-Type":"application/json"},
					body:JSON.stringify({
						cart,email
					})
				})
			console.log("here")
			const userData=await res.json();
			if(res.status!==201||!userData){
					window.alert("cart save unsuccessful")
				}else{
					window.alert("cart save success")
					setCart([]);
			}
		}
	
	const logout=()=>{
		console.log(cart)
		if(cart){
				localStorage.clear()
				saveCart()
			}
		
		
			setLogin(false)
		}
	return(<>
	<Navbar bg="light" expand="lg">
  <Navbar.Brand><NavLink to="/" style={{color:"black",textDecoration:"none"}}>Restaurant OP</NavLink></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink to="/" className="mx-2" style={{color:"black",textDecoration:"none"}}>Home</NavLink>
      <NavLink to="/login" className={"mx-2 "+(login?'d-none':'')} style={{color:"black",textDecoration:"none"}}>Login</NavLink>
      <NavLink to="/signup" className={"mx-2 "+(login?'d-none':'')} style={{color:"black",textDecoration:"none"}}>Signup</NavLink>
    </Nav>
    <span className={"username "+(login?'':'d-none')}>Hello! {user.name}</span>
   
    <Button className={"mr-1 bg-light border-0 "+(login?'':'d-none ')}>
    <NavLink to="/userinfo" style={{color:"black"}}>
    <FontAwesomeIcon icon={faUser} size="1x"/>				
	</NavLink>
	</Button>
	

   
	
	<Button className={"mr-1 bg-light border-0 cart-icon "+(login?'':'d-none ')}>
				<NavLink to="/checkout" style={{color:"black",textDecoration:"none"}}>
					<FontAwesomeIcon icon={faShoppingCart} size="1.5x" />
					<div className={""+(!cart?'':'cartIndicator')}></div>
				</NavLink>
	</Button>
	<Button className={"px-2 bg-light border-0 text-dark logout "+(login?'':'d-none')} onClick={logout}>Logout</Button>
</Navbar.Collapse>
</Navbar>
	
	</>)
	
	}
	
export default Header;