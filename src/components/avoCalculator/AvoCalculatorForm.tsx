import { Field, Formik } from "formik";
import React, { useState } from "react";
import { AvoCalculatorParameters } from "../../calculators/AvoCalculatorParameters";

type AvoCalculatorFormProps = {
  onParameterChange: (values: AvoCalculatorParameters) => void;
};

const AvoCalculatorForm = ({ onParameterChange }: AvoCalculatorFormProps) => {
  const [avoCalculatorParameters, setAvoParams] = useState(
    new AvoCalculatorParameters()
  );

  const mapAndCallback = (values: any) => {
    // This is a hack to quickly access the values on blur
    // this means we validate nothing
    console.log("call back running");
    avoCalculatorParameters.housePrice = values.housePrice;
    avoCalculatorParameters.percentDepositRequired =
      values.percentDepositRequired;

    avoCalculatorParameters.giftFromParents = values.giftFromParents;

    avoCalculatorParameters.lattesDrunkPerWeek.numberPerWeek =
      values.lattesDrunkPerWeek;

    avoCalculatorParameters.avoBreakfastsPerWeek.numberPerWeek =
      values.avoBreakfastsPerWeek;

    avoCalculatorParameters.personalSavingsPerWeek.cost =
      values.personalSavingsPerWeek;
    console.log("setting local params");
    setAvoParams(avoCalculatorParameters);
    console.log("calling callback");
    onParameterChange(avoCalculatorParameters);
  };

  return (
    <div className="avocalculator-form">
      <h2 className="text-xl text-darkGreen uppercase font-mono mb-2">
        Ring up your own order here:
      </h2>
      <Formik
        initialValues={{
          housePrice: avoCalculatorParameters.housePrice,
          percentDepositRequired:
            avoCalculatorParameters.percentDepositRequired,
          giftFromParents: avoCalculatorParameters.giftFromParents,
          lattesDrunkPerWeek:
            avoCalculatorParameters.lattesDrunkPerWeek.numberPerWeek,
          avoBreakfastsPerWeek:
            avoCalculatorParameters.avoBreakfastsPerWeek.numberPerWeek,
          personalSavingsPerWeek:
            avoCalculatorParameters.personalSavingsPerWeek.cost,
        }}
        onSubmit={(values) => {
          console.log("on submit fired");
          mapAndCallback(values);
        }}
      >
        {(props) => {
          return (
            <form onSubmit={props.handleSubmit}>
              <div className="text-darkGreen uppercase font-mono mb-4 mt-4">
                The house
              </div>
              <div className="border-b  w-3/4 pl-4 pr-4 pt-2 pb-2 border-lightLineGrey">
                <label
                  htmlFor="housePrice"
                  className="block text-sm font-mono text-darkGreen pb-2"
                >
                  how much house are you saving for? ($)
                </label>
                <Field
                  type="number"
                  step="100000"
                  className="font-mono text-darkGreen bg-lightestGreen text-2xl shadow-none"
                  name="housePrice"
                />
              </div>
              <div className=" w-3/4 pl-4 pr-4 pt-2 pb-2 border-b border-lightLineGrey">
                <label
                  htmlFor="percentDepositRequired"
                  className="block text-sm font-mono text-darkGreen pb-2"
                >
                  % deposit required
                </label>

                <Field
                  type="number"
                  className="font-mono text-darkGreen bg-lightestGreen text-2xl shadow-none"
                  name="percentDepositRequired"
                />
              </div>
              <div className="text-darkGreen uppercase font-mono mb-4 mt-8">
                OK, it's time to sacrifice
              </div>
              <div className="border-b w-3/4 pl-4 pr-4 pt-2 pb-2 border-lightLineGrey">
                <label
                  htmlFor="personalSavingsPerWeek"
                  className="block text-sm font-mono text-darkGreen pb-2"
                >
                  regular weekly savings for deposit ($)
                </label>
                <Field
                  type="number"
                  step="50"
                  className="font-mono text-darkGreen bg-lightestGreen text-2xl shadow-none"
                  name="personalSavingsPerWeek"
                />
              </div>{" "}
              <div className="border-b  w-3/4 pl-4 pr-4 pt-2 pb-2 border-lightLineGrey">
                <label
                  htmlFor="lattesDrunkPerWeek"
                  className="block text-sm font-mono text-darkGreen pb-2"
                >
                  # lattes you can give up per week
                </label>
                <Field
                  type="number"
                  className="font-mono text-darkGreen bg-lightestGreen text-2xl shadow-none"
                  name="lattesDrunkPerWeek"
                />
              </div>{" "}
              <div className="border-b  w-3/4 pl-4 pr-4 pt-2 pb-2 border-lightLineGrey">
                <label
                  htmlFor="avoBreakfastsPerWeek"
                  className="block text-sm font-mono text-darkGreen pb-2"
                >
                  # avo brekkies you can cook at home instead per week
                </label>
                <Field
                  type="number"
                  className="font-mono text-darkGreen bg-lightestGreen text-2xl shadow-none"
                  name="avoBreakfastsPerWeek"
                />
              </div>
              <div className="text-darkGreen uppercase font-mono mb-4 mt-8">
                Any cheeky gifts towards your deposit?
              </div>{" "}
              <div className="border-b  w-3/4 pl-4 pr-4 pt-2 pb-2 border-lightLineGrey">
                <label
                  htmlFor="giftFromParents"
                  className="block text-sm font-mono text-darkGreen pb-2"
                >
                  parents gift ($)
                </label>
                <Field
                  type="number"
                  className="font-mono text-darkGreen bg-lightestGreen text-2xl shadow-none"
                  name="giftFromParents"
                />
              </div>
              <div className="mb-4 mt-4 uppercase text-darkGreen">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-bgGreen bg-darkGreen hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bgGreen"
                >
                  Calculate my chances of a house
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default React.memo(AvoCalculatorForm);
