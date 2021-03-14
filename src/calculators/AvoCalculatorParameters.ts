import { SavingsItemParameters } from "./SavingsItemParameters";

export class AvoCalculatorParameters {
  constructor() {
    this.housePrice = 1000000;
    this.percentDepositRequired = 20;
    this.avoBreakfastsPerWeek = new SavingsItemParameters();
    this.personalSavingsPerWeek = new SavingsItemParameters();
    this.lattesDrunkPerWeek = new SavingsItemParameters();
    this.giftFromParents = 0;
    this.yearsOfMortgage = 30;
    this.yearlyMortgageRate = 0.04;

    this.avoBreakfastsPerWeek.numberPerWeek = 3;
    this.avoBreakfastsPerWeek.cost = 22;

    this.lattesDrunkPerWeek.numberPerWeek = 10;
    this.lattesDrunkPerWeek.cost = 4.5;

    this.personalSavingsPerWeek.cost = 500;
  }

  housePrice: number;
  percentDepositRequired: number;
  avoBreakfastsPerWeek: SavingsItemParameters;
  personalSavingsPerWeek: SavingsItemParameters;
  lattesDrunkPerWeek: SavingsItemParameters;
  giftFromParents: number;
  yearsOfMortgage: number;
  yearlyMortgageRate: number;
}
