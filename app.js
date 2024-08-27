alert ('Boas vindas ao número secreto');
let numeroSecreto= 29;
prompt ('escolha um número entre 1 e 30');
app.js


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=Inter:wght@400;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>JS Game</title>
</head>

<body>
    <div class="container">
        <div class="container__conteudo">
            <img src="./img/robot.png" alt="robô mergulhador" class="container__imagem-robo" />
            <div class="container__informacoes">
                <img src="./img/trophy.png" alt="ícone de um troféu" />
                 <div class="container__texto">
                    <h1>Você <span class="container__texto-azul">acertou!</span></h1>
                    <h2>Você descobriu o número secreto!</h2>
                </div>
            </div>
        </div>
    </div>
    <script src="app.js" defer></script>
    alert('Boas
vindas ao numero secreto');


let
numeroSecreto = 6;


console.log(numeroSecreto);


let
chute;


let
tentativas = 1;


 


//enquanto
chute não for igual ao numero Secreto


while
(chute != numeroSecreto) {


 
  chute = prompt('Escolha um número entre 1 e 10');


 
  // se chute for igual ao número secreto


 
  if (chute == numeroSecreto) {


 
      alert(`Isso aí! Você descobriu o número secreto
${numeroSecreto} com
${tentativas} tentativas.`);


 


 
  } else {


 
      if (chute > numeroSecreto) {


 
      alert (`O numeroSecreto é menor que ${chute}`);


 
      } else {


 
      alert (`O numeroSecreto é maior que ${chute}`);


 
      }


    }   //tentativas = tentativas + 1;


 
      tentativas++;


}
</body>

</html>
