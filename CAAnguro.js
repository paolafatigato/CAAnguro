function RESET(){
  document.getElementById("textbox").value = "";
}
//la funzione Salva per adesso manda il testo inserito in Lavori in corso. perfetto. 
let TESTO = document.getElementById("textbox").value;
console.log(TESTO);
function Salva(event) {
  event.preventDefault(); // prevent default form submission behavior

    //prendi da textbox
    let TESTO = document.getElementById("textbox").value;

        //------------ boxtestoL ----- nuovobox1---------------------
        let nuovobox1 =document.createElement('div');
        nuovobox1.classList.add('boxtestoL');
        nuovobox1.innerHTML= `
        <h4></h4>
        <h5 class="h5 h5inboxtestoL"></h5>
        <a class="button buttondown" onclick="Traduci(event)">TRADUCI</a>
      `;
      //-------------------------------------------------------------
      //identifica box box
      let contenitoreboxtestoL =document.getElementById("contenitoreboxtestoL");
      contenitoreboxtestoL.appendChild(nuovobox1);

    let h5inboxtestoL =document.querySelectorAll(".h5inboxtestoL");
    for (let i = 0; i <= h5inboxtestoL.length; i++) {
      if (h5inboxtestoL[i].innerHTML === "") {
        h5inboxtestoL[i].innerHTML = TESTO;
        break;
      }
    };
    

    // Redirect to the second parte della pagina
    window.location.href = "#LAVORI";    
  }


//-----------------------TRADUCI------------------------------
        function Traduci(event){ //lo metto tra parentesi, così sa che cambia in base a dove clicco, lo devi mettere anche in html!
            // Clear the sessionStorage value, NON CREDO SIA SALVATO IN LOCAL STORAGE, verifica.
           localStorage.removeItem("textToTranslate");
          //devi capire su quale dei bottoni stai cliccando
          let tastoTspecifico =event.target;
          let boxtestoLspecifico = tastoTspecifico.closest (".boxtestoL");
          //trova h5 related
          let h5trovato = boxtestoLspecifico.querySelector("h5");
          //estrai il testo specifico
          let Testospe = h5trovato.textContent.trim(); //trim mi sa che toglie gli spazi in eccesso a inizio e fine della stringa. non credo ce ne sia davvero bisogno, ma vabbè
          let index = Array.from(document.querySelectorAll('.boxtestoL')).indexOf(boxtestoLspecifico);
          localStorage.setItem("textToTranslate", Testospe); //textToTranslate è il keyname, nome chiave per richiamare il testo //it will be used to recall it
          //let h5inboxtestoL = boxtestoL.querySelector("h5.h5inboxtestoL");
          localStorage.setItem("clickedIndex", index); //così si ricorda su quale TRADUCI hai cliccato

        //REDIRECT! 
          window.location.href = "#TRADUCI"; 
                // Get the stored text from sessionStorage
        let testoinT = localStorage.getItem("textToTranslate");
        let clickedIndex = localStorage.getItem("clickedIndex");

        

        //h4T.textContent = testoinT;

                            // Remove any existing divinareaT elements
                              const existingDivs = document.querySelectorAll('.divinareaT');
                              existingDivs.forEach(div => div.remove());


                              //---------------------SPLIT-------------------------------------
                              //proviamo a fare split.
                              
                              let singoleparole = testoinT.split(/[\n\s]+/)//.reverse(); // split to ARRAY, divide per ogni spazio e a capo \n
                              let areaT = document.getElementsByClassName('areaT');


                    //ti eri dimenticata di definire spazio in box testoB 

                              for(let i = 0; i < singoleparole.length; i++) {
                                let divinareaT = document.createElement('div');
                                divinareaT.classList.add('divinareaT'); //così ho a vista la struttura di html, mi sembra piùimmediato
                              
                                divinareaT.innerHTML = `
                                    <div class="immagini">  <img class="imgDivT" src="" alt="">   </div>
                                    <div class="parole">    <h4 class="singolaparola">${singoleparole[i]}</h4>    </div>
                                    <button class="InsertImage button" onclick="IImm(event)">+immagine</button>
                                `;

                                //controllo se ci sono  PeB, se ci sono e ci sono xk stanno in html!, inserisco un divinareaT accanto al PeB; 
                                //se non ci sono PeB ... perchè non dovrebbero esserci elementi PeB?! sotto c'è clear area! 
                                if (areaT.length > 0) {
                                  areaT[0].appendChild(divinareaT);
                              } else {
                                document.querySelector('.PeBgrande').appendChild(divinareaT);
                              }
                              }
        }
        let divinareaT = document.querySelector('.divinareaT');

        
/**-----------------IImm aggiungere immagini------------------------- */
              function IImm(event){ 
                const fileInput = document.createElement('input');
                fileInput.type = 'file';
                //aggiunte
                fileInput.accept = 'image/*';
                fileInput.style.display = 'none';
              
                            
                let tastoIspecifico =event.target;
                let boxTspecifico = tastoIspecifico.closest (".divinareaT");
                boxTspecifico.classList.add('has-image'); //mi serve per CSS
                    // okay, assicurarti che ??? non ho capito, ma senza non funzionava.
                    fileInput.addEventListener('change', () => {
                    
                      const file = fileInput.files[0];
                  
                      // Crea object Filereader
                      const reader = new FileReader();
        
                      // LOAD 
                      reader.addEventListener('load', () => {
                        // Create an IMAGE element
                        const imgDivT = boxTspecifico.querySelector('.imgDivT'); //it works con queryselector, non funzionava con get element. bah
                        
                        //src
                        let imgBase64 = imgDivT.src = reader.result;                                          

                        //TODO: salvare imgBase64 in localStorage (insieme alla parola)
                        // Get the corresponding word and save it along with the image data
                    const singolaparola = boxTspecifico.querySelector('.singolaparola').textContent;
                    localStorage.setItem(singolaparola, imgBase64);
                    
                    const immaginiDiv = boxTspecifico.querySelector('.immagini');
                        immaginiDiv.appendChild(imgDivT);     

                      });
                          
                // leggi come URL
                reader.readAsDataURL(file);
              });
              
                // Trigger a click on the file input element to open the file dialog
              fileInput.click();  //senza non funziona, anche se il click non è già nella funzione di html?                                
              

  // Check if an image has been uploaded
  if (fileInput.length > 0) {
    // Add the has-image class to the parent .divinareaT element
    imgDivT.parentNode.classList.add('has-image');
  } 

                };
                

function SalvaT(){ //per                  
              // Create a new boxtestoC element
              const boxtestoC = document.createElement('div');
              boxtestoC.classList.add('boxtestoC');

// Retrieve all elements with class 'singolaparola'
const singoleparoleElements = document.querySelectorAll('.singolaparola');

// Map over the elements to extract their inner text content
const singoleparole = Array.from(singoleparoleElements).map(el => el.textContent);
              const originalText = singoleparole.join(' ');

              // 
              boxtestoC.innerHTML =  `
              <h4 class="originaltext">${originalText}</h4>
              <a class="button buttondown" onclick="ReadMore(event)">LEGGI</a>
          `;

              // Add the boxtestoC element to the contenitoreboxtestoC container
              const contenitoreboxtestoC = document.querySelector('.contenitoreboxtestoC');
              contenitoreboxtestoC.appendChild(boxtestoC);


  //facciamola più facile. facciamo che togliamo le divinareaT da PeB e le mettiamo in Biblioteca? 
// Create a new boxtestoB element
const boxtestoB = document.createElement('div');
boxtestoB.classList.add('boxtestoB');
                          // Store the reference to the boxtestoC element as a property of the boxtestoB element
                          boxtestoB.boxtestoC = boxtestoC;

// Get all divinareaT elements
const divinareaTElements = document.querySelectorAll('.divinareaT');

// Loop through the divinareaT elements and create a divinareaB element for each one
  for (let i = 0; i < divinareaTElements.length; i++) {
    const divinareaT = divinareaTElements[i];

    // Get the singolaparola and image elements
    const singolaparola = divinareaT.querySelector('.singolaparola');
    const img = divinareaT.querySelector('img');
    

    // Create a new divinareaB element
    const divinareaB = document.createElement('div');
    divinareaB.classList.add('divinareaB');
    divinareaB.innerHTML = `
      <div class="immagini">
        ${img ? `<img class="imgDivT" src="${img.getAttribute('src')}" alt="${img.getAttribute('alt')}">` : ''}
      </div>
      <div class="parole">
        <h4 class="singolaparola">${singolaparola.textContent}</h4>
      </div>
    `;

    // Add the divinareaB element to the boxtestoB element
    boxtestoB.appendChild(divinareaB);
  }
let tastiboxtestoB = document.createElement('div');
tastiboxtestoB.classList.add('tastiboxtestoB');

let tastoMod = document.createElement('a');
tastoMod.innerHTML = `
<a class="button buttondown" onclick="modifica(event)">MODIFICA</a>
`;

let heartB = document.createElement('button');
heartB.innerHTML = '<i class="far fa-heart"></i>';
heartB.classList.add('heart', 'heartB');
heartB.setAttribute('onclick', 'HeartB(event)'); //così sto dicendo che se clicco, si attiva la funzione Heart

let tastoPrint = document.createElement('a');
tastoPrint.innerHTML = `
<a class="button print" ><i class="fas fa-print"></i></a>
`;


boxtestoB.appendChild(tastiboxtestoB);
tastiboxtestoB.appendChild(tastoMod);
tastiboxtestoB.appendChild(heartB);
tastiboxtestoB.appendChild(tastoPrint);

let heartC = document.createElement('button');
heartC.innerHTML = '<i class="far fa-heart"></i>';
heartC.classList.add('heart', 'heartC');
heartC.setAttribute('onclick', 'HeartC(event)');

boxtestoC.appendChild(heartC);

// Add the boxtestoB element to the page
const contenitoreboxtestoB = document.querySelector('.contenitoreboxtestoB');
contenitoreboxtestoB.appendChild(boxtestoB);

            document.querySelectorAll('.print').forEach(button => {
              button.addEventListener('click', event => {
                // Prevent default behavior of the print button
                event.preventDefault();

                // Clone the .boxtestoB div
                const boxToPrint = event.target.closest('.boxtestoB').cloneNode(true);

                // Remove the .tastiboxtestoB div from the cloned element
                const tastiBox = boxToPrint.querySelector('.tastiboxtestoB');
                tastiBox.parentNode.removeChild(tastiBox);

                // Print the cloned element
                window.print();
              });
            });


// Clear the divinareaT elements
const PeB = document.querySelector('.areaT');
PeB.innerHTML = '';

// Redirect to the library section
window.location.href = '#BIBLIOTECA';
}


function modifica(event) {
let areaT = document.querySelector('.areaT');
//prima di tutto svuota areaT
areaT.innerHTML = '';

  event.preventDefault();

  // Get the boxtestoB element
  const boxtestoB = event.target.closest('.boxtestoB');

  // Get all the divinareaB elements
  const divinareaBElements = boxtestoB.querySelectorAll('.divinareaB');

  // Loop through the divinareaB e crea 1 divinareaT element for each
  for (let i = 0; i < divinareaBElements.length; i++) {
    const divinareaB = divinareaBElements[i];

    // Get the image and singolaparola elements
    const img = divinareaB.querySelector('.imgDivT');
    const singolaparola = divinareaB.querySelector('.singolaparola');

    // Create a new divinareaT element
    const divinareaT = document.createElement('div');
    divinareaT.classList.add('divinareaT');
    divinareaT.innerHTML = `
      <div class="immagini">
        ${img ? `<img class="imgDivT" src="${img.getAttribute('src')}" alt="${img.getAttribute('alt')}">` : '<img class="imgDivT" src="" alt="">'}
      </div>
      <div class="parole">
        <h4 class="singolaparola">${singolaparola.textContent}</h4>
      </div>
      <button class="InsertImage button" onclick="IImm(event)">+immagine</button>
    `;

    

areaT.appendChild(divinareaT);
  }
  
  // Redirect 
window.location.href = '#LAVORI';
}


    function ReadMore(event) {
      // prendi il genitore del bottone
      const boxtestoC = event.target.closest('.boxtestoC');
      const boxtestoBs = document.querySelectorAll('.boxtestoB');

      // get the index del box specifico
      const boxtestoCs = document.querySelectorAll('.boxtestoC');
      const n = Array.prototype.indexOf.call(boxtestoCs, boxtestoC);

      const boxtestoB = boxtestoBs[n];

      // Scroll to the divinareaB element
      boxtestoB.scrollIntoView();
    }
              function HeartC(event) {
                      // prendi il genitore del bottone
                      const boxtestoCs = document.querySelectorAll('.boxtestoC');
                      const boxtestoC = event.target.closest('.boxtestoC');
                      const boxtestoBs = document.querySelectorAll('.boxtestoB');
                      // get the index del box specifico                      
                      const n = Array.prototype.indexOf.call(boxtestoCs, boxtestoC);
                
                      const boxtestoB = boxtestoBs[n];

                        // add class to heart in boxtestoC
                const heartC = event.target;


                // find heart in boxtestoB and add same class
                const heartB = boxtestoB.querySelector('.heartB');


                if (heartC.classList.contains('hearted')) {
                  // remove "hearted" class from both hearts
                  heartC.classList.remove('hearted');
                  heartB.classList.remove('hearted');
                } else {
                  // add "hearted" class to both hearts
                  heartC.classList.add('hearted');
                  heartB.classList.add('hearted');
                }
              }
              function HeartB(event) {
                // prendi il genitore del bottone
                const boxtestoBs = document.querySelectorAll('.boxtestoB');
                const boxtestoB = event.target.closest('.boxtestoB');
                const boxtestoCs = document.querySelectorAll('.boxtestoC');

                // get the index del box specifico
                
                const n = Array.prototype.indexOf.call(boxtestoBs, boxtestoB);

                const boxtestoC = boxtestoCs[n];

                  // add class to heart in boxtestoC
              const heartB = event.target;

              // find heart in boxtestoB and add same class
              const heartC = boxtestoC.querySelector('.heartC');

              if (heartC.classList.contains('hearted')) {
                // remove "hearted" class from both hearts
                heartC.classList.remove('hearted');
                heartB.classList.remove('hearted');
              } else {
                // add "hearted" class to both hearts
                heartC.classList.add('hearted');
                heartB.classList.add('hearted');
              }
              }


