$(function() {
  var dateFormat = "yy/mm/dd";

  $.datepicker.setDefaults($.datepicker.regional["ko"]);

  $("#from").datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 3,
    onClose: function(selectedDate) {
      $("#to").datepicker("option", "minDate", selectedDate);
    },
    dateFormat: dateFormat // dateFormat를 옵션 객체 내에 설정.
  });

  $("#to").datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 3,
    onClose: function(selectedDate) {
      $("#from").datepicker("option", "maxDate", selectedDate);
    },
    dateFormat: dateFormat // dateFormat를 옵션 객체 내에 설정
  });
});
//모달창
$(function() {
  
});