const inicioHora = () => {
    let fecha = new Date();
    let hora = validacion(fecha.getHours());
    let minutos = validacion(fecha.getMinutes());
    let segundos = validacion(fecha.getSeconds());

    const $hora = document.getElementById("hora");
    $hora.innerHTML = `${hora}:${minutos}:${segundos}`;

    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
        'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const dias = [
        'Dom', 'Lun', 'Mar', 'Miér', 'Jue',
        'Viernes', 'Sáb'
    ];

    let diaDeSemana = dias[fecha.getDay()];
    let diaDelMes = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let año = fecha.getFullYear();
    let fechaTexto = `${diaDeSemana}, ${diaDelMes} ${mes}, ${año}`;
    document.getElementById('fecha').innerHTML = fechaTexto;
}

const validacion = (hora) => {
    if(hora < 10){
        hora = '0' + hora;
    }
    return hora;
}

setInterval(() => {
    inicioHora();
}, 1000);