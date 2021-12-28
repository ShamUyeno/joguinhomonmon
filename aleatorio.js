 //1º. Gerar um num aleatório entre 200 e 2000.
//const number = Math.floor(Math.random() * 2000) + 200;
 //console.log(`Sistema: ${number}`);


//Botão de batalha do usuário->
 function gerar()
 {
  var Ataque1 = document.getElementById('Ataque1');
  Ataque1.innerHTML = Math.floor(Math.random() * 2000) + 200;;
       
 var Defesa1 = document.getElementById('Defesa1');
  Defesa1.innerHTML = Math.floor(Math.random() * 2000) + 200;;
 }

 