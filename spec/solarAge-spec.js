import { UserAges } from './../src/planetYears.js'




describe('UserAges', function () {



  it('should return user age', function() {
var bDay = new Date(1988, 9, 2);
let userAges = new UserAges(bDay)
      // let inputtedMonth = 03;
      // let inputtedDay = 12;
      // let inputtedYear = 1999;
      //console.log("bDay:  "+bDay);
      expect(userAges.userAge).toEqual(30);

})
});
