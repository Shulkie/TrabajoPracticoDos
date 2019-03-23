// Una empresa de venta de computadoras está desarrollando un sistema para llevar registro de ventas. Para ello cuenta con la siguiente información:

// Lista de las vendedoras de la empresa
// Lista de ventas. Un array con objetos. Cada objeto representa una venta y tiene las propiedades fecha, nombreVendedora (un String con el nombre), componentes (un array Strings con el nombre de cada componente vendido).
// Lista de precios de los componentes, de la forma (nombre componente, precio).


var local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

    ventas: [
        { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
        { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
        { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
    ],

    precios: [
        {
            componente: "Monitor GPRS 3000",
            precio: 200
        },
        { componente: "Motherboard ASUS 1500", precio: 120 },
        { componente: "Monitor ASC 543", precio: 250 },
        { componente: "Motherboard ASUS 1200", precio: 100 },
        { componente: "Motherboard MZI", precio: 30 },
        { componente: "HDD Toyiva", precio: 90 },
        { componente: "HDD Wezter Dishital", precio: 75 },
        { componente: "RAM Quinston", precio: 110 },
        { componente: "RAM Quinston Fury", precio: 230 }
    ]
};


//   Se pide desarrollar las siguientes funciones:

// precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.



function precioMaquina(array) {
    var suma = 0;
    for (var i = 0; i < array.length; i++) {
        // console.log(array[i]);
        for (var j = 0; j < local.precios.length; j++) {
            // console.log(local.precios[j]);
            if (array[i] === local.precios[j].componente) {
                // console.log(local.precios[j].componente)
                suma += local.precios[j].precio
            }
        }
    }
    return suma
}


var ventaDelDia = ["Monitor GPRS 3000", "Motherboard ASUS 1500"]

console.log(precioMaquina(ventaDelDia)); // 320 ($200 del monitor + $120 del motherboard)


// function precioMaquina(componentes) {
//     componentes.map(function (item, indice, array) {
//         local.precios.map(function (itemdos, idos, arraydos) {

//         }
//         )
//     }
//     )
// }

// cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido,
// o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro,
//se asume que está identificada por la variable ventas.

function cantidadVentasComponente(cosas) {
    var acumuladora = 0;
    for (let index = 0; index < local.ventas.length; index++) {
        //   console.log (local.ventas[index]);
        for (let c = 0; c < local.ventas[index].componentes.length; c++) {
            // console.log(local.ventas[index].componentes[c])
            if (cosas === local.ventas[index].componentes[c]) {
                acumuladora++
            };
        }
    }
    return acumuladora
}

console.log(cantidadVentasComponente("Monitor ASC 543")); // 2

// vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) 
// y devuelve el nombre de la vendedora que más vendió en plata en el mes.
//  O sea no cantidad de ventas, sino importe total de las ventas. 
//  El importe de una venta es el que indica la función precioMaquina.


// el mes que buscamos, que vendedora vendio en cada mes y cuanta plata cada vendedora

// console.log (local.ventas[0].fecha.getMonth())
// console.log (local.ventas[0].fecha.getFullYear())


// function vendedoraDelMes(mes, anio) {

//     var ventasAda = 0;
//     var ventasGrace = 0;


//     for (let index = 0; index < local.ventas.length; index++) {

//         var componentes = local.ventas[index].componentes;
//         console.log(local.ventas[index].componentes)
//         if (local.ventas[index].fecha.getMonth() + 1 == mes && local.ventas[index].fecha.getFullYear() == anio) {

//             if (local.ventas[index].nombreVendedora === "Grace") {
//                 ventasGrace += precioMaquina(componentes)
//                 console.log(precioMaquina(componentes))
//             } else {
//                 ventasAda += precioMaquina(componentes)
//             }
//             console.log(ventasGrace);
//             console.log(ventasAda);

//         }
//     }

//     if (ventasAda > ventasGrace) {
//         return "Ada"

//     } else {
//         return "Grace"
//     }


// }


function vendedoraDelMes(mes, anio) {


    var arrayVendedora = []

    for (let j = 0; j < local.vendedoras.length; j++) {
        var objetoNuevo = {
            nombre: local.vendedoras[j],
            ventas: 0,

        }
        for (let index = 0; index < local.ventas.length; index++) {
            if (local.ventas[index].fecha.getMonth() + 1 == mes && local.ventas[index].fecha.getFullYear() == anio) {
                if (local.vendedoras[j] === local.ventas[index].nombreVendedora) {
                    if (objetoNuevo.nombre === local.ventas[index].nombreVendedora) {
                        objetoNuevo.ventas = objetoNuevo.ventas + precioMaquina(local.ventas[j].componentes)

                    }
                }
            }


        }
        arrayVendedora.push(objetoNuevo)

    }
    console.log(arrayVendedora)

    var ventaMax = 0
    var vendedoraMax;

    for (let k = 0; k < arrayVendedora.length; k++) {
        if (arrayVendedora[k].ventas > ventaMax) {
            ventaMax = arrayVendedora[k].ventas;
            vendedoraMax = arrayVendedora[k].nombre;
            return vendedoraMax
        }

    }

}

console.log(vendedoraDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)



// ventasMes(mes, anio): Obtener las ventas de un mes.


function ventasMes(mes, anio) {

    var sumaMes = 0

    for (let index = 0; index < local.ventas.length; index++) {
        var componentes = local.ventas[index].componentes
        if (local.ventas[index].fecha.getMonth() + 1 == mes && local.ventas[index].fecha.getFullYear() == anio) {
            sumaMes = sumaMes + precioMaquina(componentes)
        }

    }
    return sumaMes
}


console.log(ventasMes(1, 2019)); // 1250



// ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.

function ventasVendedora(nombre) {
    var sumaVendedora = 0
    var arrayComponentes = []
    for (let index = 0; index < local.ventas.length; index++) {

        if (local.ventas[index].nombreVendedora === nombre) {
            arrayComponentes.push(local.ventas[index].componentes)
        }
    }
    for (let c = 0; c < arrayComponentes.length; c++) {
        sumaVendedora = sumaVendedora + precioMaquina(arrayComponentes[c])

    }
    return sumaVendedora
}



console.log(ventasVendedora("Grace")); // 900



// componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente.
//  El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente

function componenteMasVendido() {

    var objeto = {
        nombre: [],
        cantidadDeVentas: [],

    }
    for (let index = 0; index < local.precios.length; index++) {
        objeto.nombre.push(local.precios[index].componente);
        objeto.cantidadDeVentas.push(cantidadVentasComponente(local.precios[index].componente))
        console.log(objeto)
    }
    var indice = objeto.cantidadDeVentas.indexOf(Math.max.apply(null, (objeto.cantidadDeVentas)));
    return objeto.nombre[indice]
}

console.log(componenteMasVendido()); // Monitor GPRS 3000


// huboVentas(mes, anio): que indica si hubo ventas en un mes determinado.


function huboVentas(mes, anio) {
    for (let index = 0; index < local.ventas.length; index++) {
        if (ventasMes(mes, anio) != 0) {
            return true
        } else {
            return false
        }
    }
}
console.log(huboVentas(3, 2019)); // false


//En las ventas ya existentes, tenemos que agregar la propiedad sucursal con el valor Centro (ya que es la sucursal original). 

for (let index = 0; index < local.ventas.length; index++) {
    local.ventas[index].sucursal = 'Centro'

}

console.log(local.ventas)

//Agregar al objeto principal la propiedad sucursal

local.sucursales = ['Centro', 'Caballito']
console.log(local)


//Cargar la siguiente información en el array ventas, creando sus respectivos objetos siguiendo 
//el patrón: fecha, nombreVendedora, componentes, sucursal


function nuevasVentasFeb(fecha, nombreVendedora, componentes, sucursal) {
    local.ventas.push({ fecha, nombreVendedora, componentes, sucursal })
    return
}

nuevasVentasFeb
    (new Date(2019, 1, 02), "Hedy", ["Monitor GPRS 3000", "HDD Toyiva"], "Centro")
nuevasVentasFeb
    (new Date(2019, 1, 24), "Sheryl", ["Motherboard ASUS 1500", "HDD Wezter Dishital"], "Caballito")
nuevasVentasFeb
    (new Date(2019, 1, 1), "Ada", ["Motherboard MZI", "RAM Quinston Fury"], "Centro")
nuevasVentasFeb
    (new Date(2019, 1, 11), "Grace", ["Monitor ASC 543", "RAM Quinston"], "Caballito")
nuevasVentasFeb
    (new Date(2019, 1, 15), "Ada", ["Motherboard ASUS 1200", "RAM Quinston Fury"], "Centro")
nuevasVentasFeb
    (new Date(2019, 1, 12), "Hedy", ["Motherboard ASUS 1500", "HDD Toyiva"], "Caballito")
nuevasVentasFeb
    (new Date(2019, 1, 21), "Grace", ["Motherboard MZI", "RAM Quinston"], "Centro")
nuevasVentasFeb
    (new Date(2019, 1, 8), "Sheryl", ["Monitor ASC 543", "HDD Wezter Dishital"], "Centro")
nuevasVentasFeb
    (new Date(2019, 1, 16), "Sheryl", ["Monitor GPRS 3000", "RAM Quinston Fury"], "Centro")
nuevasVentasFeb
    (new Date(2019, 1, 27), "Hedy", ["Motherboard ASUS 1200", "HDD Toyiva"], "Caballito")
nuevasVentasFeb
    (new Date(2019, 1, 22), "Grace", ["Monitor ASC 543", "HDD Wezter Dishital"], "Centro")
nuevasVentasFeb
    (new Date(2019, 1, 5), "Ada", ["Motherboard ASUS 1500", "RAM Quinston"], "Centro")
nuevasVentasFeb
    (new Date(2019, 1, 2), "Grace", ["Motherboard MZI", "HDD Wezter Dishital"], "Centro")
nuevasVentasFeb
    (new Date(2019, 1, 7), "Sheryl", ["Monitor GPRS 3000", "RAM Quinston"], "Caballito")
nuevasVentasFeb
    (new Date(2019, 1, 14), "Ada", ["Motherboard ASUS 1200", "HDD Toyiva"], "Centro")

console.log(local.ventas)


// Crear la función ventasSucursal(sucursal), que
//  obtiene las ventas totales realizadas por una sucursal sin límite de fecha.

function ventasSucursal(sucursal) {
    var sumaSucursales = 0
    var arrayComponentes = []
    for (let index = 0; index < local.ventas.length; index++) {

        if (local.ventas[index].sucursal === sucursal) {
            arrayComponentes.push(local.ventas[index].componentes)
        }
    }
    for (let c = 0; c < arrayComponentes.length; c++) {
        sumaSucursales = sumaSucursales + precioMaquina(arrayComponentes[c])
    }
    return sumaSucursales
}



console.log(ventasSucursal("Centro")); // 4195


// Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos,
//  (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes.
//   No cantidad de ventas, sino importe total de las ventas. 
//   El importe de una venta es el que indica la función precioMaquina.




function sucursalDelMes(mes, anio) {

    var arraySucursal = []

    for (let j = 0; j < local.sucursales.length; j++) {
        var objetoNuevo = {
            nombre: local.sucursales[j],
            ventas: 0,

        }
        for (let index = 0; index < local.ventas.length; index++) {
            if (local.ventas[index].fecha.getMonth() + 1 == mes && local.ventas[index].fecha.getFullYear() == anio) {
                if (local.sucursales[j] === local.ventas[index].sucursal) {
                    if (objetoNuevo.nombre === local.ventas[index].sucursal) {
                        objetoNuevo.ventas = objetoNuevo.ventas + precioMaquina(local.ventas[j].componentes)

                    }
                }
            }


        }
        arraySucursal.push(objetoNuevo)

    }
    console.log(arraySucursal)

    var ventaMax = 0
    var sucursalMax;

    for (let k = 0; k < arraySucursal.length; k++) {
        if (arraySucursal[k].ventas > ventaMax) {
            ventaMax = arraySucursal[k].ventas;
            sucursalMax = arraySucursal[k].nombre;
            return sucursalMax
        }

    }

}





console.log(sucursalDelMes(1, 2019)); // "Centro"


// Para tener una mejor muestra de como está resultando el local, 
// queremos desarrollar un reporte que nos muestre las ventas por sucursal y por mes. 
// Para esto, necesitamos crear las siguientes funciones:

// renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año


function renderPorMes() {

    var nada = "";
    var objetoRender = {
        mesesNumero: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

    }

    for (let index = 0; index < objetoRender.mesesNumero.length; index++) {
        // console.log(objetoRender.mesesNumero[index], 2019)
        if (huboVentas(objetoRender.mesesNumero[index], 2019)) {
            //  console.log (ventasMes(objetoRender.mesesNumero[index], 2019))
            nada = nada + ventasMes(objetoRender.mesesNumero[index], 2019) + "\n"
        }


    }

    return nada
}
console.log(renderPorMes());
// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210

function renderPorSucursal() {

    var cosa = []

    for (let index = 0; index < local.sucursales.length; index++) {
        cosa = cosa + ventasSucursal(local.sucursales[index]) + "\n"

    }
    return cosa
}
console.log(renderPorSucursal());



// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265


// render(): Tiene que mostrar la unión de los dos reportes anteriores,
//  cual fue el producto más vendido y la vendedora que más ingresos generó

function render() {
    
    console.log(componenteMasVendido());
    console.log(renderPorMes());


    var vendedoritas = []

    for (let index = 0; index < local.vendedoras.length; index++) {
        var ultima = {
            nomVen: "",
            platita: 0,
        }
        ultima.nomVen += local.vendedoras[index]
        ultima.platita += ventasVendedora(local.vendedoras[index])
        vendedoritas.push(ultima)
        console.log(vendedoritas)
    }
    var ventaMax = 0
    var vendedoraMax;

    for (let k = 0; k < vendedoritas.length; k++) {
        if (vendedoritas[k].platita > ventaMax) {
            ventaMax = vendedoritas[k].platita;
            vendedoraMax = vendedoritas[k].nomVen;
        }
    }
        return vendedoraMax 

    }






    console.log(render());
// Reporte
// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210
// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265
// Producto estrella: Monitor GPRS 3000
// Vendedora que más ingresos generó: Grace

