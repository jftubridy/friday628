import { UserAges } from './../src/planetYears.js';




describe('UserAges', function () {

  var bDay = new Date(2000, 2, 2);
  let ages = new UserAges(bDay);
  let currentYear = new Date().getFullYear();
  let userYear = ages.bDay.getFullYear();
  let earthAge = currentYear - userYear;
  //let earthAge = ages.userAge;
  
  it('should return ages year', function() {
    expect(ages.bDay.getFullYear()).toEqual(2000);
  });

  it('should return earthAge', function() {
    expect(earthAge).toEqual(19);
  }); 

  it('should return the correct mercuryYears', function() {
    let mercuryYears = ages.mercuryYears();
    expect(mercuryYears).toEqual(earthAge / .24);
  });
  


});
