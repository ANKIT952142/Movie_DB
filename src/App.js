import React from 'react'
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom'
import Error from './Error'
import Home from './Home'

import Movie from './SingleMovie'

function App() {
  return(
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        
        <Route path='/movies/:id' ><Movie/></Route>
      

          <Route path='*'>
            <Error/>
          </Route>
      </Switch>
    </Router>
  )
}

export default App
