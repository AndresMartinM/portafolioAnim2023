async function articulo() {
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
}

articulo().catch((error) => console.error(error));