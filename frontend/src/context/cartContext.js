import React,{useState} from 'react';

export const CartContext=React.createContext()




const CartContextProvider=(props)=>{
		const [cart,setCart]=useState([])
		const increase=(index)=>{
		  cart[index].quantity++
		  setCart(cart)
		  console.log(cart[index].quantity)
		}
const decrease=(index)=>{
		  cart[index].quantity--
			setCart(cart)
		}
		return(
			<CartContext.Provider value={[cart,setCart]}>
			{props.children}
			</CartContext.Provider>
		)
	}

export default CartContextProvider

