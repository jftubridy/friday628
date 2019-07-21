import { UserAges } from './../src/planetYears.js';




describe('UserAges', function () {

  var bDay = new Date(1988, 9, 2);
  let ages = new UserAges(bDay);
  let earthAge = ages.userAge.toString();
  it('should return ages year', function() {

    expect(ages.bDay.getFullYear()).toEqual(1988);
  });



});
