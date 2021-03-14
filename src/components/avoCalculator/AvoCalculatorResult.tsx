import React from "react";
import { AvoCalculatorResults } from "../../calculators/AvoCalculatorResults";
import { SectionHorizontalRule } from "../home/SectionHorizontalRule";

export type AvoCalculatorResultProps = {
  avoCalculatorResults: AvoCalculatorResults;
};
const AvoCalculatorResult = ({
  avoCalculatorResults,
}: AvoCalculatorResultProps) => {
  console.log("loading results component", avoCalculatorResults);
  return (
    <div className="flex flex-col font-mono text-darkGreen text-sm space-y-4">
      <h2 className="text-xl uppercase mb-2">Your order summary:</h2>

      <p className=" text-darkGreen font-mono">
        looks like you need a deposit of{" "}
        <span className="block text-5xl my-5">
          {avoCalculatorResults.deposit.toLocaleString("en-NZ", {
            style: "currency",
            currency: "NZD",
            minimumFractionDigits: 2,
          })}
        </span>
      </p>
      <SectionHorizontalRule />

      <p>
        with{" "}
        <span className="avocalculator-results__value">
          {avoCalculatorResults.personalSavings.weeklySavings.toLocaleString(
            "en-NZ",
            {
              style: "currency",
              currency: "NZD",
              minimumFractionDigits: 2,
            }
          )}
        </span>{" "}
        weekly savings and sacrificing{" "}
        <span className="avocalculator-results__value">
          {avoCalculatorResults.lattes.weeklySavings.toLocaleString("en-NZ", {
            style: "currency",
            currency: "NZD",
            minimumFractionDigits: 2,
          })}
        </span>{" "}
        on lattes and{" "}
        <span className="avocalculator-results__value">
          {avoCalculatorResults.avoBreakfasts.weeklySavings.toLocaleString(
            "en-NZ",
            {
              style: "currency",
              currency: "NZD",
              minimumFractionDigits: 2,
            }
          )}
        </span>{" "}
        on avo brekkies per week{" "}
        {avoCalculatorResults.giftFromParents.amount > 0 ? (
          <>
            {" "}
            and with your #$*^%ing huge gift of{" "}
            <span className="avocalculator-results__value">
              {avoCalculatorResults.giftFromParents.amount.toLocaleString(
                "en-NZ",
                {
                  style: "currency",
                  currency: "NZD",
                  minimumFractionDigits: 2,
                }
              )}
            </span>{" "}
          </>
        ) : undefined}
        you can save your deposit in{" "}
        <span className="block text-5xl my-8">
          {avoCalculatorResults.yearsToDeposit.toFixed(2)} years
        </span>
      </p>
      <p>
        Your mortgage payments will be{" "}
        <span className="avocalculator-results__value">
          {avoCalculatorResults.monthlyMortgagePayment.toLocaleString("en-NZ", {
            style: "currency",
            currency: "NZD",
            minimumFractionDigits: 2,
          })}{" "}
          per month
        </span>
      </p>
      <SectionHorizontalRule />
      <p>
        This house will really cost you{" "}
        <span className="avocalculator-results__total-cost">
          {(
            avoCalculatorResults.monthlyMortgagePayment *
            12 *
            30
          ).toLocaleString("en-NZ", {
            style: "currency",
            currency: "NZD",
            minimumFractionDigits: 2,
          })}
        </span>
      </p>
      <p>Try sacrificing a few more lattes to see the impact</p>
    </div>
  );
};

export default React.memo(AvoCalculatorResult);
