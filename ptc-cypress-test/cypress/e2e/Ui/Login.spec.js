/// <reference types="cypress" />

describe('US:BPTC001 Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login')
    });

    it('Deve realizar login com sucesso', () => {
        cy.login('qa.alexandrenunes@teste.com','Teste@1234')
        cy.get('[data-test="dashboard-welcome"]').should('contain','Bem-vindo');
        cy.get('[data-test="dashboard-welcome"]').should('contain.text','Bem-vindo');
    });

    it('Validar mensagem de erro, ao inserir usuário e senha inválidos', () => {
        cy.login('usuario_invalido@teste.com','Senha_invalida@1234')
        cy.get('[data-test="alert"]').should('contain','Credenciais inválidas');
    });
});