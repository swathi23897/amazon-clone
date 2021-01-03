import React, { useEffect } from 'react';
import Header from './Header'
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import Payment from './Payment'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Orders from './Orders'
function App() {

  const promise = loadStripe('pk_test_51HQz8aIzzETFhGbQVCXKb0VRTEfUv95AD2k3u1o7ChgV111tAHCQAumGUrFT8FTa7n8fyXP0nbmnzYUnotOdYdE200n3dT0ZSK');
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    // will run only once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log("user is >>", authUser)
      if (authUser) {
        // user just logged in / was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })


      }
      else {
        // user logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (
    // BEM
    <Router>
      <div className="app">

        <Switch>

          <Route exact path="/">
            <Header />
            <Home />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>


          <Route path="/login">
            <Login />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>


          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
       


          </Route>




        </Switch>


      </div>
    </Router>
  );
}

export default App;
