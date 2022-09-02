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

// makes all icons clickable 
iconEls.each(function(i, icon){
    $(icon).on("click", setStorage)
  })

  function setBGColor(id){
    if (id == todayHour) {
      return "present";
    } else if (id < todayHour) {
      return "past";
    } else {
      return "future";
    }
  }
  