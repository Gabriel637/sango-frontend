// eslint-disable-next-line no-use-before-define
import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import OrderProvider from './context/Order';

function App() {
  return (
    <OrderProvider items={[]} totalValue={0}>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router >
      <GlobalStyles />
    </OrderProvider>
  )
}

export default App
