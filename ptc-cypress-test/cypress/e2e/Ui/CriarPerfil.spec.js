/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('cadastrar')
    cy.cadastro('Alexandre Teste', 'qa.alexandre@teste.com', 'Teste@1234', 'Teste@1234')
    cy.get('[data-test="dashboard-welcome"]').should('contain','Bem-vindo Alexandre Teste');
});

describe('US:BPTC003 Funcionalidade: Criar Perfil', () => {
    it('Deve criar perfil com sucesso', () => {
        cy.criarPerfil('CWI', 'https://carrinho.casasbahia.com.br/', 'Rio Grande do Sul', 'Automação UI com Cypress', 'Alexandre-Nunes', 'Me chamo Alexandre Nunes, atuo como QA desde 2016 e trabalho na CWI/VIA a 1 ano e meio.')
        cy.get('[data-test="alert"]').should('exist')
          .should('be.visible') 
          .should('contain', 'Perfil Criado')
    });
});

afterEach(() => {
    cy.get('[data-test="dashboard-deleteProfile"]').should('exist')
      .should('be.visible')
      .click()
    cy.get('[data-test="alert"]').should('contain', 'Sua conta foi removida')
});