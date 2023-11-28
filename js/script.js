/* 
  <p>Introduce un número del 1 al 3 y pulsa enter o clicka fuera del cuadrado:</p>
  <input type="number" placeholder="0" id="userInput" min="1" max="3">
  <div id="countdown"></div>
  <div id="result"></div>
  <button id="restart">Reiniciar Juego</button>
  */

  const opciones = [1, 2, 3];
  let userNumber= document.getElementById('userInput');
  let countDown = document.getElementById("countdown");
  let result = document.getElementById("result");
  let restartButton = document.getElementById("restart");
  let green = document.querySelector('.green');
  let red = document.querySelector('.red');

  document.addEventListener('click', (e) => {
    e.preventDefault();
    if(opciones.includes(parseInt(userNumber.value))){
        startGame();
        }else{
            alert("Por favor ingresa un numero entre el 1 y el 3")
            }
            });
            function startGame(){                
                let timeLeft = 5;
                let timerInterval = setInterval(()=>{
                    countDown.textContent = "Cuenta atras: "+timeLeft+" segundos";
                    timeLeft--;
                    if(timeLeft<0){
                        clearInterval(timerInterval);
                        checkResult()
                        }
                        },1000);
                        };
                        function checkResult(){
                            let numberRandom = opciones[Math.floor(Math.random()* 3)]
                                console.log(numberRandom);
                            if(userNumber.value == numberRandom ){
                                green.innerHTML =`¡Has salvado el mundo! ${userNumber.value} es igual a ${numberRandom}`
                                } else{
                                    red.innerHTML =`¡La bomba ha estallado, ${userNumber.value} no es igual a ${numberRandom} !`
                                    }
                                    setTimeout(()=>{
                                        location.reload();
                                        },4000);
                                        }

  


  

