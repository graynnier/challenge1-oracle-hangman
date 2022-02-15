function dibujar(){
    var canvas = document.getElementById("lienzo");
    if(canvas.getContext){
        var ctx = canvas.getContext("2d");
        ctx.beginPath();// Armazon del ahorcado
        ctx.moveTo(100,200);
        ctx.lineTo(100,10);
        ctx.lineTo(150,10);
        ctx.lineTo(150,20);
        ctx.stroke();

        if(vidas<=3){
           ctx.beginPath();//cabeza
           ctx.arc(150,30,10,0, Math.PI * 2);
           ctx.stroke();
        }
        if(vidas<=2){
            ctx.beginPath();//cuerpo
            ctx.moveTo(150,40);
            ctx.lineTo(150,100);
            ctx.stroke();
        } 
        if(vidas<=1){
            ctx.beginPath();// brazos
            ctx.moveTo(150,40);
            ctx.lineTo(130,100);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(150,40);
            ctx.lineTo(170,100);
            ctx.stroke();
        }
        if(vidas==0){
            ctx.beginPath();// Piernas
            ctx.moveTo(150,100);
            ctx.lineTo(170,130);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(150,100);
            ctx.lineTo(130,130);
            ctx.stroke();
        }
    }
}