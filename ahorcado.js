            let palabras = Array("naranja","kiwi","ciruela","limon","parchita","platano","pera","guanabana", "lechoza", "manzana", "guayaba");
            let palabra_a_adivinar = "";// palabra que se va a adivinar
            let palabra_adivinando_jugador = "";// palabra que se esta jugando
            let vidas = 4;
            document.getElementById("boton").addEventListener("click",comprobar);
            
            iniciar();
            function iniciar(){
            palabra_a_adivinar = palabras[Math.floor(Math.random()*palabras.length)];
            console.log(palabra_a_adivinar);
            for(let i=0; i < palabra_a_adivinar.length; i++){
            palabra_adivinando_jugador += "_ ";
            }
            document.getElementById("frase").innerHTML = palabra_adivinando_jugador;
        }

            function comprobar(){
                let letra = document.getElementById("letra").value.toLowerCase();// todas las letras pasan a minusculas
                palabra_a_adivinar = palabra_a_adivinar.toLocaleLowerCase();
                let nuevo = "";
                for(let i = 0; i < palabra_a_adivinar.length; i ++){
                    if(letra == palabra_a_adivinar[i]){
                        nuevo = nuevo + letra + " ";
                    }else{
                        nuevo = nuevo + palabra_adivinando_jugador[i*2] + " ";
                    }
                }
                if(nuevo == palabra_adivinando_jugador){
                    vidas --;
                    document.getElementById("vida").innerHTML = "Cuidado!!! le restan " + vidas + " vidas";
                }
                palabra_adivinando_jugador = nuevo;
                document.getElementById("frase").innerHTML = palabra_adivinando_jugador;
                if(vidas == 0){
                    alert ("Perdiste :-( ");
                }
                if(palabra_adivinando_jugador.search("_") == -1){
                    alert ("Ganaste !!!! :-D ");
                }
                document.getElementById("letra").value = "";// limpio la caja de texto
                document.getElementById("letra").focus();// se reposiciona el cursor dentro de la caja de texto
                
                dibujar();
            }