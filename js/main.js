// camera grab for t-shirt
// http://www.anotheruiguy.com/ux-design-dev/_book/html5/camera-access.html

window.addEventListener("DOMContentLoaded", function() {
  // Grab elements, create settings, etc.
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    video = document.getElementById("video"),
    videoObj = { "video": true },
    errBack = function(error) {
      console.log("Video capture error: ", error.code);
    };

  // Put video listeners into place
  if(navigator.getUserMedia) { // Standard
    navigator.getUserMedia(videoObj, function(stream) {
      video.src = stream;
      video.play();
    }, errBack);
  } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
    navigator.webkitGetUserMedia(videoObj, function(stream){
      video.src = window.webkitURL.createObjectURL(stream);
      video.play();
    }, errBack);
  }
  else if(navigator.mozGetUserMedia) { // Firefox-prefixed
    navigator.mozGetUserMedia(videoObj, function(stream){
      video.src = window.URL.createObjectURL(stream);
      video.play();
    }, errBack);
  }
  // Trigger photo take
  document.getElementById("snap").addEventListener("click", function() {
    context.drawImage(video, 0, 0, 256, 192);
  });
}, false);

//http://www.toasteddigital.com/blog/html5-jquery-localstorage-forms.html
//retrieves localStorage data for form fields
$(document).ready(function () {
  function init() {
    $('.stored').each(function(){
      var name = $(this).attr('name');
      var val = $(this).val();
      if (localStorage[name]) {
        $(this).val(localStorage[name]);
      }
    });
  }
  init();
});
//stores form data on keyup with class of "stored"
$('.stored').keyup(function () {
  localStorage[$(this).attr('name')] = $(this).val();
});

//session localStorage
var namefield = document.getElementById("contact_name");
var emailfield = document.getElementById("contact_email");
var messagefield = document.getElementById("contact_message");

// Retreive items in autosave if page is refreshed
if (sessionStorage.getItem("autosave")) {
  namefield.value = sessionStorage.getItem("autosave");
  emailfield.value = sessionStorage.getItem("autosave");
  messagefield.value = sessionStorage.getItem("autosave");
}
// Listen for changes in the text field
namefield.addEventListener("change", function() {
  sessionStorage.setItem("autosave", namefield.value);
});
emailfield.addEventListener("change", function() {
  sessionStorage.setItem("autosave", emailfield.value);
});
messagefield.addEventListener("change", function() {
  sessionStorage.setItem("autosave", messagefield.value);
});

//https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage
