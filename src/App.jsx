import React from 'react'
import "./App.css"
import { Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Home from './components/Home/Home'

const App = () => {
  return (
    <div className='App'>
      <Route exact path="/" >
        <Login/>
      </Route>
      <Route path="/home">
        <Home/>
      </Route>
    </div>
  )
}

export default App