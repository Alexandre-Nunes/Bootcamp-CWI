/// <reference types="cypress" />
describe('Funcionalidade: Visualização dos perfis ', () => {
    beforeEach(() => {
        cy.visit('perfis')
        cy.intercept({
            method: 'GET',
            url: 'api/profile',
        },{
            statusCode: 200,
            fixture: 'profile-mock'
        })
        cy.reload()
    });
   
    it('Validar o primeiro item da lista', () => {
        cy.get('[data-test="profile-name"]').first().should('contain', 'Alexandre Nunes')
    });

    it.only('Validar lista vazia', () => {
        cy.intercept('api/profile', {statusCode: 404})
        cy.reload()

        cy.get('[data-test="profiles-noProfiles"]').should('contain', 'Nenhum perfil encontrado')
    });

    it('Validar o ultimo item da lista', () => {
        cy.get('[data-test="profile-name"]').last().should('contain', 'Alexandre Filho')
    });

    it('Validar o terceiro item da lista', () => {
        cy.get('[data-test="profile-name"]').eq(2).should('contain', 'Murillo Nunes')
    });
});