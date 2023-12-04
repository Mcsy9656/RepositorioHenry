
function viajar(destino){
    if(destino === 'brasil'){
        console.log('gire a la izquierda');
    } else if(destino === 'argentina'){
        console.log('gire a la derecha');
        } else {
            console.log('nos perdimos');
        }
    }
viajar('argentina');
viajar('PRUEBA')

// comprar

function comprar(producto){
    if(producto === 'pDeLimpieza'){
        console.log('si cuentas con 100');
    } else if(producto === 'pDeAseo'){
        console.log('si cuentas con 50')
    } else {
        console.log('no hay dinero')
    }
}

comprar('pDeLimpieza')
comprar('pDeAseo')
comprar('comida')

// puedeManejar

function puedeManejar (edad) {
    if(edad >= 18){
        console.log("si puede"); 
    } else if (edad < 5){
        console.log("tas bebito");
    }else{
        console.log("es peque")
    }
}
    
puedeManejar(7)
