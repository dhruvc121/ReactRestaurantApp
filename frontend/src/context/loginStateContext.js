import React,{useState} from 'react';

export const LoginStateContext=React.createContext()

const LoginStateContextProvider=(props)=>{
		const [loginState,setLoginState]=useState(true)
		return(
			<LoginStateContext.Provider value={[loginState,setLoginState]}>
			{props.children}
			</LoginStateContext.Provider>
		)
	}
export default LoginStateContextProvider
