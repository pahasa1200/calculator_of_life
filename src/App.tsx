import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route, withRouter, Switch} from 'react-router-dom'
import {Redirect} from "react-router-dom";
import SavingCalculatorPage from './components/SavingCalkulatorPage/SavingCalkulatorPage'
import Home from "./components/Home/Home";
import LoanCalculatorPage from "./components/LoanCalculatorPage/LoanCalculatorPage";

const App: React.FC = () => {
  return (
    <>
        <BrowserRouter>
      <Header />
        <div className='app-wrapper-content'>
            <Switch>
                <Route exact path='/' render={() => <Redirect to={"/home"}/>}/>
                <Route path='/savingsCalculator' render={() => <SavingCalculatorPage/>}/>
                <Route path='/loanCalculator' render={() => <LoanCalculatorPage/>}/>
                <Route path='/home' render={() => <Home/>}/>
                <Route path='*' render={() => <div><h1>404 not found</h1></div>}/>
            </Switch>
        </div>
            </BrowserRouter>
    </>
  );
}

export default App;
