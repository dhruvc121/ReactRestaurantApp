import React,{useContext,useEffect,useState} from 'react'
import {Button,Col,Container,Row} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import logo from '../'
import {UserContext} from '../context/userDetailContext.js'
import {LoginStateContext} from '../context/loginStateContext.js'

const Home=()=>{
	const [user,setUser]=useContext(UserContext)
	const [login,setLogin]=useContext(LoginStateContext);
	let getToken=""
	//const [token,setToken]=useState("");
useEffect(()=>{
		getToken=localStorage.getItem('token')
		if(getToken && !login){
		//setToken(getToken)
		autoLogin()}
	},[])
	const autoLogin=async()=>{
		let tkn=getToken;
		console.log("here")
		try{
			const res=await	fetch("/autologin",{
						method:"POST",
					headers:{"Content-Type":"application/json"},
					body:JSON.stringify({tkn,login})
				})
			const userData=await res.json();
			setUser(userData)
			setLogin(true)
			}catch(err){
				console.log(err)
				}
		}
	
	return(
	<>
	<Container className="col-lg-4 col-sm-12 home-container shadow">
					<h1>Welcome to Restaurant OP</h1><br/>
					<h3>We aim to provide best service at users comforts!!</h3>
					<br/>
					<br/>
					<Button className="ml-1"><NavLink to="/booktable" style={{color:"white"}}>Book a table</NavLink></Button>
					<Button className="order-btn float-right mr-2" id="home_order"><NavLink to="/menu" style={{color:"white"}}>Order Now</NavLink></Button>
	</Container>
	</>)
	}

export default Home;