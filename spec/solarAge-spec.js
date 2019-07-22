import { UserAges } from './../src/planetYears.js';

describe('UserAges', function () {
  //variables needed to get things running.
  var bDay = new Date(2000, 2, 2);
  let ages = new UserAges(bDay);
  let currentYear = new Date().getFullYear();
  let userYear = ages.bDay.getFullYear();
  let earthAge = currentYear - userYear;
  
  it('should return ages year', function() {  //1
    expect(ages.bDay.getFullYear()).toEqual(2000);
  });

  it('should return earthAge', function() {  //2
    expect(earthAge).toEqual(19);
  }); 
  // start of 'solarAge' tests
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
  //start of life expectancy tests
  it('should show expected lifetime on mercury', function() { //7
    let mercuryExpect = ages.mercuryExpect();
    expect(mercuryExpect).toEqual(80 / .24);
  });

  it('should show expected lifetime on venus', function() { //8
    let venusExpect = ages.venusExpect();
    expect(venusExpect).toEqual(80 / .62);
  });

  it('should show expected lifetime on mars', function() { //9
    let marsExpect = ages.marsExpect();
    expect(marsExpect).toEqual(80 / 1.88);
  });
  
  it('should show expected lifetime on jupiter', function() { //10
    let jupiterExpect = ages.jupiterExpect();
    expect(jupiterExpect).toEqual(80 / 11.86);
  });
  // start of lifetime left tests
  it('Should show remaining years left on earth', function() { //11
    let earthLeft = 80 - earthAge;
    expect(earthLeft).toEqual(61);
  });
    
  it('Should show remaining years left on mercury', function() { //12
    let mercuryLeft = ages.mercuryExpect() - ages.mercuryYears();
    expect(mercuryLeft).toEqual(254.16666666666669);
  });
      
  it('Should show remaining years left on venus', function() { //13
    let venusLeft = ages.venusExpect() - ages.venusYears();
    expect(venusLeft).toEqual(98.38709677419355);
  });
      
  it('Should show remaining years left on mars', function() { //14
    let marsLeft = ages.marsExpect() - ages.marsYears();
    expect(marsLeft).toEqual(32.4468085106383);
  });
      
  it('Should show remaining years left on jupiter', function() { //15
    let jupiterLeft = ages.jupiterExpect() - ages.jupiterYears();
    expect(jupiterLeft).toEqual(5.1433389544688035);
  });
  
});
