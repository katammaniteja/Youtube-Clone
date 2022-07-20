import React, { useState } from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import HomeScreen from './components/Screens/HomeScreen/HomeScreen'
import LoginScreen from './components/Screens/LoginScreen/LoginScreen'
import './_app.scss'

export default function App() {
  const [sidebar,toggleSidebar] = useState(false);

  const HandleSidebar = ()=>{
    toggleSidebar((value)=> !value);
  }

  return (
    // <>
    //   <Header HandleSidebar={HandleSidebar}/>
    //   <div className="app-container">
    //     <Sidebar sidebar={sidebar} HandleSidebar={HandleSidebar}/>
    //     <div className="container-fluid app-main">
    //       <HomeScreen/>
    //     </div>
    //   </div>
    // </>
    <LoginScreen/>
  )
}
