/// <reference types="cypress" />

const faker = require('faker-br')

describe('US: BPTC0002 Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('cadastrar')
        cy.get('.lead').should('contain', 'Criar Sua Conta')
    });

    it('Deve realizar cadastro com sucesso.', () => {
        cy.cadastro('Nome Teste', (faker.internet.email()), '123456', '123456')
        cy.get('.large').should('be.visible')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Nome Teste')
        cy.get('[data-test="dashboard-createProfile"]').should('exist')
    });

    it('Tentar realizar cadastro com dados de usuário já cadastrado.', () => {
        cy.cadastro('Nome Teste', 'email@teste.com', '123456', '123456')
        cy.get('[data-test="alert"]').should('be.visible')
        cy.get('[data-test="alert"]').should('contain', 'Usuário já registrado')
    });
});