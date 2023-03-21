window.addEventListener("DOMContentLoaded", function() {
    var width = document.getElementById("caa1").offsetWidth;
    var minHeight = width * 0.36; /* set the minimum height to 35% of the width */
    document.getElementById("caa1").style.minHeight = minHeight + "px";
  });

  window.addEventListener("DOMContentLoaded", function() {
    var height = document.getElementById("caa1").offsetHeight;
    var top = height * 0.86; /* set the minimum height to 10% of the width */
    document.getElementById("boxbianco").style.top = top + "px";
  });

//collapsible? 
let collapseButton = document.querySelector('.collapsebutton');
let collapsible = document.querySelector('.collapsible');

collapseButton.addEventListener('click', function() {
  collapsible.classList.toggle('expanded');
  if (collapsible.classList.contains('expanded')) {
    collapseButton.innerHTML = '<i class="fas fa-caret-up"></i>';
  } else {
    collapseButton.innerHTML = '<i class="fas fa-caret-down"></i>';
  }
});
