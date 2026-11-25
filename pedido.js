const estados = ['Creado'];
const repartidores = [];
const pedidos = [];

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