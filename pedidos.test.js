// pedidos.test.js
import { describe, it, test } from 'node:test';
import assert from 'node:assert/strict';
import { crearPedido, agregarRepartidor } from './pedido.js';

describe('crearPedido', () => {
  it('devuelve un pedido con id, estado "Creado" y repartidor null', () => {
    const pedidos = [];
    const pedido = crearPedido(pedidos, 'Ana Perez', 'Calle Duarte 45');

    assert.ok(pedido.id);
    assert.equal(pedido.estado, 'Creado');
    assert.equal(pedido.repartidor, null);
    assert.equal(pedidos.length, 1);
  });
});

