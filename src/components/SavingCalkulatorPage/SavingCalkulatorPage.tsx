import React, {ChangeEvent, useState} from 'react'
import './SavingCalkulatorPage.scss'
import {SavingCalkulatorForm} from "./CalkulatorForm/SavingCalkulatorForm";

type PropsType = {}

const SavingCalkulatorPage: React.FC<PropsType> = (props) => {

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-auto m-auto p-auto'>
                    <h1> Savings calculator</h1>
                    <SavingCalkulatorForm />
                </div>
            </div>
        </div>
    )
}

export default SavingCalkulatorPage;