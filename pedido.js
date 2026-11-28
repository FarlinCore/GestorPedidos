export const ESTADOS_PEDIDO = {
  CREADO: "Creado",
  ASIGNADO: "Asignado",
  EN_CAMINO: "En camino",
  ENTREGADO: "Entregado",
};

export const estados = Object.values(ESTADOS_PEDIDO);

function obtenerSiguienteEstado(estadoActual) {
  const indiceActual = estados.indexOf(estadoActual);
  const esEstadoValido = indiceActual !== -1;
  const esUltimoEstado = indiceActual === estados.length - 1;

  if (!esEstadoValido || esUltimoEstado) return estadoActual;

  return estados[indiceActual + 1];
}

export function avanzar(id, listaPedidos = pedidos) {
  const pedido = listaPedidos.find((p) => p.id === id);
  if (!pedido) return undefined;

  pedido.estado = obtenerSiguienteEstado(pedido.estado);

  if (typeof renderPedidos === "function") renderPedidos();

  return pedido;
}