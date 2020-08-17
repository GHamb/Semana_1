var state = true
var estado = 0
var imagem = ["https://vignette.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png/revision/latest/top-crop/width/360/height/360?cb=20140126234206",
"https://i.pinimg.com/originals/74/85/9e/74859e89c2224734a9ce67f06019dc2e.png","https://i.pinimg.com/originals/90/2e/b1/902eb16546985bbc3b42628ee6bffdfe.png"]


window.onload = function () {

    document.getElementById('time').innerHTML= new Date().toLocaleString();
    document.getElementById('homer_titulo').onclick = function(e){
        if (state === true){
            this.innerHTML="Homer além da Rosquinha"
        }
        else{
            this.innerHTML = "Homer"
        }
        state = !state
    
    }
    document.getElementById('homer_principal').onclick = function(e){
        if(estado == imagem.length){
            estado=0;
        }
        this.src = imagem[estado]
        estado++
    }
    
    
}

