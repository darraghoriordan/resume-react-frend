import React from "react";
import { AvoCalculatorResults } from "../../calculators/AvoCalculatorResults";
import { SectionHorizontalRule } from "../home/SectionHorizontalRule";

export type AvoCalculatorResultProps = {
  avoCalculatorResults: AvoCalculatorResults;
};
const AvoCalculatorResult = ({
  avoCalculatorResults,
}: AvoCalculatorResultProps) => {
  return (
    <div className="flex flex-col font-mono text-sm text-darkGreen space-y-4">
      <h2 className="mb-2 text-xl uppercase">Your order summary:</h2>

      <p className="font-mono text-darkGreen">
        looks like you need a deposit of{" "}
        <span className="block my-5 text-5xl">
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
        <span className="block my-8 text-5xl">
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
