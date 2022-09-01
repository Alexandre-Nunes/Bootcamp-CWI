const el = require('./FormacaoElements').ELEMENTS

class FormacaoPage {
    addFormacao() {
        cy.get(el.BTN_ADICIONAR_FORMACAO).click()
        cy.get(el.INPUT_ESCOLA).type('Uninter')
        cy.get(el.INPUT_GRAU).type('MBA')
        cy.get(el.INPUT_CURSO).type('TI')
        cy.get(el.INPUT_DATA_INICIO).type('05/10/2010')
        cy.get(el.CHECKBOX_CURSANDO).check()
        cy.get(el.INPUT_DESCRICAO_FORMACAO).type(' Formado em Tecnologia da Informação')
        cy.get(el.BTN_CONFIRMA_ADD_FORMACAO).click()
     
         cy.get(el.ALERT_CONFIRMA_ADD_FORMACAO).should('be.visible')
         cy.get(el.ALERT_CONFIRMA_ADD_FORMACAO).should('contain', 'Formação Acadêmica Adicionada')
    }

    excluiFormacao() {
       cy.get(el.BTN_EXCLUIR_FORMACAO).click()
       cy.get(el.ALERT_CONFIRMA_EXCLUSAO_FORMACAO).should('be.visible')
       cy.get(el.ALERT_CONFIRMA_EXCLUSAO_FORMACAO).should('contain', 'Formação Acadêmica Removida')
       
    }
}

export default new FormacaoPage()

