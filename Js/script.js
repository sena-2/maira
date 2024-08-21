mostrar = localStorage.getItem("like")
if(!mostrar){
    document.getElementById("gusta").innerHTML="("+0+")"
}else{  
    document.getElementById("gusta").innerHTML="("+mostrar+")"
}

mostrar = localStorage.getItem("dislike")
if(!mostrar){
    document.getElementById("no me gusta").innerHTML="("+0+")"
}else{  
    document.getElementById("no me gusta").innerHTML="("+mostrar+")"
}


const meGusta=()=>{
    let recuperar,guardar,mostrar
    recuperar = localStorage.getItem("like")
    if(recuperar){
        guardar = parseInt(recuperar) + 1
    }
    else{
        guardar = 1
    }

    localStorage.setItem("like",guardar)
    mostrar = localStorage.getItem("like")
    document.getElementById("gusta").innerHTML="("+mostrar+")"
     
}

const nomeGusta=()=>{
    let recuperar,guardar,mostrar
    recuperar = localStorage.getItem("dislike")
    if(recuperar){
        guardar = parseInt(recuperar) + 1
    }
    else{
        guardar = 1
    }

    localStorage.setItem("dislike",guardar)
    mostrar = localStorage.getItem("dislike")
    document.getElementById("no me gusta").innerHTML="("+mostrar+")"
     
}



document.getElementById('mobile-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('navbar').classList.toggle('active');
});
