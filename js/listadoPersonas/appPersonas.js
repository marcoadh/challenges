const ArrayPersonas = [
    new Persona('Marco', 'De la cruz')
];

const listPersonas = () => {
    let texto = "";

    // for(let persona of ArrayPersonas){
    //     texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    // }

    ArrayPersonas.forEach(persona => {
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    });
    let $ulPersonas = document.getElementById("personas");
    $ulPersonas.innerHTML = texto;
}

const agregarPersonas = () => {
    const $formulario = document.forms["formulario"];
    const $nombre = $formulario["nombre"];
    const $apellido = $formulario["apellido"];

    if($nombre.value != '' && $apellido.value != ''){
        // Creando un objeto de tipo Persona
        const persona = new Persona($nombre.value, $apellido.value);
        //Agregamos al arreglo de Personas
        ArrayPersonas.push(persona);
        listPersonas();
    }
    else {
        console.warn("No hay información que agregar.")
    }
}