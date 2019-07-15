//-----BACK END
export function subtractDate(inputtedBday){
  const currentYear = new Date().getFullYear();
  return currentYear - inputtedBday.getFullYear();
  console.log(currentYear);
}

export class SolarAges {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryYears = (earthAge / .24).toFixed(2);
    this.venusYears = (earthAge / .62).toFixed(2);
    this.marsYears = (earthAge / 1.88).toFixed(2);
    this.jupiterYears = (earthAge / 11.86).toFixed(2);
console.log("earthAge " + earthAge);
  }

  lifeExpectancy() {
    this.earthExpect = 80;
    this.mercuryExpect = (80 / .24).toFixed(2);
    this.venusExpect = (80 / .62).toFixed(2);
    this.marsExpect = (80 / 1.88).toFixed(2);
    this.jupiterExpect = (80 / 11.86).toFixed(2);
  }

  yearsLeft() {
    this.earthLeft = (this.earthExpect - this.earthAge);
    this.mercuryLeft = (this.mercuryExpect - this.mercuryYears);
    this.venusLeft = (this.venusExpect - this.venusYears);
    this.marsLeft = (this.marsExpect - this.marsYears);
    this.jupiterLeft = (this.jupiterExpect - this.jupiterYears);
  }
}
