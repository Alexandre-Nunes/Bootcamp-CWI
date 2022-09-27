/// <reference types="cypress" />

const experienciaPage = require('../../support/Experiencia/ExperienciaPage.js.js')

describe('Funcionalidade: Adicionar experiência', () => {

    beforeEach(() => {
        cy.visit('login')
        cy.fixture("usuarios").then((user) => {
            cy.login(user[2].email, user[2].senha)
        })
    });

    it.only('Deve adicionar uma experiência com sucesso', () => {
        cy.log(2+2)
    });

    it('Deve adicionar uma experiência com sucesso', () => {
        experienciaPage.addExperiencia()
        experienciaPage.excluiExperiencia()
    });
});