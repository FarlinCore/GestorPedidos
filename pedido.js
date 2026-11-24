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

import test from 'node:test';
import assert from 'node:assert/strict';
import { agregarRepartidor } from './pedidos.js';

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
});``