import { UserAges } from './../src/planetYears.js'




describe('UserAges', function () {



  it('should return user age', function() {
      let inputtedMonth = 3;
      let inputtedDay = 12;
      let inputtedYear = 1999;
      
      expect(UserAges.userAge).toEqual(20);

})
});
