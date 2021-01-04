import React, {ChangeEvent, useState} from 'react'
import {LoanCalkulatorForm} from "./CalculatorForm/LoanCalkulatorForm";



type PropsType = {}

const LoanCalkulatorPage: React.FC<PropsType> = (props) => {

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-auto m-auto p-auto'>
                    <h1>Loan calculator</h1>
                    <LoanCalkulatorForm />
                </div>
            </div>
        </div>
    )
}

export default LoanCalkulatorPage;