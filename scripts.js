$(function() {
  $('.userInputForm').submit(function(e) {
    e.preventDefault();
    var enteredNumber = parseInt($('.userInput').val());
    $('.userInput').val("");
    $('.output').empty();
    for (var i = 1; i <= enteredNumber; i++) {
      $('.output').append("<li>" + i + "</li>");
    }
  });
 });
