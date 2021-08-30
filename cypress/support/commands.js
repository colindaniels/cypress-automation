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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-localstorage-commands"

Cypress.Commands.add("login", (email, password) => {
    cy.get('.form-container').find('button').as('login-btn')
      cy.get('@login-btn').then(btn => {
        cy.get('.form-signin').find("input[id='username']").type(email)
        cy.get('.form-signin').find("input[id='password']").type(password)
        cy.get('@login-btn').click()
    })
})

Cypress.Commands.add("fill_input", (css_selector, input) => {
  if (typeof(input) == 'string') {
    cy.get('.sc-fYxtnH').find(css_selector).type(`${input}{enter}`)
  }
  else if (typeof(input) == 'object') {
      cy.get('.sc-fYxtnH').find(css_selector).then((e) => {
        for (let i=0; i < input.length; i++) {
          cy.get(e).type(`${input[i]}{enter}{esc}`)
        }
      })
  }
});

Cypress.Commands.add("checkbox", (css_selector, input) => {
  if (input == true) {
    cy.get('.sc-fYxtnH').find(css_selector).then((e) => {
      cy.get(e).click()
    })
  }
})

Cypress.Commands.add("dynamic_fill_input", (css_selector_box, css_selector_individual, input_data, add_more_selector) => {
  cy.get('.sc-fYxtnH').find(css_selector_box).then((e) => {
    for (let i=0; i < input_data.length-1; i++) {
      cy.get(e).find(add_more_selector).click()
    }
    cy.get(css_selector_box).find(css_selector_individual).each((element, index, list) => {
      for (let i=0; i < Object.keys(input_data[index]).length; i++) {
        for (let j=0; j < Object.values(input_data[index])[i].length; j++) {
          cy.get(element).find('input').eq(i).then($input => {
            if ($input.is(':visible')) {
              cy.get(element).find('input').eq(i).type(`${Object.values(input_data[index])[i][j]}{enter}{esc}`)
            }
            else {
              cy.get(element).find('.ant-select').eq(i).click()
              cy.get(element).find('input').eq(i).type(`${Object.values(input_data[index])[i][j]}{enter}{esc}`)
            }
          })
        }
      }
    })
  })
})