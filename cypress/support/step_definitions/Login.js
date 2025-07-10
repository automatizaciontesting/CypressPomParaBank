import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

//Importamos Clases de Page Objects
import LoginPage from '../page_objects/LoginPage'
import HomePage from "../page_objects/HomePage"

const loginPage = new LoginPage()
const homePage = new HomePage()

Given('como usuario ParaBank deseo abrir la aplicacion web', () => {  
    cy.visit("/")
})

When("ingreso las credenciales de usuario", (table) => {
  table.hashes().forEach((row) => {
    loginPage.getTxtUser().type(row.user)
    loginPage.getTxtPass().type(row.password)
    loginPage.getBtnLogin().click()

  });
});

Given('me encuentro logueado correctamente en la aplicacion', () => {  
    homePage.getLnkLogOut().should('be.visible')
})

Given('ingreso a Parabank con los datos registrados', () => {  
  //cy.wrap(FIRSTNAME).as('firstName');
  cy.get('@firstName').then((valor) => {
   loginPage.getTxtUser().type(valor)
  }); 

  loginPage.getTxtUser().type()
    loginPage.getTxtPass().type(row.password)
    loginPage.getBtnLogin().click()
})


