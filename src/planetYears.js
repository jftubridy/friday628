// export function subtractDate(){
//     const currentYear = new Date().getFullYear();
//     let userAge = inputtedBday.getFullYear(); //inputtedBday is not defined
//     let earthAge = userAge - currentYear;
//
//   return earthAge;
// }



export class UserAges {  // asigned but not used
  constructor(bDay) {
    this.bDay = bDay;
  }

  userAge(){
  let currentYear = new Date().getFullYear();
  let userAge = this.bDay.getFullYear();
  let earthAge = userAge - currentYear;
  return earthAge;
  }

  solarAges(){
    this.mercuryYears = (this.earthAge / .24).toFixed(2);
    this.venusYears = (this.earthAge / .62).toFixed(2);
    this.marsYears = (this.earthAge / 1.88).toFixed(2);
    this.jupiterYears = (this.earthAge / 11.86).toFixed(2);

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
          //removed the .toFIxed(2) from the end of these.
  }
}
