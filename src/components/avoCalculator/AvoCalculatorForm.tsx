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

    setAvoParams(avoCalculatorParameters);

    onParameterChange(avoCalculatorParameters);
  };

  return (
    <div className="avocalculator-form">
      <h2 className="mb-2 font-mono text-xl uppercase text-darkGreen">
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
          mapAndCallback(values);
        }}
      >
        {(props) => {
          return (
            <form onSubmit={props.handleSubmit}>
              <div className="mt-4 mb-4 font-mono uppercase text-darkGreen">
                The house
              </div>
              <div className="w-3/4 pt-2 pb-2 pl-4 pr-4 border-b border-lightLineGrey">
                <label
                  htmlFor="housePrice"
                  className="block pb-2 font-mono text-sm text-darkGreen"
                >
                  how much house are you saving for? ($)
                </label>
                <Field
                  type="number"
                  step="100000"
                  className="font-mono text-2xl shadow-none text-darkGreen bg-lightestGreen"
                  name="housePrice"
                />
              </div>
              <div className="w-3/4 pt-2 pb-2 pl-4 pr-4 border-b border-lightLineGrey">
                <label
                  htmlFor="percentDepositRequired"
                  className="block pb-2 font-mono text-sm text-darkGreen"
                >
                  % deposit required
                </label>

                <Field
                  type="number"
                  className="font-mono text-2xl shadow-none text-darkGreen bg-lightestGreen"
                  name="percentDepositRequired"
                />
              </div>
              <div className="mt-8 mb-4 font-mono uppercase text-darkGreen">
                OK, it's time to sacrifice
              </div>
              <div className="w-3/4 pt-2 pb-2 pl-4 pr-4 border-b border-lightLineGrey">
                <label
                  htmlFor="personalSavingsPerWeek"
                  className="block pb-2 font-mono text-sm text-darkGreen"
                >
                  regular weekly savings for deposit ($)
                </label>
                <Field
                  type="number"
                  step="50"
                  className="font-mono text-2xl shadow-none text-darkGreen bg-lightestGreen"
                  name="personalSavingsPerWeek"
                />
              </div>{" "}
              <div className="w-3/4 pt-2 pb-2 pl-4 pr-4 border-b border-lightLineGrey">
                <label
                  htmlFor="lattesDrunkPerWeek"
                  className="block pb-2 font-mono text-sm text-darkGreen"
                >
                  # lattes you can give up per week
                </label>
                <Field
                  type="number"
                  className="font-mono text-2xl shadow-none text-darkGreen bg-lightestGreen"
                  name="lattesDrunkPerWeek"
                />
              </div>{" "}
              <div className="w-3/4 pt-2 pb-2 pl-4 pr-4 border-b border-lightLineGrey">
                <label
                  htmlFor="avoBreakfastsPerWeek"
                  className="block pb-2 font-mono text-sm text-darkGreen"
                >
                  # avo brekkies you can cook at home instead per week
                </label>
                <Field
                  type="number"
                  className="font-mono text-2xl shadow-none text-darkGreen bg-lightestGreen"
                  name="avoBreakfastsPerWeek"
                />
              </div>
              <div className="mt-8 mb-4 font-mono uppercase text-darkGreen">
                Any cheeky gifts towards your deposit?
              </div>{" "}
              <div className="w-3/4 pt-2 pb-2 pl-4 pr-4 border-b border-lightLineGrey">
                <label
                  htmlFor="giftFromParents"
                  className="block pb-2 font-mono text-sm text-darkGreen"
                >
                  parents gift ($)
                </label>
                <Field
                  type="number"
                  className="font-mono text-2xl shadow-none text-darkGreen bg-lightestGreen"
                  name="giftFromParents"
                />
              </div>
              <div className="mt-4 mb-4 uppercase text-darkGreen">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium border border-gray-300 shadow-sm rounded-md text-bgGreen bg-darkGreen hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bgGreen"
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
