import { AvoCalculatorResults } from "./AvoCalculatorResults";
import { AvoCalculatorParameters } from "./AvoCalculatorParameters";
import { SavingsItemParameters } from "./SavingsItemParameters";
import { SavingsItemResult } from "./SavingsItemResult";

export default class AvoCalculator {
  calculateWeeklySavings(parameters: SavingsItemParameters) {
    if (parameters.numberPerWeek) {
      return parameters.cost * parameters.numberPerWeek;
    }
    return parameters.cost;
  }

  calculateResultForOneOffItem(
    numberOfWeeksToDeposit: number,
    oneOffSavings: number,
    deposit: number
  ): SavingsItemResult {
    let result = {
      amount: 0,
      percentTotalDeposit: 0,
      timeBenefitInWeeks: 0,
      timeBenefitInYears: 0,
      weeklySavings: 0,
    };
    if (oneOffSavings <= 0) {
      return result;
    }
    result.amount = oneOffSavings * 1.0;
    result.percentTotalDeposit = (oneOffSavings / deposit) * 100;
    result.timeBenefitInWeeks =
      numberOfWeeksToDeposit * (result.percentTotalDeposit / 100);
    result.timeBenefitInYears = result.timeBenefitInWeeks / 52;

    return result;
  }

  calculateResultForWeeklyItem(
    numberOfWeeksToDeposit: number,
    weeklySavings: number,
    deposit: number
  ): SavingsItemResult {
    const percentTotalDeposit =
      ((numberOfWeeksToDeposit * weeklySavings) / deposit) * 100;

    const timeBenefitInWeeks =
      numberOfWeeksToDeposit * (percentTotalDeposit / 100);

    let result = {
      amount: 0,
      weeklySavings: weeklySavings,
      percentTotalDeposit: percentTotalDeposit,
      timeBenefitInWeeks: timeBenefitInWeeks,
      timeBenefitInYears: timeBenefitInWeeks / 52,
    };

    return result;
  }

  calculateMonthlyMortgagePayment(
    avoCalculatorParameters: AvoCalculatorParameters,
    deposit: number
  ) {
    // must be normalized to days to match bnz calculator.
    // then multiplied by the repayment schedule

    let n = avoCalculatorParameters.yearsOfMortgage * 365;
    let r = avoCalculatorParameters.yearlyMortgageRate / 365;
    let P = avoCalculatorParameters.housePrice - deposit;

    let dailyPayment = P * (r + r / (Math.pow(1 + r, n) - 1));
    return dailyPayment * 30.5;
  }

  calculateResult(
    avoCalculatorParameters: AvoCalculatorParameters
  ): AvoCalculatorResults {
    const avoCalculatorResult = new AvoCalculatorResults();
    avoCalculatorResult.housePrice = avoCalculatorParameters.housePrice;
    avoCalculatorResult.deposit =
      avoCalculatorParameters.housePrice *
      (avoCalculatorParameters.percentDepositRequired / 100);
    avoCalculatorResult.personalSavings.weeklySavings = this.calculateWeeklySavings(
      avoCalculatorParameters.personalSavingsPerWeek
    );
    avoCalculatorResult.avoBreakfasts.weeklySavings = this.calculateWeeklySavings(
      avoCalculatorParameters.avoBreakfastsPerWeek
    );
    avoCalculatorResult.lattes.weeklySavings = this.calculateWeeklySavings(
      avoCalculatorParameters.lattesDrunkPerWeek
    );

    avoCalculatorResult.totalWeeklySavings =
      avoCalculatorResult.personalSavings.weeklySavings;
    avoCalculatorResult.totalWeeklySavings +=
      avoCalculatorResult.avoBreakfasts.weeklySavings;
    avoCalculatorResult.totalWeeklySavings +=
      avoCalculatorResult.lattes.weeklySavings;

    avoCalculatorResult.numberOfWeeksToDeposit =
      (avoCalculatorResult.deposit - avoCalculatorParameters.giftFromParents) /
      avoCalculatorResult.totalWeeklySavings;
    avoCalculatorResult.yearsToDeposit =
      avoCalculatorResult.numberOfWeeksToDeposit / 52;

    avoCalculatorResult.giftFromParents = this.calculateResultForOneOffItem(
      avoCalculatorResult.numberOfWeeksToDeposit,
      avoCalculatorParameters.giftFromParents,
      avoCalculatorResult.deposit
    );

    avoCalculatorResult.lattes = this.calculateResultForWeeklyItem(
      avoCalculatorResult.numberOfWeeksToDeposit,
      avoCalculatorResult.lattes.weeklySavings,
      avoCalculatorResult.deposit
    );
    avoCalculatorResult.personalSavings = this.calculateResultForWeeklyItem(
      avoCalculatorResult.numberOfWeeksToDeposit,
      avoCalculatorResult.personalSavings.weeklySavings,
      avoCalculatorResult.deposit
    );
    avoCalculatorResult.avoBreakfasts = this.calculateResultForWeeklyItem(
      avoCalculatorResult.numberOfWeeksToDeposit,
      avoCalculatorResult.avoBreakfasts.weeklySavings,
      avoCalculatorResult.deposit
    );

    avoCalculatorResult.monthlyMortgagePayment = this.calculateMonthlyMortgagePayment(
      avoCalculatorParameters,
      avoCalculatorResult.deposit
    );
    return avoCalculatorResult;
  }
}
