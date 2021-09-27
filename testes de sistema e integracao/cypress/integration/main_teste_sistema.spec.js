 describe("Teste pergunta", () => {
    beforeEach(() => {
      cy.visit("http://localhost:8080");
    });

    it("Deve ser possivel responder uma pergunta", () => {
      cy.get("#responder-button").click()
      cy.get("#resposta-body").type("teste resposta");
      cy.get("#resposta-button").click()
    });

    it("Deve fazer uma pergunta", () => {
      cy.get("#perguntar").click()
      cy.get("#perguntar-titulo").type("teste pergunta");
      cy.get("#perguntar-descricao").type("teste pergunta descricao");
      cy.get("#button-perguntar").click();
    });
});