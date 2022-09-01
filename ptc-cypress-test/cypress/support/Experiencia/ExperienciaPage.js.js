const el = require('./ExperienciaElements').ELEMENTS

class ExperienciaPage {
    addExperiencia() {
        cy.get(el.BTN_ADICIONAR_EXPERIENCIA).click()
        cy.get(el.INPUT_POSICAO).type('QA')
        cy.get(el.INPUT_EMPRESA).type('CWI')
        cy.get(el.INPUT_LOCALIZACAO).type('RS')
        cy.get(el.INPUT_DATA_INICIO).type('05/10/2010')
        cy.get(el.CHECKBOX_ATUAL).check()
        cy.get(el.INPUT_DESCRICAO_FORMACAO).type(' Sou QA participando do treinamento de Cypress')
        cy.get(el.BTN_CONFIRMA_ADD_EXPERIENCIA).click()
        cy.get(el.ALERT_CONFIRMA_ADD_EXPERIENCIA).should('be.visible')
        cy.get(el.ALERT_CONFIRMA_ADD_EXPERIENCIA).should('be.contain', 'Experiência Adicionada')
    }

    excluiExperiencia() {
       cy.get(el.BTN_EXCLUIR_EXPERIENCIA).click()
       cy.get(el.ALERT_CONFIRMA_EXCLUSAO_EXPERIENCIA).should('be.visible')
       cy.get(el.ALERT_CONFIRMA_EXCLUSAO_EXPERIENCIA).should('be.contain', 'Experiência Removida')
       
    }
}

export default new ExperienciaPage()

