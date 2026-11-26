<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>sistema de pedidos</title>
  <!-- Bootstrap por CDN: no hay que instalar nada -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

<div class="container py-4">
  <h1 class="h3 mb-4">pedidos y entregas</h1>

  <div class="row g-4">

    <!-- Columna izquierda: repartidores -->
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h2 class="h5">Repartidores</h2>
          <ul id="listaRepartidores" class="list-group list-group-flush mb-3"></ul>
          <!-- <div class="input-group">
            <input id="nombreRepartidor" class="form-control" placeholder="nombre">
            <button class="btn btn-primary" onclick="agregarRepartidor()">Agregar</button>
          </div> -->
        </div>
      </div>
    </div>

    <!-- Columna derecha: pedidos -->
    <div class="col-md-8">
      <div class="card mb-4">
        <div class="card-body">
          <h2 class="h5">PEDIDOS</h2>
          <div class="row g-2">
            <div class="col-sm-3">
              <input id="cliente" class="form-control" placeholder="cliente">
            </div>
            <div class="col-sm-4">
              <input id="direccion" class="form-control" placeholder="dirección">
            </div>
            <div class="col-sm-2">
              <input id="costo" type="number" min="0" step="0.01" class="form-control" placeholder="costo">
            </div>
            <div class="col-sm-3 d-grid">
              <button class="btn btn-success" onclick="crearPedido()">Crear Pedido</button>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h2 class="h5">PEDIDOS</h2>
          <div class="table-responsive">
            <table class="table align-middle">
              <thead>
                <tr>
                  <th>CLIENTE </th>
                  <th>ENVIO</th>
                  <th>ESTADO</th>
                  <th>REPARTIDOR</th>
                  <th>COSTO</th>
                  <th>ACCIONES</th>
                </tr>
              </thead>
              <tbody id="tablaPedidos"></tbody>
              <tfoot>
                <tr>
                  <td colspan="2" class="fw-semibold">Total:</td>
                  <td id="totalEnvios" class="fw-semibold"></td>
                  <td colspan="3"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>






<script>
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

    function crearPedido(listaPedidos, Cliente, Direccion) {
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

    function agregarRepartidor(repartidores, nombre) {
      const nombrelimpio = nombre?.trim();
      if (!nombrelimpio) {
        return repartidores;
      }
      repartidores.push(nombrelimpio);
      return repartidores;
    }
  </script>
</body>
</html>