import { ProdutoCategories } from "../../../src/entities";

describe("ProdutoCategories", () => {
  it("should have a LANCHES category", () => {
    expect(ProdutoCategories.LANCHES).toBe("Lanches");
  });

  it("should have a BEBIDAS category", () => {
    expect(ProdutoCategories.BEBIDAS).toBe("Bebidas");
  });

  it("should have a ACOMPANHAMENTOS category", () => {
    expect(ProdutoCategories.ACOMPANHAMENTOS).toBe("Acompanhamentos");
  });

  it("should have a SOBREMESAS category", () => {
    expect(ProdutoCategories.SOBREMESAS).toBe("Sobremesas");
  });
});
