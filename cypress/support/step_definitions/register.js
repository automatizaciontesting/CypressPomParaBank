import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"


//Importamos Clases de Page Objects
import { faker } from '@faker-js/faker';
import LoginPage from '../page_objects/LoginPage'
import HomePage from "../page_objects/HomePage"
import RegisterPage from "../page_objects/RegisterPage"

const loginPage = new LoginPage()
const homePage = new HomePage()
const registerPage = new RegisterPage()

When("realizo el registro de un cliente", () => {
    loginPage.getLknRegister().click()
    var firstName= faker.person.firstName()
    var passwordUser= faker.internet.password()
    const FIRSTNAME = firstName;

    cy.wrap(FIRSTNAME).as('firstName');
    
    registerPage.getTxtFirstName().type(firstName)
    registerPage.getTxtLastName().type(faker.person.lastName())
    registerPage.getTxtAddress().type(faker.location.streetAddress())
    registerPage.getTxtCity().type(faker.location.city())
    registerPage.getTxtState().type(faker.location.state())
    registerPage.getTxtZipCode().type(faker.location.zipCode())
    registerPage.getTxtNumberPhone().type(faker.phone.number())
    registerPage.getTxtSsn().type(faker.location.zipCode())
    registerPage.getTxtUserName().type(firstName)
    registerPage.getTxtPassword().type(passwordUser)
    registerPage.getTxtConfirmPassword().type(passwordUser)
    registerPage.getBtnRegister().click({ force: true })
    
    homePage.getLnkLogOut().click()
    loginPage.getTxtUser().type(firstName)
    cy.log(firstName)
    loginPage.getTxtPass().type(passwordUser)
    cy.log(passwordUser)
    loginPage.getBtnLogin().click()


});