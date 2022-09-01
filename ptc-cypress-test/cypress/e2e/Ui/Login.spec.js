/// <reference types="cypress" />
import usuarios from "../../fixtures/usuarios.json"

describe('US:BPTC001 Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login')
    });

    it('Deve realizar login com sucesso', () => {
        cy.login('qa.alexandrenunes@teste.com', 'Teste@1234')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo');
        cy.get('[data-test="dashboard-welcome"]').should('contain.text', 'Bem-vindo');
    });

    it('Validar mensagem de erro, ao inserir usuário e senha inválidos', () => {
        cy.login('usuario_invalido@teste.com', 'Senha_invalida@1234')
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas');
    });

    it('Deve realizar login com sucesso usando importação', () => {
        cy.login(usuarios[0].email, usuarios[0].senha)
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo');
        cy.get('[data-test="dashboard-welcome"]').should('contain.text', 'Bem-vindo');
        cy.title().should('eq', 'ConexaoQA')
    });

    it('Deve realizar login com sucesso usando fixture', () => {
        cy.fixture("usuarios").then((user) => {
            cy.login(user[0].email, user[0].senha)
        })
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo');
        cy.get('[data-test="dashboard-welcome"]').should('contain.text', 'Bem-vindo');
        cy.title().should('eq', 'ConexaoQA')
    });
});