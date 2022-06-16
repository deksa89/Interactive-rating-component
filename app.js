// buttons change color when clicked and no more than one button is selected

const ocijene = document.querySelectorAll(".rating-value");
let odabranoDugme;
let dugmad;
ocijene.forEach(element => {
// first way of doing it
//   element.addEventListener("click", () => {
//     Array.from(ocijene).some((puce) => {
//         if (puce.classList.contains("selected-button")) {
//         puce.classList.remove("selected-button");
//         }
//     });

//     dugmad = element.classList.toggle("selected-button");
//     odabranoDugme = Number.parseInt(element.textContent);
//   });


  // second way
    element.addEventListener("click", ()=>{
        ocijene.forEach(element => {
           if (element.classList.contains("selected-button")){
            element.classList.remove("selected-button");
           }
        })
        element.classList.add("selected-button");
        odabranoDugme = Number.parseInt(element.textContent);
    });  
});


const submitDugme = document.querySelector("#submit-btn");
const novaKartica = document.querySelector("#rating-kartica");

submitDugme.addEventListener("click", () => {
    if (odabranoDugme != undefined) {
      novaKartica.classList.add("thx-kartica"); //adding a new class for styling in css
      novaKartica.innerHTML = `
        <img class="thanks-img" src="images/illustration-thank-you.svg" alt="">
        <span class="rating-tag">You selected ${odabranoDugme} out of ${ocijene.length}</span>
        <h1 class="title">Thank you!</h1>
        <p class="description">We appreciate you taking the time to give a rating. If you ever need more support,
        don't hesitate to get in touch!</p>`;
    }
    else{
        submitDugme.textContent = "Please select a rating!";

        setInterval(() => {
        if (true){
            submitDugme.textContent = "Submit";
            }
        }, 1500); //1000 = 1000 miliseconds
    }; 
});

