const frm = document.getElementById("frm");

const resp1 = document.getElementById("filme");

const resp2 = document.getElementById("horas");


frm.addEventListener("submit", (e) =>{

    const titulo = frm.inTitulo.value
    const duracao = frm.inDuracao.value




    const horas = Math.floor (duracao/60)
    const minutos = duracao % 60

    resp1.innerText = titulo
    resp2.innerText = (horas + " Hora(s) e " + minutos + " Minuto(s)")


    
    e.preventDefault()
})