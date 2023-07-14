const inputValue = document.getElementById('inputValue')
const mainForm = document.getElementById('mainForm')
const enterText = document.createElement('p')
const historyOfInput = document.getElementById("history")

//rozmiar czcionki 
let fontHeigh = 1

// force lowercase
inputValue.addEventListener('input',function(){this.value=this.value.toLowerCase()})


//zmiana coloru
let changeColor = false
// allways focus
setInterval(function(){
    inputValue.focus();
   });

const historyofQuery = []

document.onkeydown = function(e) {
    if (e.keyCode == 38 ) { 
        inputValue.value = historyofQuery[historyofQuery.length -1 ]    
    }
    if (e.keyCode == 40 ){
        inputValue.value = ""
    }
};

//zapisywanie wartosci input i resetowajnie 
const saveInput = () =>{
    const element = document.createElement("p")
    element.innerText = inputValue.value
    historyOfInput.appendChild(element)
    //zapisanie w array wpisywanych wyrazów.
    historyofQuery.push(inputValue.value)
    inputValue.value = ""
    
}

const helpMenu = ()=>{
    const element = document.createElement("p")
    element.innerText = "color - change color of background"
    historyOfInput.appendChild(element)
    const element2 = document.createElement("p")
    element2.innerText = "font - change size of font"
    historyOfInput.appendChild(element2)
    const element3 = document.createElement("p")
    element3.innerText = "date - display current date"
    historyOfInput.appendChild(element3)
    const element31 = document.createElement("p")
    element31.innerText = "time - display current time"
    historyOfInput.appendChild(element31)
    const element4 = document.createElement("p")
    element4.innerText = "clean - delete history"
    historyOfInput.appendChild(element4)
    const element5 = document.createElement("p")
    element5.innerText = "exit - refresh page"
    historyOfInput.appendChild(element5)

}

const handleComments = () =>{



    switch (inputValue.value) {
        case "help":
          helpMenu();
          break;

        case "clean":
          while (historyOfInput.firstChild) {
            historyOfInput.removeChild(historyOfInput.lastChild);
          }
          break;
    
        case "color":
          changeColor = true;
          const colorElement = document.createElement("p");
          colorElement.innerText = "Enter preferred color of background";
          historyOfInput.appendChild(colorElement);
          break;
    
        case "font":
          switch (fontHeigh) {
            case 1:
              document.querySelector('*').style.fontSize = "1.2rem"
              fontHeigh+=1
              const fontSize = document.createElement("p");
              fontSize.innerText = 'font size set to 1.2rem';
              historyOfInput.appendChild(fontSize);
              break;
            case 2:
              document.querySelector('*').style.fontSize = '1.4rem'
              fontHeigh+=1
              const fontSize4 = document.createElement("p");
              fontSize4.innerText = 'font size set to 1.4rem';
              historyOfInput.appendChild(fontSize4);
              break;
            case 3:
              document.querySelector('*').style.fontSize = '1.6rem'
              fontHeigh+=1
              const fontSize6 = document.createElement("p");
              fontSize6.innerText = 'font size set to 1.6rem';
              historyOfInput.appendChild(fontSize6);
              break;
            case 4:
              document.querySelector('*').style.fontSize = '1.8rem'
              fontHeigh=1
              const fontSize8 = document.createElement("p");
              fontSize8.innerText = 'font size set to 1.8rem';
              historyOfInput.appendChild(fontSize8);
              break;
          
            default:
              break;
          }
          break;
    
        case "date":
          let currentDate = new Date().toJSON().slice(0, 10);
          const dateElement = document.createElement("p");
          dateElement.innerText = currentDate;
          historyOfInput.appendChild(dateElement);
          break;

        case "time":
            let currentTime = new Date().toJSON().slice(11, 19);
            const timeElement = document.createElement("p");
            timeElement.innerText = currentTime;
            historyOfInput.appendChild(timeElement);
            break;
      
    
        case "exit":
          location.reload();
          break;
        
          case "":
          const emptyElement = document.createElement("p");
          emptyElement.innerText =
            "'empty string' is not recognized as an internal or external command, operable program or batch file. Type 'help' for help";
          historyOfInput.appendChild(emptyElement);
          break
    
        default:
          const defaultElement = document.createElement("p");
          defaultElement.innerText =""+ inputValue.value+""+
            " is not recognized as an internal or external command, operable program or batch file. Type 'help' for help";
          historyOfInput.appendChild(defaultElement);
      }
      //zmiana koloru
      if (changeColor) {
        if (inputValue.value.toLowerCase() === "color") {
       } else {
          document.body.style.background = inputValue.value;
          if (inputValue.value !== "") {
            changeColor = false;
          }
        }
      }
}

//obsluga form
mainForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    handleComments()
    saveInput()

})