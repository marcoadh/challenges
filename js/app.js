const $cartasDesafios = document.getElementById("frontend"),
    $cartasApps = document.getElementById("apps"),
    $template = document.getElementById("template_carta").content,
    $fragment = document.createDocumentFragment(),
    cartasFrontend = [
        {
            descripcion: "Card Component",
            img: "resultados-imagenes/1-challenge-desktop.png",
            link: "component-card.html",
        },
        {
            descripcion: "Card Column",
            img: "resultados-imagenes/2-challenge-cardcolumn-desktop.png",
            link: "column-card.html",
        },
        {
            descripcion: "Card Person",
            img: "resultados-imagenes/3-challenge-card-person-desktop.png",
            link: "person-card.html",
        },
        {
            descripcion: "LandingPage Hiddle",
            img: "resultados-imagenes/4-challenge-landing-page-hiddle-desktop.png",
            link: "landingpage-huddle.html",
        },
        {
            descripcion: "Social Section",
            img: "resultados-imagenes/5-challenge-social_proof_section-desktop.png",
            link: "social-proof-section.html",
        },
        {
            descripcion: "Single Price",
            img: "resultados-imagenes/6-challenge-single_price_section-desktop.png",
            link: "single-price.html",
        },
    ];
    cartasApps = [
        {
            descripcion: "Reloj Digital",
            img: "img/img-portada/appRelojDigital.png",
            link: "relojDigital.html",
        },
        {
            descripcion: "Lista de Personas",
            img: "img/img-portada/appListaPersonas.png",
            link: "personas.html",
        },
        {
            descripcion: "Calcular Presupuesto",
            img: "img/img-portada/appCalcularPresupuesto.png",
            link: "presupuesto.html",
        },
    ];

cartasFrontend.forEach(carta => {
    $template.querySelector("a").textContent = carta.descripcion;
    $template.querySelector("a").setAttribute("href", carta.link);
    $template.querySelector("a").setAttribute("target", "_blank");
    $template.querySelector("img").setAttribute("src", carta.img);
    $template.querySelector("img").setAttribute("alt", carta.descripcion);

    let $clon = document.importNode($template, true);
    $fragment.appendChild($clon);
});
$cartasDesafios.appendChild($fragment);

cartasApps.forEach(carta => {
    $template.querySelector("a").textContent = carta.descripcion;
    $template.querySelector("a").setAttribute("href", carta.link);
    $template.querySelector("a").setAttribute("target", "_blank");
    $template.querySelector("img").setAttribute("src", carta.img);
    $template.querySelector("img").setAttribute("alt", carta.descripcion);
    
    let $clon = document.importNode($template, true);
    $fragment.appendChild($clon);
});

$cartasApps.appendChild($fragment);