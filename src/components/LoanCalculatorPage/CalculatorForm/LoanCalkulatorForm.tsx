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


export const LoanCalkulatorForm: React.FC<PropsType> = React.memo((props) => {

        const [moneyField, setMoneyField] = useState(0);
        const [percentageField, setPercentageField] = useState(0);
        const [monthsField, setMonthsField] = useState(0);
        const [resultField, setResultField] = useState(0);


        const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
            let P = 0
            let money = moneyField
            let months = monthsField
            let percentPart = 0
            let debt = 0
            let res = 0
            P = percentageField / 100 / 12
            let amountOfPayment = moneyField * (P + (P / (Math.pow((1 + P), 24) - 1)))
            while (months > 0){
                percentPart = money * Math.round(amountOfPayment)
                debt = Math.round(amountOfPayment) - Math.round(percentPart)
                money -= debt
                res += debt
                months -= 1
            }
            setResultField(Math.round(res))
            setSubmitting(false);
        }

        const onChangeField = (e: ChangeEvent<HTMLInputElement>) => {
            const text = e.currentTarget.valueAsNumber
            switch (e.target.name) {
                case 'money':
                    setMoneyField(text)
                    break
                case 'interestRate':
                    setPercentageField(text)
                    break
                case 'countOfMonths':
                    setMonthsField(text)
                    break
            }
        }
        return <div>
            <Formik
                initialValues={{}}
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
                            <div className="row m-auto p-auto">
                                <div className="col-12 m-auto text-center">
                                    <span className='spans m-auto'>How many money do you want?</span>
                                    <Field className="fields" type="number" name="money" onChange={onChangeField}
                                           value={moneyField}/>
                                    <span className='spans'>Interest rate</span>
                                    <Field className="fields" type="number" name="interestRate"
                                           onChange={onChangeField}
                                           value={percentageField}/>
                                    <span className='spans'>How many months?</span>
                                    <Field className="fields" type="number" name="countOfMonths" onChange={onChangeField}
                                           value={monthsField}/>
                                           <span className='spans' id='resultOfForm'>Result {resultField}$</span>
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