//altezza immagine 1 in relazione a sua larghezza
 function larghezzacaa1() {
    let width = document.getElementById("caa1").offsetWidth;
    let minHeight = width * 0.36; /* set the minimum height to 35% of the width */
    document.getElementById("caa1").style.minHeight = minHeight + "px";
  };
//posizione box bianco, ad 86% dall'inizio dell'immagine
  function bbincaa1() {
    let height = document.getElementById("caa1").offsetHeight;
    let top = height * 0.8; /* set the minimum height to 86% of the height */
    document.getElementById("boxbianco").style.top = top + "px";
  };

//collapsible
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



function dimensioniboxmedio() {
  let width = document.getElementById("caa1").offsetWidth;
  let minHeight = width * 0.36; /* set the minimum height to 35% of the width */
  let caa1Height = document.getElementById("caa1").style.minHeight = minHeight + "px";

const bb = document.querySelector('.bb');
const boxmedio = document.querySelector('.boxmedio');
const bbHeight = getComputedStyle(bb).height;

const boxmedioHeight = `calc(${bbHeight} + ${caa1Height})`;

boxmedio.style.height = boxmedioHeight;
};




//posizione box trasparente, ad 86% dall'inizio dell'immagine
/*function btincaa3() {
  let width1 = document.getElementById("caa3").offsetWidth;
  let sfondo = document.getElementById("boxgrande3").offsetWidth;

  let transparent3Width = (sfondo)- ((width1)); 

  let transparent3 = document.getElementById("transparent3");
  transparent3.style.width = transparent3Width + "px";
  console.log(transparent3Width);
};*/

//altezza box trasparente, % dell'immagine
function btincaa3() {
  let heightcaa3 = document.getElementById("caa3").offsetHeight;
  console.log(heightcaa3);

  let transparent3Height = heightcaa3 *0.808; 

  let transparent3 = document.getElementById("transparent3");
  transparent3.style.height = transparent3Height + "px";
  transparent3.style.marginBottom = heightcaa3 *0.046 +"px";
  console.log(transparent3Height);
};




function tuttelefunzioni(){
  larghezzacaa1();
  bbincaa1();
  dimensioniboxmedio();
  btincaa3();
}
window.addEventListener("DOMContentLoaded", tuttelefunzioni);
window.addEventListener("resize", tuttelefunzioni);
