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

//collapsible per chi 
let collapseButton3 = document.querySelector('#vbutton3');
let collapsible3 = document.querySelector('#collapsible3');

collapseButton3.addEventListener('click', function() {
  collapsible3.classList.toggle('expanded');
  if (collapsible3.classList.contains('expanded')) {
    collapseButton3.innerHTML = '<i class="fas fa-caret-up"></i>';
  } else {
    collapseButton3.innerHTML = '<i class="fas fa-caret-down"></i>';
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
};

//gallery4 immagini con sfondo a 60%
function gallery4(){
  let rigagallery4 = document.getElementById("rigagallery4"); //devo fare height
  let immagini4 = document.getElementById("immagini4"); //devo fare top
  let gallery4H= document.getElementById("gallery4").offsetHeight; //genitore, in base a questa altezza
  let immagini4H = immagini4.offsetHeight;

  rigagallery4.style.height = immagini4H *0.68 + "px";
  //rigagallery4.style.height = gallery4H *0.13 + "px";
  //immagini4.style.top = gallery4H*0.03 + "px";

  let listag4 = document.getElementById("listag4");
  listag4.style.marginTop = immagini4H +"px";
}

//metti barra rossa in gallery1 
function gallery1(){
  let img1red = document.getElementById("img1red"); 
  let img2red = document.getElementById("img2red"); 
  let gallery1W = document.getElementById("gallery1").offsetWidth; 
  let gallery1ulH = document.getElementById("gallery1ul").offsetHeight; 
  img1red.style.bottom = gallery1ulH + "px";
  img2red.style.bottom = gallery1ulH + "px";
  //img1red.style.backgroundSize = gallery1W + "px" ;

}/*  let vertically =  gallery1W*3.07;
  let horizontally = gallery1W*-7.1069;
  img1red.style.backgroundPositionY = vertically +"px";
  img1red.style.backgroundPositionX = horizontally +"px";
  console.log(gallery1W);
*/



function tuttelefunzioni(){
  larghezzacaa1();
  bbincaa1();
  dimensioniboxmedio();
  btincaa3();
  gallery4();
  gallery1();
}
window.addEventListener("DOMContentLoaded", tuttelefunzioni);
window.addEventListener("resize", tuttelefunzioni);




//per far scorrere la galleria
const galleryContainers = document.querySelectorAll('.gallery-container');

galleryContainers.forEach(container => {
  const gallery = document.querySelector('.gallery');
  const galleryLeftButton = container.querySelector('.galleryleft');
  const galleryRightButton = container.querySelector('.galleryright');

  galleryLeftButton.addEventListener('click', () => {
    gallery.scrollBy({
      left: -gallery.offsetWidth,
      behavior: 'smooth'
    });
  });

  galleryRightButton.addEventListener('click', () => {
    gallery.scrollBy({
      left: gallery.offsetWidth,
      behavior: 'smooth'
    });
  });
});

