import { PedidosStatus } from "../../../src/entities/PedidoStatus";

describe("PedidosStatus Enum", () => {
  it("should have RECEBIDO status", () => {
    expect(PedidosStatus.RECEBIDO).toBe("RECEBIDO");
  });

  it("should have EM_PREPARO status", () => {
    expect(PedidosStatus.EM_PREPARO).toBe("EM_PREPARO");
  });

  it("should have PRONTO status", () => {
    expect(PedidosStatus.PRONTO).toBe("PRONTO");
  });

  it("should have FINALIZADO status", () => {
    expect(PedidosStatus.FINALIZADO).toBe("FINALIZADO");
  });

  it("should have CANCELADO status", () => {
    expect(PedidosStatus.CANCELADO).toBe("CANCELADO");
  });
});
