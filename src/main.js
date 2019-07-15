//-------FRONT END

import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { subtractDate, SolarAges } from './planetYears.js';

$(document).ready(function() {

  $("form#submit").submit(function(event) {
    event.preventDefault();

    let inputtedMonth = parseInt($("#month")).val();
    let inputtedDay = parseInt($("#day")).val();
    let inputtedYear = parseInt($("#year")).val();
    let inputtedBday = new Date (inputtedYear, inputtedMonth, inputtedDay)
    let earthAge = subtractDate(inputtedBday);
    let lifeExpectancy = 80;

    // $("#demo4").text(TellingTime(inputtedYear, inputtedMonth, inputtedDay));
  });
});
