// pedidos.test.js
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { crearPedido } from './pedido.js';

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

test('Debe agregar un nuevo repartidor', () => {
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


test('No debe agregar un nombre vacío', () => {
    const repartidores = ['Carlos Perez'];


    const resultado = agregarRepartidor(repartidores, '   ');


    assert.deepEqual(resultado, ['Carlos Perez']);
});