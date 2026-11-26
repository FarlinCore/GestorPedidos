const estados = ['Creado'];
const repartidores = [];
const pedidos = [];

//LOGICA DEL ID
function calcularSiguienteId(pedidos) {
    return pedidos.length + 1;
  }

export function crearPedido(pedidos, Cliente, Direccion){
    const pedido = {
        id: calcularSiguienteId(pedidos),
        Cliente: Cliente.trim(),
        Direccion: Direccion.trim(),
        estado: estados[0],
        repartidor: null
    }
    pedidos.push(pedido);
    return pedido;
}
export function agregarRepartidor(repartidores, nombre){
    const nombrelimpio = nombre?.trim();
    if (!nombrelimpio){
        return repartidores;
    }
    repartidores.push(nombrelimpio);
    return repartidores;
}

