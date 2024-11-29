import { PedidoUseCase } from "../../../src/usecases/PedidoUseCase";
import { IPedidoRepository } from "../../../src/gateways";
import { MercadoPagoAPI } from "../../../src/services/MercadoPagoAPIService";
import { Pedido, PedidosStatus } from "../../../src/entities";
import { ICheckoutBody } from "../../../src/interfaces";

describe("PedidoUseCase", () => {
  it("should checkout a pedido and create it in MercadoPago", async () => {
    const pedidoRepository: IPedidoRepository = {
      checkout: jest.fn(),
      listPedidos: jest.fn(),
      updatePedidoStatus: jest.fn(),
      findPedidoById: jest.fn(),
    };

    const mercadoPagoAPI: MercadoPagoAPI = {
      createPedido: jest.fn(),
    };

    const pedidoUseCase = new PedidoUseCase(pedidoRepository, mercadoPagoAPI);

    const body: ICheckoutBody = {
      client: {
        id: "123",
        name: "John Doe",
      },
      products: [
        {
          id: "123",
          name: "Product",
          category: "Category",
          price: 100,
        },
      ],
      totalValue: 100,
      totalItens: 1,
    };
    const result = await pedidoUseCase.checkout(body);

    expect(pedidoRepository.checkout).toHaveBeenCalledWith(body);
    expect(mercadoPagoAPI.createPedido).toHaveBeenCalledWith(result);
  });

  it("should list pedidos by status", async () => {
    const pedidoRepository: IPedidoRepository = {
      checkout: jest.fn(),
      listPedidos: jest.fn(),
      updatePedidoStatus: jest.fn(),
      findPedidoById: jest.fn(),
    };

    const mercadoPagoAPI: MercadoPagoAPI = {
      createPedido: jest.fn(),
    };

    const pedidoStatus = PedidosStatus.EM_PREPARO;
    const pedidoUseCase = new PedidoUseCase(pedidoRepository, mercadoPagoAPI);
    const result = await pedidoUseCase.listPedidos(pedidoStatus);

    expect(pedidoRepository.listPedidos).toHaveBeenCalledWith({
      status: pedidoStatus,
    });
    expect(pedidoRepository.listPedidos).toHaveBeenCalledTimes(1);
  });

  it("should check payment and update status", async () => {
    const pedidoRepository: IPedidoRepository = {
      checkout: jest.fn(),
      listPedidos: jest.fn(),
      updatePedidoStatus: jest.fn(),
      findPedidoById: jest.fn(),
    };

    const mercadoPagoAPI: MercadoPagoAPI = {
      createPedido: jest.fn(),
    };

    const pedidoId = "123";
    const pedidoUseCase = new PedidoUseCase(pedidoRepository, mercadoPagoAPI);
    const result = await pedidoUseCase.checkPaymentAndUpdateStatus(pedidoId);

    expect(pedidoRepository.updatePedidoStatus).toHaveBeenCalledWith(
      pedidoId,
      PedidosStatus.EM_PREPARO
    );
    expect(pedidoRepository.updatePedidoStatus).toHaveBeenCalledTimes(1);
  });
});
