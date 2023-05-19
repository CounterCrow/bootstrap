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
  $("#btnDelete").click(function(e) {
    e.preventDefault();
    $(".bgModal").fadeIn();
    $("#staticBackdrop").modal("show");
  });

  $(".btn-close, .btn-secondary").click(function() {
    $(".bgModal").fadeOut();
    $("#staticBackdrop").modal("hide");
  });
  
});
//유효성 검사
$(function(){
  $("#mainContentSub").ready(function() {
    $("#btnBookMark").click(function() {
      var countryInput = $("#country,#code_3digits,#code_2digits,#Sequence");
      if ($.trim(countryInput.val()) === "") {
        countryInput.addClass("is-invalid");
        countryInput.next().show();
      } else {
        countryInput.removeClass("is-invalid");
        countryInput.next().hide();
      }
    });
  });
});