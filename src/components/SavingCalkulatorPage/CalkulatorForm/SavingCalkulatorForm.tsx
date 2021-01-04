import {Formik} from "formik";
import 'bootstrap/dist/css/bootstrap.css';
import React, {ChangeEvent, useState} from "react";
import {Field, Form} from "formik";
import './Form.scss'
import {Button} from "react-bootstrap";


const UsersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}
type PropsType = {}

type FormType = {}


export const SavingCalkulatorForm: React.FC<PropsType> = React.memo((props) => {

        const [salaryField, setSalaryField] = useState(0);
        const [percentageField, setPercentageField] = useState(0);
        const [monthsField, setMonthsField] = useState(0);
        const [checkboxItem, setCheckboxItem] = useState(false);
        const [productField, setProductField] = useState(0);
        const [resultField, setResultField] = useState(0);
        const [monthResult, setMonthResult] = useState(0);


        const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
            let result = 0
            let money = 0
            let months = 0
            result = (salaryField / 100 * percentageField) * monthsField
            setResultField(result)
            if (checkboxItem) {
                while (money < productField) {
                    money = money + (salaryField / 100 * percentageField)
                    months += 1
                }
                setMonthResult(months)
            }
            setSubmitting(false);
        }

        const onChangeField = (e: ChangeEvent<HTMLInputElement>) => {
            const text = e.currentTarget.valueAsNumber
            switch (e.target.name) {
                case 'salary':
                    setSalaryField(text)
                    break
                case 'percentageOfDeposits':
                    setPercentageField(text)
                    break
                case 'countOfMonths':
                    setMonthsField(text)
                    break
                case 'moneyOnProduct':
                    setProductField(text)
                    break
            }
        }
        const onClickCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
            if (!checkboxItem) {
                setCheckboxItem(true)
            } else {
                setCheckboxItem(false)
            }

        }
        return <div>
            <Formik
                initialValues={{firstField: salaryField,}}
                validate={UsersSearchFormValidate}
                onSubmit={submit}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <Form className='form'>
                        <div className="container">
                            <div className = "row m-auto p-auto">
                                <div className = "col-12 m-auto text-center">
                        <span className='spans m-auto'>Salary</span>
                        <Field className="fields" type="number" name="salary" onChange={onChangeField} value={salaryField}/>
                        <span className='spans'>Percentage of deposits</span>
                        <Field className="fields" type="number" name="percentageOfDeposits" onChange={onChangeField}
                               value={percentageField}/>
                        <span className='spans'>How many months</span>
                        <Field className="fields" type="number" name="countOfMonths" onChange={onChangeField}
                               value={monthsField}/>
                        <Field id="checkboxItem" type="checkbox" name="checkboxItem"
                               onClick={onClickCheckbox}/>
                        <label htmlFor="checkboxItem" className="labelCheckboxItem">Select the amount of the product you are
                            going to buy</label>
                        {checkboxItem &&
                        <>
                            <Field className="fields" type="number" name="moneyOnProduct" onChange={onChangeField}
                                   value={productField}/>
                            <span className='spans'
                                  id="resultOfCheckbox">You will need to save for the product for {monthResult} months</span>
                        </>
                        }
                        <span className='spans' id='resultOfForm'>Result is {resultField}$</span>
                        <Button className="resultButton" type="submit" disabled={isSubmitting}>
                            Result
                        </Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    }
)