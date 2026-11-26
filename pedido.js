
  const ESTADOS_PEDIDO = Object.freeze({
    CREADO: "Creado",
    ASIGNADO: "Asignado",
    EN_CAMINO: "En camino",
    ENTREGADO: "Entregado",
});

function normalizarTextoRequerido(valor, etiqueta) {
    if (typeof valor !== "string" || valor.trim() === "") {
        throw new Error(`${etiqueta} es obligatorio.`);
    }

    return valor.trim();
}

function obtenerSiguienteId(listaPedidos) {
    if (listaPedidos.length === 0) {
        return 1;
    }

    const ultimoId = listaPedidos.reduce(
        (maxId, pedido) => (pedido.id > maxId ? pedido.id : maxId),
        0
    );

    return ultimoId + 1;
}

export function crearPedido(listaPedidos, Cliente, Direccion) {
    const clienteLimpio = normalizarTextoRequerido(Cliente, "El cliente");
    const direccionLimpia = normalizarTextoRequerido(Direccion, "La dirección");

    const nuevoPedido = {
        id: obtenerSiguienteId(listaPedidos),
        Cliente: clienteLimpio,
        Direccion: direccionLimpia,
        estado: ESTADOS_PEDIDO.CREADO,
        repartidor: null,
    };

    listaPedidos.push(nuevoPedido);
    return nuevoPedido;
}

function asignar(id, indice) {
    const pedido = pedidos.find(p => p.id === id);
    if (indice === "") return;
    pedido.repartidor = repartidores[indice];
    if (pedido.estado === 0) pedido.estado = 1; // al asignar pasa a "Asignado"
    render();
  }
  
  function agregarRepartidor() {
    const input = document.getElementById("nombreRepartidor");
    if (input.value.trim() === "") return;
    repartidores.push(input.value.trim());
    input.value = "";
    render();
  }
  
