//-------FRONT END

import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { UserAges } from './planetYears.js'; //asigned but not used

$(document).ready(function() {

  $("form#submit").submit(function(event) {
    event.preventDefault();

    let inputtedMonth = parseInt($("#month")).val();
    let inputtedDay = parseInt($("#day")).val();
    let inputtedYear = parseInt($("#year")).val();
    let bDay = new Date (inputtedYear, inputtedMonth, inputtedDay);
    //let lifeExpectancy = 80;  //asigned a value but never used
    let ages = new UserAges(bDay) //user is given value, never used, User is not defined
    
     $("#demo4").text(ages);
  });
});
