//Variables
var currentDayEl = $("#currentDay");
// these are arrays
var inputEls = $("input");
var iconEls = $(".saveBtn");

var today = moment();
var todayHour = moment().format("H");

// on page load, sets time blocks' background colors
inputEls.each(function(i , input){
    $(input).addClass(setBGColor($(input).attr("id")))
  
  })