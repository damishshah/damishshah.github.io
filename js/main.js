 //Get the button:
mybutton = document.getElementById("topButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

var overlayable = document.getElementsByClassName("overlayable");
  
for (var i = 0; i < overlayable.length; i++) {
  overlayable[i].addEventListener("click", function(e) {
    e.target.classList.toggle("overlay");
  });
}

document.addEventListener('click', function(e) {
  var container = document.getElementsByClassName('overlay');

  for (var i = 0; i < container.length; i++) {
    if (!container[i].contains(e.target)) {
      container[i].classList.toggle("overlay");
    }
  }
});