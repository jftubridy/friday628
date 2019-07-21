import { UserAges } from './../src/planetYears.js';




describe('UserAges', function () {

  var bDay = new Date(2000, 2, 2);
  let ages = new UserAges(bDay);
  let currentYear = new Date().getFullYear();
  let userYear = ages.bDay.getFullYear();
  let earthAge = currentYear - userYear;
  //let earthAge = ages.userAge;
  
  it('should return ages year', function() {  //1
    expect(ages.bDay.getFullYear()).toEqual(2000);
  });

  it('should return earthAge', function() {  //2
    expect(earthAge).toEqual(19);
  }); 

  it('should return the correct mercuryYears', function() { //3
    let mercuryYears = ages.mercuryYears();
    expect(mercuryYears).toEqual(earthAge / .24);
  });
  
  it('should return the correct venusYears', function() { //4
    let venusYears = ages.venusYears();
    expect(venusYears).toEqual(earthAge / .62);
  });

  it('should return the correct marsYears', function() {  //5
    let marsYears = ages.marsYears();
    expect(marsYears).toEqual(earthAge / 1.88);
  });

  it('should return the correct jupiterYears', function() { //6
    let jupiterYears = ages.jupiterYears();
    expect(jupiterYears).toEqual(earthAge / 11.86);
  });

  it('should show expected lifetime on mercury', function() { //7
    let mercuryExpect = ages.mercuryExpect();
    expect(mercuryExpect).toEqual(80 / .24);
  });
});
