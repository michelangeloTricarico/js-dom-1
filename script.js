/* Exercise
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.

Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

BONUS

Facciamo accendi e spegni:

Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via...
*/

// ⬇ Get html tags with img and button
const imgElement = document.querySelector("img")
console.log(imgElement)
const buttonElement = document.querySelector("button")
console.log(buttonElement)

// 🖱 Connect button click to function fot lamp and text change
buttonElement.addEventListener("click",ChangeLampStaus)

// 💡 Definition function to change lamp status and text in button
function ChangeLampStaus(){
    if (buttonElement.innerHTML == "Accendi"){
        buttonElement.innerHTML = "Spegni"
        //console.log(buttonElement.innerHTML)
        imgElement.src = "./img/yellow_lamp.png"
        imgElement.style.marginLeft = "-2.5rem"
    }
    else{
        buttonElement.innerHTML = "Accendi"
        //console.log(buttonElement.innerHTML)
        imgElement.src = "./img/white_lamp.png"
        imgElement.style.marginLeft = "2.5rem"
    }

}