/// <reference types="cypress" />

import profile from '../../fixtures/perfil.json'

describe('Testes de Criação de Perfil', () => {
    let token
    beforeEach(() => {
        cy.tokenJwt().then((auth) => {
            token = auth
        })
    })

    it('[POST] - Criar um Perfil', () => {
        cy.request({
            method: 'POST',
            url: '/api/profile/',
            headers: {
                Cookie: token
            },
            body: profile
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})

describe('Testes de consultas de Perfil', () => {
    let token
    beforeEach(() => {
        cy.tokenJwt().then((auth) => {
            token = auth
        })
    })

    it('[GET] - Consultar um Perfil', () => {
        cy.request({
            method: 'GET',
            url: '/api/profile/',
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})

describe('Testes de exclusão', () => {
    let token
    beforeEach(() => {
        cy.tokenJwt().then((auth) => {
            token = auth
        })
    })

    it('[DELETE] - Exluir um Perfil', () => {
        cy.cadastrarUser()
        cy.request({
            method: 'DELETE',
            url: '/api/profile/',
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.msg).to.eq("Usuário removido")
        })
    })
})

describe('Testes de Alteração', () => {
    let token
    beforeEach(() => {
        cy.tokenJwt().then((auth) => {
            token = auth
        })
    })

    it('[PUT] - Add experiencia', () => {
        cy.request({
            method: 'PUT',
            url: '/api/profile/experience',
            body: {
                "title": "Minha Experiencia",
                "company": "cwi",
                "location": "sp",
                "from": "2022-09-12",
                "to": "2022-09-12",
                "current": false,
                "description": "teste de Experiencia"
            }

        }).then((response) => {

            expect(response.status).to.eq(200)
        })
    })
})
