/// <reference types="cypress" />

const experienciaPage = require('../../support/Experiencia/ExperienciaPage.js.js')

describe('Funcionalidade: Adicionar experiência', () => {

    beforeEach(() => {
        cy.visit('login')
        cy.fixture("usuarios").then((user) => {
            cy.login(user[2].email, user[2].senha)
        })
    });

    it('Deve adicionar uma experiência com sucesso', () => {
        experienciaPage.addExperiencia()
        experienciaPage.excluiExperiencia()
    });
});