async function articulo() {
	
	var colores = [ "rojo", "azul", "celeste", "verde"];
	
	var n = new URLSearchParams(window.location.search).get("nro");
	n = Number(n);
	const consulta = await fetch("https://raw.githubusercontent.com/AndresMartinM/portafolioAnim2023/main/works.json");
    const data = await consulta.json();
    document.querySelector("#texto").innerHTML = '<div><small class="float-end">' + data[n].year + '</small><h1>' + data[n].title + '</h1><h2>' + data[n].text[0] + '</h2><div id="cuerpo-texto"></div></div>';
	data[n].text.forEach((x,i) => {
		if(i>0)document.querySelector("#cuerpo-texto").innerHTML += '<p>'+ x +'</p>';
	});
    data[n].image.forEach((x) => {
		document.querySelector("#fotos").innerHTML += '<img src="' + x + '" width="600px" class="w-100" alt="imagen del proyecto">'
    });
	
	var color = getRandomInt(colores.length);
	
	if (n == 1){
		document.querySelector("#texto").innerHTML += '<div class="enlaces col-4"><a class="' + colores[color] + '" href="https://github.com/AndresMartinM" target="_blank" aria-label="Enlace a GitHub">GitHub</a></div>'
	}
	if (n == 4){
		document.querySelector("#texto").innerHTML += '<div class="enlaces col-4"><a class="' + colores[color] + '" href="https://andresmartin.itch.io/" target="_blank" aria-label="Enlace a itch.io">itch.io</a></div>'
	}
	if (n == 6){
		document.querySelector("#texto").innerHTML += '<div class="enlaces col-4"><a class="' + colores[color] + '" href="https://sketchfab.com/andergenio" target="_blank" aria-label="Enlace a Sketchfab">Sketchfab</a></div>'
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function tarjetasm() {
    const consulta = await fetch("https://raw.githubusercontent.com/AndresMartinM/portafolioAnim2023/main/works.json");
    const data = await consulta.json();
    const donde = document.querySelectorAll(".tarjeta-sm");
    donde.forEach(function (t, i) {
        donde[i].innerHTML += '<a href="articulo.html?nro='+(i+3)+'" ><div class="tarjeta" style="background : url('+ data[i+3].image[0] +'); background-repeat: no-repeat; background-size: 100% auto;"><div class="sombra"></div><h3>' + data[i+3].title + '<p>' + data[i+3].text[0] + '</p></h3><h4>'+data[i+3].year +'</h4></div></a>';
    });
}
async function tarjetamd() {
    const consulta = await fetch("https://raw.githubusercontent.com/AndresMartinM/portafolioAnim2023/main/works.json");
    const data = await consulta.json();
    const donde = document.querySelectorAll(".tarjeta-md");
    donde.forEach(function (t, i) {
        donde[i].innerHTML += '<a href="articulo.html?nro='+(i+1)+'" ><div class="tarjeta" style="background : url('+ data[i+1].image[0] +'); background-repeat: no-repeat; background-size: 100% auto;"><div class="sombra"></div><h3>' + data[i+1].title + '<p>' + data[i+1].text[0] + '</p></h3><h4>'+data[i+1].year +'</h4></div></a>';
    });
}
async function tarjetalg() {
    const consulta = await fetch("https://raw.githubusercontent.com/AndresMartinM/portafolioAnim2023/main/works.json");
    const data = await consulta.json();
    const donde = document.querySelectorAll(".tarjeta-lg");
    donde.forEach(function (t, i) {
        donde[i].innerHTML += '<a href="articulo.html?nro='+i+'" ><div class="tarjeta" style="background : url('+ data[i].image[0] +'); background-repeat: no-repeat; background-size: 100% auto;"><div class="sombra"></div><h3>' + data[i].title + '<p>' + data[i].text[0] + '</p></h3><h4>'+data[i].year +'</h4></div></a>';
    });
}
              
articulo().catch((error) => console.error(error));
tarjetasm().catch((error) => console.error(error));
tarjetamd().catch((error) => console.error(error));
tarjetalg().catch((error) => console.error(error));
