import { ObjectId } from "mongodb";
import { Pedido } from "../../../src/entities/Pedido";
import { PedidosStatus } from "../../../src/entities/PedidoStatus";

describe("Pedido Entity", () => {
  it("should create a Pedido instance with correct values", () => {
    const id = "123";
    const client = {
      id: "456",
      name: "John Doe",
    };
    const totalValue = 100;
    const totalItens = 2;
    const status = PedidosStatus.EM_PREPARO;
    const products = [
      {
        id: "789",
        name: "Product 1",
        category: "Category 1",
        price: 50,
      },
      {
        id: "101",
        name: "Product 2",
        category: "Category 2",
        price: 50,
      },
    ];
    const createdAt = new Date();
    const updatedAt = new Date();

    const pedido = new Pedido(
      id,
      client,
      totalValue,
      totalItens,
      status,
      products,
      createdAt,
      updatedAt
    );

    expect(pedido.id).toBe(id);
    expect(pedido.client).toEqual(client);
    expect(pedido.totalValue).toBe(totalValue);
    expect(pedido.totalItens).toBe(totalItens);
    expect(pedido.status).toBe(status);
    expect(pedido.products).toEqual(products);
    expect(pedido.createdAt).toBe(createdAt);
    expect(pedido.updatedAt).toBe(updatedAt);
  });

  it("should create a Pedido instance with optional _id", () => {
    const id = "123";
    const client = {
      id: "456",
      name: "John Doe",
    };
    const totalValue = 100;
    const totalItens = 2;
    const status = PedidosStatus.EM_PREPARO;
    const products = [
      {
        id: "789",
        name: "Product 1",
        category: "Category 1",
        price: 50,
      },
      {
        id: "101",
        name: "Product 2",
        category: "Category 2",
        price: 50,
      },
    ];
    const createdAt = new Date();
    const updatedAt = new Date();
    const _id = new ObjectId();

    const pedido = new Pedido(
      id,
      client,
      totalValue,
      totalItens,
      status,
      products,
      createdAt,
      updatedAt,
      _id
    );

    expect(pedido.id).toBe(id);
    expect(pedido.client).toEqual(client);
    expect(pedido.totalValue).toBe(totalValue);
    expect(pedido.totalItens).toBe(totalItens);
    expect(pedido.status).toBe(status);
    expect(pedido.products).toEqual(products);
    expect(pedido.createdAt).toBe(createdAt);
    expect(pedido.updatedAt).toBe(updatedAt);
    expect(pedido._id).toBe(_id);
  });
});
