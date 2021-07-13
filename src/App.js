import React, {useEffect, Suspense} from 'react'
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import {AnimatePresence} from 'framer-motion'

import Header from './components/Header/Header'
import Layout from "./components/UI/Layout";

const AllQuote = React.lazy(() => import('./pages/AllQuote'))
const NewQuote = React.lazy(() => import('./pages/NewQuote'))
const QuoteDetails = React.lazy(() => import('./pages/QuoteDetails'))

function App() {

  const location = useLocation();

  useEffect(() => {
   console.log('Made By'); console.log('%cNitin', 'background-color: black; font-size: 30px; color: #fff');
  },[])

  return (<>
    <Header />
    <Suspense fallback={<p></p>}>
      <Layout>
      <AnimatePresence exitBeforeEnter >
        <Switch location={location} key={location.key}>
          <Route path='/' exact>
            <Redirect to='/quotes'/>
          </Route>
          <Route path="/quotes" component={AllQuote} exact/>
          <Route path="/new-quote" component={NewQuote} />
          <Route path="/quotes/:quoteId" component={QuoteDetails} />
        </Switch>
       </AnimatePresence>
      </Layout>
    </Suspense>
    </>
  );
}

export default App;
