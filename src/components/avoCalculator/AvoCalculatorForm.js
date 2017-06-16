import React from 'react';
import TextInput from '../common/TextInput';
import {Form} from 'react-bootstrap';

const AvoCalculatorForm = ({avoCalculatorParameters, onParameterChange}) => {
    return (
        <div class="avocalculator-form">
            <span className="avocalculator-form__header">Calculate your order here:</span>
        <Form horizontal >
            <TextInput
                className="avocalculator-form__houseprice"
                name="housePrice"
                label="house price ($)"
                value={avoCalculatorParameters
                .housePrice
                .toString()}
                onChange={onParameterChange}/>
            <TextInput
                name="percentDepositRequired"
                label="% deposit required"
                value={avoCalculatorParameters
                .percentDepositRequired
                .toString()}
                onChange={onParameterChange}/>
                         <TextInput
                name="giftFromParents"
                label="parents #$*^%ing huge gift ($)"
                value={avoCalculatorParameters
                .giftFromParents
                .toString()}
                onChange={onParameterChange}/>
            <TextInput
                name="lattes.numberPerWeek"
                label="# lattes you drink p/wk"
                value={avoCalculatorParameters
                .lattes
                .numberPerWeek
                .toString()}
                onChange={onParameterChange}/>
            <TextInput
                name="avoBreakfasts.numberPerWeek"
                label="# avo brekkies you smash p/wk"
                value={avoCalculatorParameters
                .avoBreakfasts
                .numberPerWeek
                .toString()}
                onChange={onParameterChange}/>
            <TextInput
                name="personalSavings.cost"
                label="personal savings p/wk ($)"
                value={avoCalculatorParameters
                .personalSavings
                .cost
                .toString()}
                onChange={onParameterChange}/>
   
        </Form>
        </div>
    );
};

AvoCalculatorForm.propTypes = {
    avoCalculatorParameters: React.PropTypes.object.isRequired,
    onParameterChange: React.PropTypes.func.isRequired
};

export default AvoCalculatorForm;