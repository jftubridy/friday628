//-------FRONT END

import { TellingTime } from './Time.js';
import './styles.css';



$(document).ready(function() {



    $("#submit").click(function(event) {
      event.preventDefault();

    let inputtedMonth = $("#month").val();
    let inputtedDay = $("#day").val();
    let inputtedYear = $("#year").val();

    $("#demo4").text(TellingTime(inputtedYear, inputtedMonth, inputtedDay));
  });
});
