import React from 'react'
import { Route } from 'react-router-dom'
import Header from './header'
import Dashboard from './dashboard'
import Main from './main'
import Profile from './profile'

const Home = () => {
  return (
    <div>
      <Header />
      <Route exact path="/dashboard/" component={() => <Dashboard />} />
      <Route exact path="/dashboard/main" component={() => <Main />} />
      <Route exact path="/dashboard/profile/:username" component={() => <Profile />} />
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
