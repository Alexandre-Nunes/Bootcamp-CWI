/// <reference types="cypress" />

const FormacaoPage = require('../../support/Formacao/FormacaoPage.js')

describe('Funcionalidade: Adicionar formação', () => {

    beforeEach(() => {
        cy.visit('login')
        cy.fixture("usuarios").then((user) => {
            cy.login(user[2].email, user[2].senha)
        })
    });

    it('Deve adicionar uma formação com sucesso', () => {
        FormacaoPage.addFormacao()
        FormacaoPage.excluiFormacao()
    });
});