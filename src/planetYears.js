
export class UserAges {  // asigned but not used warning.
  constructor(bDay) {
    this.bDay = bDay;
  }

  userAge(){
    let currentYear = new Date().getFullYear();  
    let userYear = this.bDay.getFullYear();
    let earthAge = currentYear - userYear;
    return earthAge;
  }

  mercuryYears(){
    let mercuryYears = this.userAge() / .24;
    return mercuryYears;
  }

  venusYears(){
    let venusYears = this.userAge() /.62;
    return venusYears;
  }
  
  marsYears(){
    let marsYears = this.userAge() / 1.88;
    return marsYears;
  }

  jupiterYears() {
    let jupiterYears = this.userAge() / 11.86;
    return jupiterYears;
  }  
  // ---------  don't know how to call just one, but this would be dryer.
  // solarAges(){
  //   let mercuryYears = (this.earthAge / .24);
  //   let venusYears = (this.earthAge / .62);
  //   let marsYears = (this.earthAge / 1.88);
  //   let jupiterYears = (this.earthAge / 11.86);
  //   return mercuryYears, venusYears, marsYears, jupiterYears;
  // }


  // mercuryExpect() {
  //   let mercuryExpect = 80 / .24;
  //   return mercuryExpect;
  // }

  // venusExpect() {
  //   let venusExpect = 80 / .62;
  //   return venusExpect;
  // }
  
  // marsExpect() {
  //   let marsExpect = 80 / 1.88;
  //   return marsExpect;
  // }
  
  // jupiterExpect() {
  //   let jupiterExpect = 80 / 11.86;
  //   return jupiterExpect;
  // }
  
  // lifeExpectancy() {
  //   this.earthExpect = 80;
  //   this.mercuryExpect = (80 / .24);
  //   this.venusExpect = (80 / .62);
  //   this.marsExpect = (80 / 1.88);
  //   this.jupiterExpect = (80 / 11.86);
  // }
  earthLeft(){
    let earthLeft = ages.earthExpect - ages.earthAge;
    return earthLeft
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
