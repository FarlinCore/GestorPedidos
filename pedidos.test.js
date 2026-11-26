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

describe("Validación de Cliente y Direccion", () => {
    const valoresInvalidos = ["", "   ", "\t\n", null, undefined, 123, {}, []];

    it("rechaza Cliente inválido (vacío, espacios o no string)", () => {
        const lista = [];

        for (const clienteInvalido of valoresInvalidos) {
            assert.throws(() => crearPedido(lista, clienteInvalido, "Calle Duarte 10"));
        }

        assert.equal(lista.length, 0);
    });

    it("rechaza Direccion inválida (vacía, espacios o no string)", () => {
        const lista = [];

        for (const direccionInvalida of valoresInvalidos) {
            assert.throws(() => crearPedido(lista, "Ana Perez", direccionInvalida));
        }

        assert.equal(lista.length, 0);
    });

    it("acepta Cliente y Direccion válidos recortando espacios exteriores", () => {
        const lista = [];
        const pedido = crearPedido(lista, "  Ana Perez  ", "  Calle Duarte 10  ");

        assert.equal(pedido.Cliente, "Ana Perez");
        assert.equal(pedido.Direccion, "Calle Duarte 10");
        assert.equal(lista.length, 1);
    });
});