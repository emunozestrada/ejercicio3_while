// ===========Ejecicio1=============================================
function enviarNumero1() {
  let numero1 = document.getElementById("numero1").value; 
  let cualquierNumero =parseInt(numero1); 
  

  if (numero1 === "") {
    alert("Ingresa un valor");
  }else{
    let i = 1;
    let multiplos = [];

    while(i<= cualquierNumero){
    
      if(i % 5 === 0) {
        multiplos.push(i);           
      }
      i++;
    }
    alert(cualquierNumero + " tiene los siguientes números múltiplos de 5: " + multiplos.join(", ") );  
  }   
}

// ===========Ejecicio2=============================================
function enviarNumeros() {
  let numeroUno = document.getElementById("numeroUno").value;
  let numeroDos = document.getElementById("numeroDos").value; 
  let cualquierNumeroUno =parseInt(numeroUno); 
  let cualquierNumeroDos =parseInt(numeroDos);  
  

  if (numeroUno === "" || numeroDos === "" ) {
    alert("Ingresa un valor");
  }else{    
    let number = 1; 
    let printNumbers = [];

    while(number <= 50){  
      printNumbers.push(number);     
      console.log(number);   
      number++;      
    }
    console.log(printNumbers);
    if(cualquierNumeroUno >= 1 && cualquierNumeroUno <= 50 && cualquierNumeroDos >= 1 && cualquierNumeroDos <= 50) {
      console.log("lotería");
    } else {
      console.log("Los números deben estar entre 1 y 50");
    }    
  }   
}   
// ===========Ejecicio3=============================================

let numeroArray = [];

function enviarNumeroCualquiera(){
  let numeroCualquiera = document.getElementById("numeroCualquiera").value;
  let numeroCualquieraNum =parseInt(numeroCualquiera); 
  

  if (numeroCualquiera === "" || isNaN(numeroCualquieraNum)) {
    alert("Ingresa un valor numérico válido");
  }else{
    if(numeroCualquieraNum !== 0){
      numeroArray.push(numeroCualquieraNum);
      document.getElementById("numeroCualquiera").value = "";
      let a = 0;
      let numerosAlAzar = [];

      while(a < numeroArray.length){       
        numerosAlAzar.push(numeroArray[a]); 
        a++;                              
      }      
     alert("Has escrito el/los siguientes números: [" + numerosAlAzar.join(", ") + "]"); 
    } 
  } 
} 

// ===========Ejecicio4=============================================

let array = [];

function enviarPalabra(){
  let palabra = document.getElementById("palabra").value;

  if (!isNaN(palabra)) {
    alert("Ingresa un texto válido");
  }else{
    if(palabra !== ""){
      array.push(palabra);
      document.getElementById("palabra").value ="";
      let b = 0;
      let palabrasArray = [];

      while(b < array.length){       
        palabrasArray.push(array[b]); 
        b++;                              
      }      
     alert("Has escrito la/las siguientes palabras: " + palabrasArray.join(" ")); 
    }
    
  }

}

// ===========Ejecicio5=============================================

function quitarTildes(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

let diaSemana = [];

function enviarDia() {
  let dia = document.getElementById("dia").value.toLowerCase();  
  let textoNormalizado = quitarTildes(dia);

  if (!isNaN(textoNormalizado)) {
    alert("Ingresa un día válido");
  }else{   
    document.getElementById("dia").value ="";
    let d = 1;

      while(d <= 7 ){
        switch(d){
          case 1:
            if(textoNormalizado === "lunes"){        
              alert("¡Vaya! vas empezando la semana");
            }
            break;
          case 2:
            if(textoNormalizado === "martes"){        
              alert("Segundo día de la semana, ¡no vas ni por la mitad!");
            }
            break;
          case 3:
            if(textoNormalizado === "miercoles"){        
              alert("¡Al fin vas por la mitad de la semana!");
            }
            break;
          case 4: 
            if(textoNormalizado === "jueves"){        
              alert("El día que faltaba: ¡jueves cultural!");
            }
            break;
          case 5:  
            if(textoNormalizado === "viernes"){        
              alert("¡fin de la jornada laboral!");
            }
            break;
          case 6:
            if(textoNormalizado === "sabado"){        
              alert("¡Llegó al fin el finde!");      
            }
            break;
          case 7:
            if(textoNormalizado === "domingo"){        
              alert("Ve a descansar")
            }
            break;          
        }
        d++;
      }      
  }
}





  

  
 