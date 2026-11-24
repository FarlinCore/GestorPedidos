
const estados = ['Creado'];
const pedidos = [];
const repartidores = [];``

export function crearPedido(pedidos, Cliente, Direccion){
    const pedido = {
        id: pedidos.length + 1,
        Cliente: Cliente,
        Direccion: Direccion,
        estado: estados[0],
        repartidor: null
    }

    pedidos.push(pedido);
    return pedido;
}
