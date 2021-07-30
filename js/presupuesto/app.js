const ingresos = [];

const egresos = [];

let appPresupuesto = () => {
    cargarPresupuestoDisponible();
    cargarIngresos();
    cargarEgresos();
}

const totalIngresos = () => {
    let totalIngresos = 0;
    ingresos.forEach(ingreso => {
        totalIngresos += ingreso.valor;
    });
    return totalIngresos;
}

const totalEgresos = () => {
    let totalEgresos = 0;
    egresos.forEach(egreso => {
        totalEgresos += egreso.valor;
    });
    return totalEgresos;
}

const porcentaje = () => {
    let porcentaje = 0;
    if(totalEgresos() > 0){
        porcentaje = totalEgresos() / totalIngresos();
    }
    return porcentaje;
}

const cargarPresupuestoDisponible = () => {
    //Calcular el presupuesto disponible 
    let presupuestoDisponible = totalIngresos() - totalEgresos();

    // let porcentaje = totalEgresos() / totalIngresos();

    const $presupuesto = document.getElementById('presupuesto'),
    $ingresos = document.getElementById('ingresos'),
    $egresos = document.getElementById('egresos'),
    $porcentaje = document.getElementById('porcentaje');

    //Mandamos los valores capturados al HTML
    $presupuesto.innerHTML = formatoMoneda(presupuestoDisponible);
    $ingresos.innerHTML = formatoMoneda(totalIngresos());
    $egresos.innerHTML = formatoMoneda(totalEgresos());
    $porcentaje.innerHTML = formatoPorcentaje(porcentaje());
    // $porcentaje.innerHTML = formatoPorcentaje(porcentaje);
}

const formatoMoneda = (x) => {
    return x.toLocaleString('es-PE', {style: 'currency', currency: 'PEN', minimumFractionDigits:2});
}

const formatoPorcentaje = (x) => {
    return x.toLocaleString('es-PE', {style: 'percent', minimumFractionDigits:2});
}

//------------------------- Sección Lista de Ingresos

const cargarIngresos = () => {
    let listaIngreso = '';
    ingresos.forEach(ingreso => {
        listaIngreso += nuevoIngreso(ingreso);
    });

    document.getElementById('lista-ingresos').innerHTML = listaIngreso;
}

const nuevoIngreso = (ingreso) => {
    let nuevoIngreso = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn" onclick="eliminarIngreso(${ingreso.id})">Eliminar</button>
            </div>
        </div>
    </div>
    `;
    return nuevoIngreso;
}

const eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    cargarPresupuestoDisponible();
    cargarIngresos();
}

//------------------------- Sección Lista de Egresos
const cargarEgresos = () => {
    let listaEgreso = '';
    egresos.forEach(egreso => {
        listaEgreso += nuevoEgreso(egreso);
    });

    document.getElementById('lista-egresos').innerHTML = listaEgreso;
}

const nuevoEgreso = (egreso) => {
    let nuevoEgreso = `
    <div class="elemento limpiarEstilos">
       <div class="elemento_descripcion">${egreso.descripcion}</div>
       <div class="derecha limpiarEstilos">
          <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
          <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor / totalEgresos())}</div>
          <div class="elemento_eliminar">
             <button class="elemento_eliminar--btn"  onclick="eliminarEgreso(${egreso.id})">Eliminar</button>
          </div>
       </div>
    </div>
    `;
    return nuevoEgreso;
}

const eliminarEgreso = (id) => {
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarPresupuestoDisponible();
    cargarEgresos();
}

//------------------------- Sección de Formulario Agregar

const agregar = () => {
    const $formulario = document.forms['formulario'],
        $tipo = $formulario['tipo'],
        $descripcion = $formulario['descripcion'],
        $valor = $formulario['valor'];

    if($descripcion.value !== '' && $valor.value !== ''){
        if($tipo.value === 'ingreso'){
            ingresos.push(new Ingreso($descripcion.value, +$valor.value));
            cargarPresupuestoDisponible();
            cargarIngresos();
            $descripcion.value = '';
            $valor.value = '';
            $descripcion.focus();
        }
        else if($tipo.value === 'egreso'){
            egresos.push(new Egreso($descripcion.value, +$valor.value));
            cargarPresupuestoDisponible();
            cargarEgresos();
            $descripcion.value = '';
            $valor.value = '';
            $descripcion.focus();
        }
    }
    else {
        alert("No hay datos para agregar, debe rellenar los campos");
        $descripcion.value = '';
        $valor.value = '';
        $descripcion.focus();
    }
}

