import React from 'react'
import {Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
const Cart=()=>{
	return(
	
	<>
	<Button><NavLink to="/checkout" style={{color:"white",textDecoration:"none"}}>Checkout</NavLink></Button>
	</>
	
	)
	}
	
export default Cart
