import React, { useEffect, useState } from "react";
import AvoCalculatorForm from "./AvoCalculatorForm";
import AvoCalculatorResult from "./AvoCalculatorResult";
import { AvoCalculatorResults } from "../../calculators/AvoCalculatorResults";
import AvoCalculator from "../../calculators/avoCalculator";
import { AvoCalculatorParameters } from "../../calculators/AvoCalculatorParameters";

const ac = new AvoCalculator();

const AvoCalculatorLayout = () => {
  const [calculatorParameters, setCalculatorParameters] = useState(
    new AvoCalculatorParameters()
  );
  // this weird hack is the only way this would work.
  // the object returned from onParam change is different to
  // the existing state but doesn't trigger the useEffect.
  // This simple number does.
  const [formSubmitted, setFormSubmitted] = useState(0);
  const [calculatorResults, setCalculatorResults] = useState(
    new AvoCalculatorResults()
  );

  useEffect(() => {
    const results = ac.calculateResult(calculatorParameters);

    setCalculatorResults(results);
  }, [calculatorParameters, setCalculatorResults, formSubmitted]);

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-between my-12 items-top md:flex-nowrap">
        <div className="m:w-1/2 sm:w-full">
          <AvoCalculatorForm
            onParameterChange={(values: AvoCalculatorParameters) => {
              setCalculatorParameters(values);
              setFormSubmitted(formSubmitted + 1);
            }}
          />
        </div>
        <div className="m:w-1/2 sm:w-full">
          <AvoCalculatorResult avoCalculatorResults={calculatorResults} />
        </div>
      </div>
    </div>
  );
};

export default AvoCalculatorLayout;
