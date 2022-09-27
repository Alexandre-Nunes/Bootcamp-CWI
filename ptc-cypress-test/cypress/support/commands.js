// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

import auth from '../fixtures/auth.json'

Cypress.Commands.add('navigate', (route) => {
    cy.intercept(route).as('loadpage')
    cy.visit(route, { timeout: 30000 })
    cy.wait('@loadpage')
})

Cypress.Commands.add("login", (email, senha) => {
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="login-password"]').type(senha)
    cy.get('[data-test="login-submit"]').click()
})

Cypress.Commands.add("cadastro", (nome, email, senha, confirmasenha) => {
    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
    cy.get('[data-test="register-email"]').type(email)
    cy.get('[data-test="register-password"]').type(senha)
    cy.get('[data-test="register-password2"]').type(confirmasenha)
    cy.get('[data-test="register-submit"]').click()
})

Cypress.Commands.add("criarPerfil", (company, webSite, location, skills, gitHub, description) => {
    cy.get('[data-test="dashboard-createProfile"]').click()
    cy.get('.large').should('contain', 'Crie Seu Perfil')
    cy.get('#mui-component-select-status').click()
    cy.get('[data-test="status-3"]').click()
    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(company)
    cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type(webSite)
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type(location)
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(skills)
    cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type(gitHub)
    cy.get('[rows="1"]').type(description)
    cy.get('[data-test="profile-submit"]').click()
})

Cypress.Commands.add("tokenJwt", () => {
    cy.request({
        method: 'POST',
        url: '/api/auth',
        body: auth
    }).then((response) => {
        return response.body.jwt
    })
})

Cypress.Commands.add("criarPostagem", (token) => {
    cy.request({
        method: 'POST',
        url: '/api/posts',
        headers: {
            Cookie: token
        },
        body: {
            text: " bootcamp 2022"
        }
    })
})

Cypress.Commands.add("cadastrarUser", () => {
    cy.request({
        method: 'POST',
        url: '/api/users',
        body: {
            "name": "Alexandre API",
            "email": "apiteste@teste.com.br",
            "password": "Teste@1234"
        }
    })
})

import user from "../fixtures/usuarios.json"
Cypress.Commands.add("loginApp", () => {
    cy.request({
        method: 'POST',
        url: 'api/auth',
        body: {
            email: user[0].email,
            password: user[0].senha
        }
    }).then((login) => {
        cy.setCookie('region', 'BR-SP')
    })
})