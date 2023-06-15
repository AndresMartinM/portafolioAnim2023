
async function tarjetasm() {
    const consulta = await fetch("https://raw.githubusercontent.com/AndresMartinM/Clase.230601/main/worksData.json");
    const data = await consulta.json();
    const donde = document.querySelectorAll(".tarjeta-sm");
    donde.forEach(function (t, i) {
        donde[i].innerHTML += '<a href="https://www.google.com" ><div class="tarjeta" style="background : url(https://picsum.photos/300/800); background-position: center top; background-repeat: no-repeat; background-size: 100% auto;"><div></div><h3>Trabajo en Madera</h3><h4>2023</h4><p></p></div></a>';
    });
}
async function tarjetamd() {
    const consulta = await fetch("https://raw.githubusercontent.com/AndresMartinM/Clase.230601/main/worksData.json");
    const data = await consulta.json();
    const donde = document.querySelectorAll(".tarjeta-md");
    donde.forEach(function (t, i) {
        donde[i].innerHTML += '<div class="tarjeta" style="background : url(https://picsum.photos/300/800); background-position: center top; background-repeat: no-repeat; background-size: 100% auto;"><div></div><h3>Trabajo en Madera</h3><h4>2023</h4><p></p></div>';
    });
}
async function tarjetalg() {
    const consulta = await fetch("https://raw.githubusercontent.com/AndresMartinM/Clase.230601/main/worksData.json");
    const data = await consulta.json();
    const donde = document.querySelectorAll(".tarjeta-lg");
    donde.forEach(function (t, i) {
        donde[i].innerHTML += '<div class="tarjeta" style="background : url(https://picsum.photos/600/800); background-position: center top; background-repeat: no-repeat; background-size: 100% auto;"><div></div><h3>Trabajo en Madera</h3><h4>2023</h4><p></p></div>';
    });
}
              
tarjetasm().catch((error) => console.error(error));
tarjetamd().catch((error) => console.error(error));
tarjetalg().catch((error) => console.error(error));

function copyText(texto){

var aux = document.createElement("input");
aux.setAttribute("value", texto);
document.body.appendChild(aux);
aux.select();
document.execCommand("copy");
document.body.removeChild(aux);

}