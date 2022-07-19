import React from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import HomeScreen from './components/Screens/HomeScreen/HomeScreen'
import './_app.scss'

export default function App() {
  return (
    <>
      <Header/>
      <div className="app-container">
        <Sidebar/>
        <div className="container-fluid app-main">
          <HomeScreen/>
        </div>
      </div>
    </>
  )
}
