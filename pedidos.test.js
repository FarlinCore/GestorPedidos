// pedidos.test.js

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import {
  ESTADOS_PEDIDO,
  crearPedido,
  agregarRepartidor,
  avanzar
} from './pedido.js';

// PRUEBAS DE CREACIÓN DE PEDIDOS
describe('crearPedido()', () => {
  it('devuelve un pedido con id, estado Creado y repartidor null', () => {
    const pedidos = [];

    const pedido = crearPedido(
      pedidos,
      'Ana Perez',
      'Calle Duarte 45'
    );

    assert.ok(pedido.id);
    assert.equal(pedido.estado, ESTADOS_PEDIDO.CREADO);
    assert.equal(pedido.repartidor, null);
    assert.equal(pedidos.length, 1);
  });
});

// PRUEBAS DE AGREGAR REPARTIDORES
describe('agregarRepartidor()', () => {
  it('debe agregar un nuevo repartidor', () => {
    const repartidores = ['Carlos Perez', 'Ana Marte'];

    const resultado = agregarRepartidor(
      repartidores,
      'Luis Gomez'
    );

    assert.deepEqual(resultado, [
      'Carlos Perez',
      'Ana Marte',
      'Luis Gomez'
    ]);
  });

  it('no debe agregar un nombre vacío', () => {
    const repartidores = ['Carlos Perez'];

    const resultado = agregarRepartidor(
      repartidores,
      '   '
    );

    assert.deepEqual(resultado, ['Carlos Perez']);
  });
});

// PRUEBAS DE AVANZAR ESTADO
describe('avanzar()', () => {
  it('avanza el estado de un pedido secuencialmente sin pasar de Entregado', () => {
    const pedidosPrueba = [
      {
        id: 1,
        Cliente: 'Maria Santos',
        Direccion: 'Calle Duarte #45',
        Costo: 150,
        estado: ESTADOS_PEDIDO.CREADO,
        repartidor: null,
      },
    ];

    avanzar(1, pedidosPrueba);
    assert.equal(
      pedidosPrueba[0].estado,
      ESTADOS_PEDIDO.ASIGNADO
    );

    avanzar(1, pedidosPrueba);
    assert.equal(
      pedidosPrueba[0].estado,
      ESTADOS_PEDIDO.EN_CAMINO
    );

    avanzar(1, pedidosPrueba);
    assert.equal(
      pedidosPrueba[0].estado,
      ESTADOS_PEDIDO.ENTREGADO
    );

    // No debe avanzar más allá de Entregado
    avanzar(1, pedidosPrueba);
    assert.equal(
      pedidosPrueba[0].estado,
      ESTADOS_PEDIDO.ENTREGADO
    );
  });
});
