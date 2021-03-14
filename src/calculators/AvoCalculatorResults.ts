import { SavingsItemResult } from "./SavingsItemResult";

export class AvoCalculatorResults {
  constructor() {
    this.housePrice = 0;
    this.yearsToDeposit = 0;
    this.numberOfWeeksToDeposit = 0;
    this.totalWeeklySavings = 0;
    this.deposit = 0;
    this.monthlyMortgagePayment = 0;
    this.lattes = new SavingsItemResult();
    this.avoBreakfasts = new SavingsItemResult();
    this.personalSavings = new SavingsItemResult();
    this.giftFromParents = new SavingsItemResult();
  }
  housePrice: number;
  yearsToDeposit: number;
  numberOfWeeksToDeposit: number;
  totalWeeklySavings: number;
  deposit: number;
  monthlyMortgagePayment: number;
  lattes: SavingsItemResult;
  avoBreakfasts: SavingsItemResult;
  personalSavings: SavingsItemResult;
  giftFromParents: SavingsItemResult;
}
